# Requisitos
* Node
* Yarn

# Comece instalando as dependências:
```sh
yarn
```
ou
```sh
yarn install
```  
  
Eu criei alguns scripts com exemplo dos inputs nos exercícios.

# Exercício 2
Para executar o exercicio 2 você pode usar o script do yarn
ou o node diretamente, passando o número que deseja verificar se está na sequência de Fibonacci e o máximo de iterações/números da sequência para busca, default: 1597 10000
```sh
yarn run ex2
node .\dist\exercicio2.js 89 12
```
Exemplo:
* Número de busca: 89  
* Iterações:  12  

Resultado esperado:  
```
O número (89) está na sequência de Fibonacci
```  

# Exercício 3
```sh
yarn run ex3
node .\dist\exercicio3.js
```  
Resultado esperado:  
```
Menor valor de faturamento foi de R$0, no dia 4
Menor valor de faturamento(ignorando feriados) foi de R$373.7838 no dia 14
Maior valor de faturamento foi de R$48924.2448 no dia 16
O número de dias com o valor de faturamento superior a média foi de: 10 dias.
```

# Exercício 4
```sh
yarn run ex4
node .\dist\exercicio4.js
```
Resultado esperado:
```
Porcentual do estado de SP: 37.53%  
Porcentual do estado de RJ: 20.29%  
Porcentual do estado de MG: 16.17%  
Porcentual do estado de ES: 15.03%  
Porcentagem dos outros estados: 10.98%
```  

# Exercício 5
Neste exercício você deve passar uma string por parâmetro entre aspas se usar o comando do node, ou usar o script com uma string já definida.
```sh
yarn run ex5
node .\dist\exercicio5.js "Uma string para ser invertida"
```
Resultado esperado:  
```
O inverso da string "Uma string para ser invertida" é: "aditrevni res arap gnirts amU"
```