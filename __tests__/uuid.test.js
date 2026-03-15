const uuidv4 = require('uuid/v4');

test('generiert eine gültige UUID v4', () => {
  const id = uuidv4();
  expect(typeof id).toBe('string');
  expect(id).toHaveLength(36);
  expect(id).toMatch(
    /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/
  );
});