import { convertWindSpeedToDescription } from '../windspeedtodescription.js'

describe("Wind Speed to Description Converter", function() {
  it("should return 'Calm' for wind speed 0", function() {
      expect(convertWindSpeedToDescription(0)).toBe("Calm");
  });

  it("should return 'Light Air' for wind speed 3", function() {
      expect(convertWindSpeedToDescription(3)).toBe("Light Air");
  });

  it("should return 'Light Breeze' for wind speed 10", function() {
      expect(convertWindSpeedToDescription(10)).toBe("Light Breeze");
  });

  it("should return 'Gentle Breeze' for wind speed 15", function() {
      expect(convertWindSpeedToDescription(15)).toBe("Gentle Breeze");
  });

  it("should return 'Moderate Breeze' for wind speed 25", function() {
      expect(convertWindSpeedToDescription(25)).toBe("Moderate Breeze");
  });

  it("should return 'Hurricane' for wind speed 120", function() {
      expect(convertWindSpeedToDescription(120)).toBe("Hurricane");
  });
});