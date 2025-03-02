// 1) Given a **temperature** in **kelvin** *convert* to **fahrenheit**.

function convertKelvinToFahrenheit(kelvin) {
    if (kelvin < 0) {
        throw new Error("Kelvin cannot be negative");
    }
    return (kelvin - 273.15) * 9/5 + 32;
}


export { convertKelvinToFahrenheit }
