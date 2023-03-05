import fs from 'fs';
type Dados = {
  dia: number;
  valor: number;
}
const rawString = fs.readFileSync(process.cwd() + '\\dist\\dados.json', { encoding: 'utf-8' });
const dados: Dados[] = JSON.parse(rawString);


function calculateMinimumValue(dadosArray: typeof dados) {
  let minimo = Number.MAX_SAFE_INTEGER;
  let dia = -1;

  for (const faturamento of dadosArray) {
    if ( faturamento.valor < minimo) {
      minimo = faturamento.valor;
      dia = faturamento.dia;
    }
  }
  return { minimo, dia };
}

function calculateMaximumValue(dadosArray: typeof dados) {
  let maximo = Number.MIN_SAFE_INTEGER;
  let dia = -1;

  for (const faturamento of dadosArray) {
    if ( faturamento.valor > maximo) {
      maximo = faturamento.valor;
      dia = faturamento.dia;
    }
  }
  return { maximo, dia };
}

function getMonthlyAverageIncome(dadosArray: typeof dados) {
  const days = dadosArray.length;
  let accumulator = 0;
  accumulator = dadosArray.reduce(
    (accumulator, currentDay) => accumulator + currentDay.valor, accumulator);
  return accumulator / days;
}

function numberOfDaysAboveAverage(dadosArray: typeof dados) {
  let days = 0;
  let averageIncome = getMonthlyAverageIncome(dadosArray);
  for (const currentDay of dadosArray) {
    if (currentDay.valor > averageIncome ) {
      ++days;
    }
  }
  return days;
}

const dadosSemFeriados = dados.filter(currentDay => currentDay.valor > 0);
const valorMin = calculateMinimumValue(dados);
const minSemFeriados = calculateMinimumValue(dadosSemFeriados);
const valorMax = calculateMaximumValue(dados);
const diasMediaMensal = numberOfDaysAboveAverage(dadosSemFeriados);

console.log(
`Menor valor de faturamento foi de R$${valorMin.minimo}, no dia ${valorMin.dia}
Menor valor de faturamento(ignorando feriados) foi de R$${minSemFeriados.minimo} no dia ${minSemFeriados.dia}
Maior valor de faturamento foi de R$${valorMax.maximo} no dia ${valorMax.dia}
O número de dias com o valor de faturamento superior a média foi de: ${diasMediaMensal} dias.
`);