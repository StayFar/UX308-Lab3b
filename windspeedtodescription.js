// 2) *convert* a **windspeed** to a **description** *using* **The Beaufort Wind Scale**.
// 0 = Calm
// 1 = Light Air
// 2 = Light Breeze
// 3 = Gentle Breeze
// 4 = Moderate Breeze
// 5 = Fresh Breeze
// 6 = Strong Breeze
// 7 = Near Gale
// 8 = Gale
// 9 = Strong Gale
// 10 = Storm
// 11 = Violent Storm
// 12 = Hurricane

function convertWindSpeedToDescription(windSpeed) {
    const beaufortScale = [
        { max: 1, description: "Calm" },
        { max: 5, description: "Light Air" },
        { max: 11, description: "Light Breeze" },
        { max: 19, description: "Gentle Breeze" },
        { max: 28, description: "Moderate Breeze" },
        { max: 38, description: "Fresh Breeze" },
        { max: 49, description: "Strong Breeze" },
        { max: 61, description: "Near Gale" },
        { max: 74, description: "Gale" },
        { max: 88, description: "Strong Gale" },
        { max: 102, description: "Storm" },
        { max: 117, description: "Violent Storm" },
        { max: Infinity, description: "Hurricane" }
    ];

    for (let i = 0; i < beaufortScale.length; i++) {
        if (windSpeed <= beaufortScale[i].max) {
            return beaufortScale[i].description;
        }
    }
}

export { convertWindSpeedToDescription }
