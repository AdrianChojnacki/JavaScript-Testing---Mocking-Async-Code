const { loadTitle } = require('./util');

test('should print and uppercase text', () => {
  loadTitle().then(title => {
    expect(title).toBe('DELECTUS AUT AUTEM');
  });
});