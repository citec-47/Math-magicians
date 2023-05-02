/* eslint-disable linebreak-style */
import Big from 'big.js';

export default function operate(numBer1, numBer2, operaTions) {
  const one1 = Big(numBer1);
  const two2 = Big(numBer2);
  if (operaTions === '+') {
    return one1.plus(two2).toString();
  }
  if (operaTions === '-') {
    return one1.minus(two2).toString();
  }
  if (operaTions === 'x') {
    return one1.times(two2).toString();
  }
  if (operaTions === '÷') {
    try {
      return one1.div(two2).toString();
    } catch (err) {
      return "Can't divide by 0.";
    }
  }
  if (operaTions === '%') {
    try {
      return one1.mod(two2).toString();
    } catch (err) {
      return "Can not find modulo because can't divide by 0.";
    }
  }
  throw Error(`Unknown operation '${operaTions}'`);
}
