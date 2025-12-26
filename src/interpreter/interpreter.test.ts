import { interpreterRec, interpreterIterative } from './interpreter';

describe('Interpreter', () => {
  it.each([
    { input: `OP_1 OP_1 OP_ADD OP_3 OP_EQUAL`, expected: false },
    { input: `OP_3 OP_2 OP_SUB OP_5 OP_ADD OP_5 OP_EQUAL`, expected: false },
    { input: `OP_ADD`, expected: false },
    { input: `OP_1 OP_ADD`, expected: false },
    { input: `OP_1 OP_0`, expected: false },
    { input: `OP_1 OP_2 OP_ADD`, expected: true },
    { input: `OP_3 OP_2 OP_SUB OP_1 OP_EQUAL`, expected: true },
    { input: `OP_1 OP_2`, expected: true },
  ])("Should return $expected for input '$input'", ({ input, expected }) => {
    expect(interpreterRec(input)).toBe(expected);
    expect(interpreterIterative(input)).toBe(expected);
  });
});
