// 3) *Calculate* the **volume** of an **equilateral triangle prism** from the **length** of one **side** of the triangle and the **length** of the flat **edge**.

function calculateEquilateralTrianglePrismVolume(side, height) {
    if (side <= 0 || height <= 0) {
        throw new Error("Side length and height must be positive numbers.");
    }
    return (Math.sqrt(3) / 4) * Math.pow(side, 2) * height;
}

export { calculateEquilateralTrianglePrismVolume }