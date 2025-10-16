// Arrays for each category
const diningOption = ['eating out', 'ordering in', 'cooking at home'];
const cuisines = ['Italian', 'Thai', 'Japanese', 'Western', 'Chinese', 'Mexican', 'Indian', 'Korean'];
const dishTypes = ['pasta', 'stir-fry', 'tacos', 'soup', 'pizza', 'salad', 'curry', 'sandwich', 'wrap', 'rice', 'noodle'];
const proteins = ['chicken', 'beef', 'pork', 'tofu', 'shrimp', 'salmon', 'eggs'];
const cookingMethods = ['grilled', 'baked', 'fried', 'steamed', 'roasted', 'pan-seared'];
const restaurantTypes = ['casual dining', 'fast casual', 'fine dining', 'food truck', 'cafe', 'buffet'];

// Function to get random element from array
const getRandomElement = (arr) => {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}

// Main function to generate meal suggestion
const generateMeal = () => {
    const option = getRandomElement(diningOption);

    if (option === 'cooking at home') {
        return generateCookingIdea();
    } else if (option === 'eating out') {
        return generateRestaurantIdea(); 
    } else {
        return generateOrderingIdea();
    }
}

// Random choices logged into variables
let cuisineChoice = getRandomElement(cuisines);
let dishTypesChoice = getRandomElement(dishTypes);
let proteinsChoice = getRandomElement(proteins);
let cookingMethodsChoice = getRandomElement(cookingMethods);
let restaurantTypesChoice = getRandomElement(restaurantTypes);

// Generate cooking at home idea
const generateCookingIdea = () => {
    return `Cook at home tonight! Try making ${cookingMethodsChoice} ${proteinsChoice} in a ${cuisineChoice} ${dishTypesChoice}.`
}

// Generate restaurant idea
const generateRestaurantIdea = () => {
    return `Go out to eat! Check out a ${restaurantTypesChoice} for some ${cuisineChoice} food.`
}

// Generate ordering in idea
const generateOrderingIdea = () => {
    return `Order in! Get some ${cuisineChoice} food delivered.`
}



console.log(generateMeal());