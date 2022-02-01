var currentNumberWrapper = document.getElementById('currentNumber')

var currentNumber = 0

/* Quando o botão de '-' for clicado o número sera decrementado */
function decrement() {
  currentNumber = currentNumber - 1
  // chamando a função para mudar a cor antes de mudar o HTML, pois o contrário deu erro
  changeColor()
  currentNumberWrapper.innerHTML = currentNumber
}

/* Quando o botão de '+' for clicado o número sera incrementado */
function increment() {
  currentNumber = currentNumber + 1
  changeColor()
  currentNumberWrapper.innerHTML = currentNumber
}

/* Função para mudar a cor do número para vermelho se for negativo e para azul se for positivo.
Tentei fazer um if/else, mas quando coloquei else deu erro (verificar o motivo depois e modificar) */

function changeColor() {
  if (currentNumber < 0) {
    document.getElementById('currentNumber').style.color = 'red'
  }
  if (currentNumber > 0) {
    document.getElementById('currentNumber').style.color = 'blue'
  }

  if (currentNumber == 0) {
    document.getElementById('currentNumber').style.color = 'black'
  }
}
