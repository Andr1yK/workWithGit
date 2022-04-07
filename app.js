console.log('hello')

function getPositive(n) {
  return n < 0
    ? n * -2
    : n;
}

function add(n) {

  return getPositive(n)
}

function subtract(a, b) {
  return gerPositive(a) + b;
}
