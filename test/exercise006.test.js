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

    it("passes CT GA, correct characters but with a space", () => {
        expect(isValidDNA("CT GA")).toBe(false);
    });

    it("passes GCAT, correct characters", () => {
        expect(isValidDNA("GCAT")).toBe(true);
    });

});


describe("getComplementaryDNA", () => {
    it("swaps the last two characters woth the fisrt two in a four character string", () => {
        expect(() => {
            getComplementaryDNA()
        }).toThrow("str is required");
    });

    it("returns string < four", () => {
        expect(() => {
            getComplementaryDNA("CTG")
        }).toThrow("String is less than four characters");
    });

    it("returns string > four", () => {
        expect(() => {
            getComplementaryDNA("CTGAA")
        }).toThrow("String is more than four characters");
    });

    it("validates string is four letters, containing CGTA only", () => {
        expect(() => {
            getComplementaryDNA("CTxx")
        }).toThrow("String needs to contain characters CTGA only");
    });

    it("swaps first two characters with last two", () => {
        expect(getComplementaryDNA("CTGA")).toBe("GACT");
    });

    it("swaps first two characters with last two", () => {
        expect(getComplementaryDNA("TGCA")).toBe("CATG");
    });

    it("swaps lowercase first two characters with last two", () => {
        expect(getComplementaryDNA("gcat")).toBe("ATGC");
    });

});


describe("isItPrime", () => {
    it("throws error n is required when no number is given", () => {
        expect(() => {
            isItPrime()
        }).toThrow("n is required");
    });

    it("gives non-prime number", () => {
        expect(isItPrime(4)).toBe(false);
    });

    it("gives prime number", () => {
        expect(isItPrime(7)).toBe(true);
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