const SP = 67836.43;
const RJ = 36678.66;
const MG = 29229.88;
const ES = 27165.48;
const Outros = 19849.53;
const TOTAL = SP + RJ + MG + ES + Outros;

function calculatePercentage(value: number, total = TOTAL) {
  return ((value / total) * 100).toFixed(2);
}

console.log(`
Porcentual do estado de SP: ${calculatePercentage(SP)}%
Porcentual do estado de RJ: ${calculatePercentage(RJ)}%
Porcentual do estado de MG: ${calculatePercentage(MG)}%
Porcentual do estado de ES: ${calculatePercentage(ES)}%
Porcentagem dos outros estados: ${calculatePercentage(Outros)}%
`);
