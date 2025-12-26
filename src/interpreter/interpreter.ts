import {
  Operation,
  parse,
  isArithmeticalOperation,
  isComparisonOperation,
  isNumber,
} from '../operation';

export const interpreterRec = (input: string): boolean => {
  const operations = parse(input);

  if (operations.length < 1) return false;

  if (operations.length === 1) {
    const lastOp = operations.pop()!;
    return isNumber(lastOp) ? lastOp > 0 : false;
  }

  const interprete = (ops: Operation[]): number => {
    const op = ops.pop()!;

    if (isNumber(op)) {
      return op;
    }

    const el2 = interprete(ops);
    const el1 = interprete(ops);

    if (isComparisonOperation(op)) {
      ops.push(op(el1, el2) ? 1 : 0);
    }

    if (isArithmeticalOperation(op)) {
      ops.push(op(el1, el2));
    }

    return interprete(ops);
  };

  const result = interprete(operations);

  return result > 0;
};

export const interpreterIterative = (input: string): boolean => {
  const operations = parse(input);

  if (operations.length < 1) return false;

  if (operations.length === 1) {
    const lastOp = operations[0];
    return isNumber(lastOp) ? lastOp > 0 : false;
  }

  const stack: number[] = [];

  for (const op of operations) {
    if (isNumber(op)) {
      stack.push(op);
      continue;
    }

    if (stack.length < 2) {
      return false;
    }

    const el2 = stack.pop()!;
    const el1 = stack.pop()!;

    if (isComparisonOperation(op)) {
      stack.push(op(el1, el2) ? 1 : 0);
    } else if (isArithmeticalOperation(op)) {
      stack.push(op(el1, el2));
    }
  }

  return stack[stack.length - 1] > 0;
};
