// Store recipes in an array
const recipes = [];

// Get references to form and recipe container
const recipeForm = document.getElementById('recipeForm');
const recipesContainer = document.getElementById('recipes');
const searchInput = document.getElementById('search');

// Add a recipe
recipeForm.addEventListener('submit', (event) => {
  event.preventDefault();

  // Get form values
  const name = document.getElementById('name').value.trim();
  const ingredients = document.getElementById('ingredients').value.split(',').map(item => item.trim());
  const instructions = document.getElementById('instructions').value.trim();

  // Create recipe object and add to the list
  const recipe = { name, ingredients, instructions };
  recipes.push(recipe);

  // Clear form and update UI
  recipeForm.reset();
  displayRecipes();
});

// Display recipes
function displayRecipes(filteredRecipes = recipes) {
  recipesContainer.innerHTML = '';

  if (filteredRecipes.length === 0) {
    recipesContainer.innerHTML = '<p>No recipes found!</p>';
    return;
  }

  filteredRecipes.forEach((recipe) => {
    const recipeDiv = document.createElement('div');
    recipeDiv.classList.add('recipe');
    recipeDiv.innerHTML = `
      <h3>${recipe.name}</h3>
      <p><strong>Ingredients:</strong> ${recipe.ingredients.join(', ')}</p>
      <p><strong>Instructions:</strong> ${recipe.instructions}</p>
    `;
    recipesContainer.appendChild(recipeDiv);
  });
}

// Search recipes
function searchRecipes() {
  const keyword = searchInput.value.toLowerCase();
  const filteredRecipes = recipes.filter(recipe => recipe.name.toLowerCase().includes(keyword));
  displayRecipes(filteredRecipes);
}