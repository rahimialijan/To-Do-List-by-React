import operate from './operate';

function isNumber(item) {
  return !!item.match(/[0-9]+/);
}

export default function calculate(obj, buttonName) {
  if (buttonName === 'AC') {
    return {
      total: null,
      text: null,
      operation: null,
    };
  }

  if (isNumber(buttonName)) {
    if (obj.text === null || obj.text === '0') {
      return {
        ...obj,
        text: buttonName,
      };
    }

    return {
      ...obj,
      text: obj.text + buttonName,
    };
  }

  if (buttonName === '.') {
    if (!obj.text.includes('.')) {
      return {
        ...obj,
        text: `${obj.text}.`,
      };
    }

    return obj;
  }

  if (buttonName === '=') {
    if (obj.text && obj.operation) {
      const { text } = obj;
      if (obj.operation === '%') {
        const total = operate(obj.total, text, obj.operation);
        return {
          total,
          text: total.toString(),
          operation: null,
        };
      }
      const total = operate(obj.total, text, obj.operation);
      return {
        total,
        text: total.toString(),
        operation: null,
      };
    }

    return obj;
  }

  if (buttonName === '+/-') {
    if (obj.text) {
      return {
        ...obj,
        text: (-1 * parseFloat(obj.text)).toString(),
      };
    }

    if (obj.total) {
      return {
        ...obj,
        total: (-1 * parseFloat(obj.total)).toString(),
      };
    }

    return obj;
  }

  if (obj.operation) {
    const total = operate(obj.total, obj.text, obj.operation);
    return {
      total,
      text: null,
      operation: buttonName,
    };
  }

  return {
    ...obj,
    total: obj.text,
    text: null,
    operation: buttonName,
  };
}
