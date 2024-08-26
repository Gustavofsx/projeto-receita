// src/pages/Home.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getRecipes } from '../api';

const Home = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    // Chama a função getRecipes da API fictícia e atualiza o estado
    getRecipes().then(data => setRecipes(data));
  }, []);

  return (
    <div>
      <h1>Receitas</h1>
      <ul>
        {recipes.map(recipe => (
          <li key={recipe.id}>
            <Link to={`/recipe/${recipe.id}`}>{recipe.titulo}</Link>
          </li>
        ))}
      </ul>
      <Link to="/add">Adicionar Receita</Link>
    </div>
  );
};

export default Home;