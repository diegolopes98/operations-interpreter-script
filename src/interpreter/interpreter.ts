import { Operation, parse } from '../operation';

export const interpreter = (input: string): boolean => {
  const operations = parse(input);

  if (operations.length < 1) return false;

  if (operations.length === 1) {
    const lastOp = operations.pop()!;
    return typeof lastOp === 'number' ? lastOp > 0 : false;
  }

  const interprete = (ops: Operation[]): number => {
    const op = ops.pop()!;
    switch (typeof op) {
      case 'function':
        const el2 = interprete(ops);
        const el1 = interprete(ops);
        const value = op(el1, el2);

        if (typeof value === 'boolean') {
          ops.push(value ? 1 : 0);
        } else {
          ops.push(value);
        }

        return interprete(ops);

      default:
        return Number(op);
    }
  };

  const result = interprete(operations);

  return result > 0;
};
