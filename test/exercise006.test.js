const {
    sumMultiples,
    isValidDNA,
    getComplementaryDNA,
    isItPrime,
    createMatrix,
    areWeCovered
} = require("../challenges/exercise006");

describe("sumMultiples", () => {
    test("it throws an error if not passed an array", () => {
        expect(() => {
            sumMultiples();
        }).toThrow("arr is required");

        expect(() => {
            sumMultiples("foo");
        }).toThrow("an Array is required");

        expect(() => {
            sumMultiples(4);
        }).toThrow("an Array is required");
    });

    test("it returns sum of any numbers that are a multiple of 3 or 5", () =>{
        const result = sumMultiples([1, 3, 5]);
        const expected = 8;
        expect(result).toBe(expected);
    });

    test("it works okay with decimal numbers", () => {
        const result = sumMultiples([1, 3, 5.0, 2, 12 ,10]);
        const expected = 30;
        expect(result).toBe(expected);
    });

    test("return 0 if there are no multiples of 3 or 5", () => {
        expect(sumMultiples([1, 2, 8, 13, 7])).toBe(0);
    });
});

describe("areWeCovered", () => {
    test("it returns false if there are no staff at all", () => {
        expect(areWeCovered([], "Monday")).toBe(false);
        expect(areWeCovered([], "Tuesday")).toBe(false);
        expect(areWeCovered([], "Wednesday")).toBe(false);
        expect(areWeCovered([], "Thursday")).toBe(false);
        expect(areWeCovered([], "Friday")).toBe(false);
        expect(areWeCovered([], "Saturday")).toBe(false);
        expect(areWeCovered([], "Sunday")).toBe(false);
        
    });
})