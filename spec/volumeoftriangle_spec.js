import { calculateEquilateralTrianglePrismVolume } from '../volumeoftriangle.js'

describe("Equilateral Triangle Prism Volume Calculator", function() {
  it("calculates volume for side = 5, height = 10", function() {
      expect(calculateEquilateralTrianglePrismVolume(5, 10)).toBeCloseTo(108.25, 2);
  });

  it("calculates volume for side = 1, height = 1", function() {
      expect(calculateEquilateralTrianglePrismVolume(1, 1)).toBeCloseTo(0.43, 2);
  });

  it("throws an error when side length is negative", function() {
      expect(() => calculateEquilateralTrianglePrismVolume(-3, 5)).toThrowError("Side length and height must be positive numbers.");
  });

  it("throws an error when height is zero", function() {
      expect(() => calculateEquilateralTrianglePrismVolume(4, 0)).toThrowError("Side length and height must be positive numbers.");
  });
});