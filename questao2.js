//Questão 2:

function verificaFibonacci(numeroDigitado) {
  let inicialZero = 0;
  let inicialUm = 1;
  let result;

  if (numeroDigitado === 0 || numeroDigitado === 1) {
      console.log(`O número ${numeroDigitado} pertence a sequencia de fibonacci`);
      return;
  }

  while (inicialZero + inicialUm <= numeroDigitado) {
      result = inicialZero + inicialUm;
      if (result === numeroDigitado) {
          console.log(`O número ${numeroDigitado} pertence a sequencia de fibonacci`);
          return;
      }
      inicialZero = inicialUm;
      inicialUm = result;
  }

  console.log(`O número ${numeroDigitado} não pertence a sequencia de fibonacci`);
}

verificaFibonacci(7);

verificaFibonacci(5);

