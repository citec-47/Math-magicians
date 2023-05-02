import operate from './calculateperate';

function initNumber(item) {
  return !!item.match(/[0-9]+/);
}

/**
 * Given  buttons name and a calculator data object, return an updated
 * calculator data object.
 *
 * Calculator data object contains:
 *   total:s      the running total
 *   next:String     number to be operated on with the total
 *   operation:String  +, -, etc.
 */
export default function calculate(Objec, buttonAndNames) {
  if (buttonAndNames === 'AC') {
    return {
      total: null,
      next: null,
      operation: null,
    };
  }

  if (initNumber(buttonAndNames)) {
    if (buttonAndNames === '0' && Objec.next === '0') {
      return {};
    }
    // If there is an operation, update next
    if (Objec.operation) {
      if (Objec.next && Objec.next !== '0') {
        return { ...Objec, next: Objec.next + buttonAndNames };
      }
      return { ...Objec, next: buttonAndNames };
    }
    // , update next and clear If there is no operation the value
    if (Objec.next && Objec.next !== '0') {
      return {
        next: Objec.next + buttonAndNames,
        total: null,
      };
    }
    return {
      next: buttonAndNames,
      total: null,
    };
  }

  if (buttonAndNames === '.') {
    if (Objec.next) {
      if (Objec.next.includes('.')) {
        return { ...Objec };
      }
      return { ...Objec, next: `${Objec.next}.` };
    }
    if (Objec.operation) {
      return { ...Objec, next: '0.' };
    }
    if (Objec.total) {
      if (Objec.total.includes('.')) {
        return {};
      }
      return { ...Objec, next: `${Objec.total}.` };
    }
    return { ...Objec, next: '0.' };
  }

  if (buttonAndNames === '=') {
    if (Objec.next && Objec.operation) {
      return {
        total: operate(Objec.total, Objec.next, Objec.operation),
        next: null,
        operation: null,
      };
    }
    // '='  no operation, nothing to do at the moment
    return {};
  }

  if (buttonAndNames === '+/-') {
    if (Objec.next) {
      return { ...Objec, next: (-1 * parseFloat(Objec.next)).toString() };
    }
    if (Objec.total) {
      return { ...Objec, total: (-1 * parseFloat(Objec.total)).toString() };
    }
    return {};
  }

  // Button must be an operation

  // User manupulating an operation after pressing '='
  if (!Objec.next && Objec.total && !Objec.operation) {
    return { ...Objec, operation: buttonAndNames };
  }

  // User manupulating button and there is an existing operation
  if (Objec.operation) {
    if (Objec.total && !Objec.next) {
      return { ...Objec, operation: buttonAndNames };
    }

    if (!Objec.total) {
      return { total: 0, operation: buttonAndNames };
    }

    return {
      total: operate(Objec.total, Objec.next, Objec.operation),
      next: null,
      operation: buttonAndNames,
    };
  }

  // no functionality yet(operation yet), but the user typed one

  // The user still to type yet, just save the operation
  if (!Objec.next) {
    return { operation: buttonAndNames };
  }

  // saving operation ,shift 'next' into 'total'
  return {
    total: Objec.next,
    next: null,
    operation: buttonAndNames,
  };
}
