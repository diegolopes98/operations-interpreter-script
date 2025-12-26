export type ArithmeticalOperation = (el1: number, el2: number) => number;

export const add = (el1: number, el2: number): number => el1 + el2;

export const sub = (el1: number, el2: number): number => el1 - el2;

export type ComparisonOperation = (el1: number, el2: number) => boolean;

export const equal = (el1: number, el2: number): boolean => el1 === el2;

export type Operation = number | ArithmeticalOperation | ComparisonOperation;

const parseSingle = (op: string): Operation => {
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
};

export const parse = (input: string): Operation[] =>
  input.split(' ').map(parseSingle);
