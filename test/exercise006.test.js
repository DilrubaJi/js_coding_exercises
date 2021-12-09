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

    test("it returns sum of any numbers that are a multiple of 3 or 5", () => {
        const result = sumMultiples([1, 3, 5]);
        const expected = 8;
        expect(result).toBe(expected);
    });

    test("it works okay with decimal numbers", () => {
        const result = sumMultiples([1, 3, 5.0, 2, 12, 10]);
        const expected = 30;
        expect(result).toBe(expected);
    });

    test("return 0 if there are no multiples of 3 or 5", () => {
        expect(sumMultiples([1, 2, 8, 13, 7])).toBe(0);
    });
});


describe("isValidDNA", () => {
    it("throws an error if not a string is passed", () => {
        expect(() => {
            isValidDNA()
        }).toThrow("str is required");
    });

    it("returns true when the characters CGTA are passed", () => {
        expect(isValidDNA("CGTA")).toBe(true);
    });

    it("passes only CA correct characters", () => {
        expect(isValidDNA("CA")).toBe(true);
    });

    it("passes CGTANOPE correct characters and other false characters", () => {
        expect(isValidDNA("CGTNOPE")).toBe(false);
    });

    it("passes ctG lowercase correct characters", () => {
        expect(isValidDNA("ctG")).toBe(true);
    });

    it("passes ljicktKsAf, lowercase and uppercase with mixed characters", () => {
        expect(isValidDNA("ljicktKsAf")).toBe(false);
    });

});

// describe("createMatrix", () => {
//     it("returns a matrix of 1 * 1 when passed 1", () => {
//         const result = createMatrix(1, "foo");
//         const expected = [ ["foo"] ];
//         expect(result).toEqual(expected);
//     });
    
// });

// describe("areWeCovered", () => {
//     test("it returns false if there are no staff at all", () => {
//         expect(areWeCovered([], "Monday")).toBe(false);
//         expect(areWeCovered([], "Tuesday")).toBe(false);
//         expect(areWeCovered([], "Wednesday")).toBe(false);
//         expect(areWeCovered([], "Thursday")).toBe(false);
//         expect(areWeCovered([], "Friday")).toBe(false);
//         expect(areWeCovered([], "Saturday")).toBe(false);
//         expect(areWeCovered([], "Sunday")).toBe(false);

//     });

//     test("returns false if there are staff but < 3 not scheduled to work", () => {
//         const staff = [
//             {name: "gary", rota: ["Monday", "Tuesday"]},
//             {name: "paul", rota: ["Monday", "Tuesday"]},
//             {name: "sally", rota: ["Monday", "Tuesday"]},
//             {name: "jess", rota: ["Monday", "Tuesday"]},
//         ];
//         expect(areWeCovered(staff, "Wednesday")).toBe(false);
//     });
// });