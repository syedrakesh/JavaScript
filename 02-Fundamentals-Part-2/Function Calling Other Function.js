// Function 1
function cutFruitPieces(fruits) {
    return fruits * 4;
}

// Function 2
function fruitProccessor(apples, oranges){
    const applePieces = cutFruitPieces(apples); // Function 2 calling Function 1 Inside Function 2
    const orangePieces = cutFruitPieces(oranges); // Function 2 calling Function 1 Inside Function 2
    return `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`;
}

console.log(fruitProccessor(2, 3));