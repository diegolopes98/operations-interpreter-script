import {
  Operation,
  parse,
  isArithmeticalOperation,
  isComparisonOperation,
  isNumber,
} from '../operation';

export const interpreter = (input: string): boolean => {
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
