/**
 * @author Cristian Pappalardo
 * @file main.js
 * Recipe Exercise
 * 
 * This script defines an array of recipe objects, each containing a title, number of servings, and a list of ingredients.
 * It then iterates through the array and logs the details of each recipe to the console in a formatted manner, including the title, servings, and ingredients.
 */

recipes = [
    {
        title: "Pizza Margherita",
        servings: 2,
        ingredients: ["dough", "tomato sauce", "mozzarella cheese", "basil"]
    },
    {
        title: "Pasta Carbonara",
        servings: 4,
        ingredients: ["pasta", "eggs", "bacon", "parmesan cheese"]
    }
]

// Loop through the recipes array and print the details of each recipe
recipes.forEach(recipe => {
    console.log(recipe.title);
    console.log("Serves: " + recipe.servings);
    console.log("Ingredients:");
    recipe.ingredients.forEach(ingredient => {  // Loop through the ingredients array and print each ingredient
        console.log("- " + ingredient);
    });
});