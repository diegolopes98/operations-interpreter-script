# Operations Interpreter Script

This program takes a string as input in the form of Bitcoin Script.
Evaluate the script supporting the following op codes:

- OP_0, OP_1, ..., OP_16
- OP_ADD
- OP_SUB
- OP_EQUAL

All elements placed on the stack during evaluation can be considered signed integers.

Output `true` if the top element of the stack after evaluation is non-zero, or returns `false` if no elements are on the stack or the top element is zero.

OP_EQUAL pops two elements from the stack. If the elements are equal, 1 is pushed to the stack, otherwise, 0 is pushed to the stack.

OP_ADD pops the top two stack elements, add them, and pushes the result to the stack.

OP_SUB pops the top two stack elements, subtracts the top stack element from the second from top element, and pushes the result to the stack.

**Example 1:**

Input: `OP_1 OP_2 OP_ADD`

Output: `true`

**Example 2:**

Input: `OP_1 OP_1 OP_ADD OP_3 OP_EQUAL`

Output: `false`

**Example 3:**

Input: `OP_3 OP_2 OP_SUB OP_1 OP_EQUAL`

Output: `true`

**Example 4:**

Input: `OP_3 OP_2 OP_SUB OP_5 OP_ADD OP_5 OP_EQUAL`

Output: `false`

**Example 5:**

Input: `OP_ADD`

Output: `false`

**Example 6:**

Input: `OP_1 OP_2`

Output: `true`

**Example 7:**

Input: `OP_1 OP_0`

Output: `false`
