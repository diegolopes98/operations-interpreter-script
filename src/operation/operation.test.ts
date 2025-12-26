import { add, sub, equal, parse } from './operation';

describe('Operation', () => {
  describe('Add', () => {
    it.each([
      { el1: 1, el2: 1, expected: 2 },
      { el1: -1, el2: -1, expected: -2 },
      { el1: -1, el2: 1, expected: 0 },
    ])(
      'should return $expected when adding $el1 + $el2',
      ({ el1, el2, expected }) => {
        expect(add(el1, el2)).toBe(expected);
      }
    );
  });

  describe('Sub', () => {
    it.each([
      { el1: 1, el2: 1, expected: 0 },
      { el1: -1, el2: -1, expected: 0 },
      { el1: -1, el2: 1, expected: -2 },
    ])(
      'should return $expected when subtracting $el1 - $el2',
      ({ el1, el2, expected }) => {
        expect(sub(el1, el2)).toBe(expected);
      }
    );
  });

  describe('Equal', () => {
    it.each([
      { el1: 1, el2: 1, expected: true },
      { el1: -1, el2: -1, expected: true },
      { el1: -1, el2: 1, expected: false },
    ])(
      'should return $expected when comparing $el1 === $el2',
      ({ el1, el2, expected }) => {
        expect(equal(el1, el2)).toBe(expected);
      }
    );
  });

  describe('Equal', () => {
    it.each([
      {
        input: `OP_1 OP_1 OP_ADD OP_3 OP_EQUAL`,
        expected: [1, 1, add, 3, equal],
      },
      {
        input: `OP_3 OP_2 OP_SUB OP_5 OP_ADD OP_5 OP_EQUAL`,
        expected: [3, 2, sub, 5, add, 5, equal],
      },
      { input: `OP_ADD`, expected: [add] },
      { input: `OP_1 OP_0`, expected: [1, 0] },
      { input: `OP_1 OP_2 OP_ADD`, expected: [1, 2, add] },
      {
        input: `OP_3 OP_2 OP_SUB OP_1 OP_EQUAL`,
        expected: [3, 2, sub, 1, equal],
      },
      { input: `OP_1 OP_2`, expected: [1, 2] },
      { input: `OP_-1`, expected: [-1] },
    ])('should return $expected when parsing $input', ({ input, expected }) => {
      expect(parse(input)).toStrictEqual(expected);
    });
  });
});
