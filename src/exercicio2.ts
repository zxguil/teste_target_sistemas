const NUMERO_TESTE = Number(process.argv[2]) || 1597;
const NUMERO_MAXIMO = Number(process.argv[3]) || 10000;

if ( !NUMERO_TESTE 
  || !NUMERO_MAXIMO 
  || Number.isNaN(NUMERO_TESTE) 
  || Number.isNaN(NUMERO_MAXIMO) 
) {
  process.exit(9);
}

function isInFibonnaciSequence(testNumber: number, iterations = NUMERO_MAXIMO): boolean {
  let fibonacci = 0, next = 1, aux = 0;
  
  for (let index = 0; index < iterations; index++) {
    if ( testNumber == fibonacci ) {
      return true;
    }
    aux = fibonacci + next;
    fibonacci = next;
    next = aux;
  }
  return false;
}

let message = `O número (${NUMERO_TESTE}) `;
if ( isInFibonnaciSequence(NUMERO_TESTE) ) {
  message += 'está na sequência de Fibonacci!';
} else {
  message += 'NÃO está na sequência de Fibonacci :('
}
console.log(message);
