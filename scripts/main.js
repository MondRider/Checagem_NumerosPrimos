function calculate() {
  const numeroInserido = parseInt(document.querySelector(".numberone").value);

  // Verifica se realmente é um numero que o magrão inseriu e se é maior do que 1
  if (isNaN(numeroInserido) || numeroInserido < 2) {
      document.querySelector(".message").innerHTML = "Por favor, insira um número válido maior ou igual a 2.";
      return;
  }

  // Array vazia para colocar os primos
  const primosEncontrados = [];

  // Laço de repetição para verificar cada número
  for (let i = 2; i <= numeroInserido; i++) {
      // começa como primo (2 é primo)
      let isPrime = true;

      // a partir daqui ele verifica mesmo
      for (let j = 2; j < i; j++) {
          // se o resto da divisão for exato ele não é primo
          if (i % j === 0) {
              isPrime = false;
              break;
          }
      }
      // se isPrime for true ele coloca na array
      if (isPrime) {
          primosEncontrados.push(i);
      }
  }

  // Aqui só imprime os resultados no html
  const resultadosDiv = document.querySelector(".message");
  resultadosDiv.innerHTML = primosEncontrados.length > 0 
      ? `Números primos até ${numeroInserido}:<br> ${primosEncontrados.join(", ")}` 
      : `Não há números primos até ${numeroInserido}.`;
}