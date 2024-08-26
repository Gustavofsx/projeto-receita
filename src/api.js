// src/api.js
import recipesData from './data.json';

export const getRecipes = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(recipesData), 1000);
  });
};

export const getRecipeById = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(recipesData.find(recipe => recipe.id === id)), 1000);
  });
};

export const addRecipe = (newRecipe) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      recipesData.push({ ...newRecipe, id: recipesData.length + 1 });
      resolve(newRecipe);
    }, 1000);
  });
};
