import Big from 'big.js';

export default function operate(numberOne, numberTwo, operation) {
  const one = Big(numberOne || '0');
  const two = Big(numberTwo || '0');

  if (operation === '+') {
    return one.plus(two).toString();
  }

  if (operation === '-') {
    return one.minus(two).toString();
  }

  if (operation === 'x') {
    return one.times(two).toString();
  }

  if (operation === '÷') {
    if (two.eq(0)) {
      return "Can't divide by 0.";
    }
    return one.div(two).toString();
  }

  if (operation === '%') {
    return one.mod(two).toString();
  }

  throw new Error(`Unknown operation '${operation}'`);
}
