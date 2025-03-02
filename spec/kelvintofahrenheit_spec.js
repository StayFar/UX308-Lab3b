import { convertKelvinToFahrenheit } from '../kelvintofahrenheit.js'

describe("Kelvin to Fahrenheit Conversion", function() {
    it("should convert 0K to -459.67°F", function() {
        expect(convertKelvinToFahrenheit(0)).toBeCloseTo(-459.67, 2);
    });

    it("should convert 273.15K to 32°F", function() {
        expect(convertKelvinToFahrenheit(273.15)).toBeCloseTo(32, 2);
    });

    it("should convert 300K to 80.33°F", function() {
        expect(convertKelvinToFahrenheit(300)).toBeCloseTo(80.33, 2);
    });

    it("should throw an error for negative Kelvin values", function() {
        expect(() => convertKelvinToFahrenheit(-5)).toThrowError("Kelvin cannot be negative");
    });
});