const sum  = require('./index.js');

test('add 1 + 2 to equal 3', () => {
    expect(sum(1,2)).toBe(3);
})