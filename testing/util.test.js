const { generateText } = require('./util');

test('should output name and age', () => {
  const text = generateText('Pissuti', 24);
  expect(text).toBe('Pissuti (24 years old)');
});
