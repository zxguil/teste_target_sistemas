const STRING_PARA_INVERTER: string = process.argv[2] || "TARGET";
if (!STRING_PARA_INVERTER) {
  process.exit(9);
}

function reverseString(value: string) {
  let newString = '';
  for (let index = value.length - 1; index >= 0; index--) {
    newString += value[index];
  }
  return newString;
}

console.log(`O inverso da string "${STRING_PARA_INVERTER}" é: "${reverseString(STRING_PARA_INVERTER)}"`);