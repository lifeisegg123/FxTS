import { filter, lt, pipe, toArray } from "../src/index";

describe("lt(little)", function () {
  describe("lt given curry", function () {
    it("given array then should return little values", function () {
      const result = pipe([4, 5, 6], filter(lt(5)), toArray);
      expect(result).toEqual([4]);
    });
    it("given array then should return empty array", function () {
      const result = pipe([5, 6, 7], filter(lt(5)), toArray);
      expect(result).toEqual([]);
    });

    it("given string array then should return [a, b, c]", function () {
      const result = pipe(["a", "b", "c", "d", "e"], filter(lt("d")), toArray);
      expect(result).toEqual(["a", "b", "c"]);
    });
    it("given string array then should return empty array", function () {
      const result = pipe(["a", "b", "c", "d"], filter(lt("a")), toArray);
      expect(result).toEqual([]);
    });
  });
  describe("lt given boolean", function () {
    it("should return true that the first number is less than second", function () {
      expect(lt(1, 5)).toEqual(true);
    });
    it("should return false that the first number is not less than second", function () {
      expect(lt(5, 1)).toEqual(false);
    });

    it("should return true that the first char is less than second", function () {
      expect(lt("a", "b")).toEqual(true);
    });
    it("should return false that the first char is not less than second", function () {
      expect(lt("c", "b")).toEqual(false);
    });
  });
});
