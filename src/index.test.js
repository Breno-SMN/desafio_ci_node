const helloWorld = require('./index')

test("Print hello + selected word", () => {
  expect(helloWorld('FullCycle')).toBe('Hello FullCycle');
});