function replaceBananaWithMango(fruits) {
    var index = fruits.indexOf("apple");
    if (index !== -1)
        fruits[index] = "Mango";
}
var fruits = ["blueberry", "apple", "Cherry"];
replaceBananaWithMango(fruits);
console.log(fruits);
