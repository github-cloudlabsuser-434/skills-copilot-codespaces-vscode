const { add } = require('./test.js');
// BEGIN: Test add function
describe('add', () => {
    it('adds two positive numbers', () => {
        expect(add(2, 3)).toBe(5);
    });

    it('adds a negative number and a positive number', () => {
        expect(add(-1, 5)).toBe(4);
    });

    it('adds two zeros', () => {
        expect(add(0, 0)).toBe(0);
    });
});
// END: Test add function


// FILEPATH: /workspaces/skills-copilot-codespaces-vscode/test.test.js

const { subtract } = require('./test.js'); // assuming the subtract function is exported from test.js

describe('subtract', () => {
    it('subtracts two positive numbers', () => {
        expect(subtract(5, 3)).toBe(2);
    });

    it('subtracts a positive number and a negative number', () => {
        expect(subtract(-1, 5)).toBe(-6);
    });

    it('subtracts two zeros', () => {
        expect(subtract(0, 0)).toBe(0);
    });
});