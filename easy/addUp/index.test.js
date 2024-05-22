const addUp = require('./index');

describe('addUp', () => {
    test('addUp function is defined', () => {
        expect(typeof addUp).toEqual('function');
    });

    test('addUp(4) returns 10', () => {
        expect(addUp(4)).toBe(10);
    });

    test('addUp(13) returns 91', () => {
        expect(addUp(13)).toBe(91);
    });

    test('addUp(600) returns 180300', () => {
        expect(addUp(600)).toBe(180300);
    });

    test('addUp(392) returns 77028', () => {
        expect(addUp(392)).toBe(77028);
    });

    test('addUp(53) returns 1431', () => {
        expect(addUp(53)).toBe(1431);
    });

    test('addUp(897) returns 402753', () => {
        expect(addUp(897)).toBe(402753);
    });

    test('addUp(23) returns 276', () => {
        expect(addUp(23)).toBe(276);
    });

    test('addUp(1000) returns 500500', () => {
        expect(addUp(1000)).toBe(500500);
    });

    test('addUp(738) returns 272691', () => {
        expect(addUp(738)).toBe(272691);
    });

    test('addUp(100) returns 5050', () => {
        expect(addUp(100)).toBe(5050);
    });
});
  