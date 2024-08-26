// src/pages/RecipeDetails.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getRecipeById } from '../api';

const RecipeDetails = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    getRecipeById(parseInt(id)).then(data => setRecipe(data));
  }, [id]);

  if (!recipe) return <div>Carregando...</div>;

  return (
    <div>
      <h1>{recipe.titulo}</h1>
      <h2>Ingredientes</h2>
      <ul>
        {recipe.ingredientes.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <h2>Modo de Preparo</h2>
      <p>{recipe.modoPreparo}</p>
    </div>
  );
};

export default RecipeDetails;