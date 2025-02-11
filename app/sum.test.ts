import { sum } from "./sum";

describe('sum function',() => {
    test('sum two number',() => {
        expect(sum(1,2)).toBe(3);
    })

    test('total 0', () => {
        expect(sum(0,0)).toBe(0);
    })

    test('negative result', () => {
        expect(sum(-2,-3)).toBe(-5);
    })
})