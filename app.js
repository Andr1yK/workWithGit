console.log('hello')

function gerPositive(n) {
  return n < 0 ? n * -1 : n;
}

function subtract(a, b) {
  return gerPositive(a) + b;
}
