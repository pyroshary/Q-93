function replaceAppleWithMango(fruits: string[]): void {
    const index = fruits.indexOf("apple");
    if (index !== -1) fruits[index] = "Mango";
}


const fruits: string[] = ["blueberry", "apple", "Cherry"];
replaceAppleWithMango(fruits);
console.log(fruits);