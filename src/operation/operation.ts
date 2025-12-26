export type ArithmeticalOperation = (el1: number, el2: number) => number;

export const add = (el1: number, el2: number): number => el1 + el2;

export const sub = (el1: number, el2: number): number => el1 - el2;

export type ComparisonOperation = (el1: number, el2: number) => boolean;

export const equal = (el1: number, el2: number): boolean => el1 === el2;

export type Operation = number | ArithmeticalOperation | ComparisonOperation;

export const isArithmeticalOperation = (
  op: Operation
): op is ArithmeticalOperation =>
  typeof op === 'function' && typeof op(0, 0) === 'number';

export const isComparisonOperation = (
  op: Operation
): op is ComparisonOperation =>
  typeof op === 'function' && typeof op(0, 0) === 'boolean';

export const isNumber = (op: Operation): op is number => typeof op === 'number';

export const parse = (input: string): Operation[] =>
  input.split(' ').map(op => {
    switch (op) {
      case 'OP_ADD':
        return add;
      case 'OP_SUB':
        return sub;
      case 'OP_EQUAL':
        return equal;
      default:
        return Number(op.substring(3));
    }
  });
