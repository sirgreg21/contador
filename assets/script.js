var currentNumberWrapper = document.getElementById('currentNumber')

var currentNumber = 0

/* Quando o botão de '-' for clicado o número sera decrementado */
function decrement() {
  currentNumber = currentNumber - 1
  currentNumberWrapper.innerHTML = currentNumber
}

/* Quando o botão de '+' for clicado o número sera incrementado */
function increment() {
  currentNumber = currentNumber + 1
  currentNumberWrapper.innerHTML = currentNumber
}

/* Função para mudar a cor do número para vermelho se for negativo e para azul se for positivo */
