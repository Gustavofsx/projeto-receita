// src/pages/AddRecipe.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addRecipe } from '../api';

const AddRecipe = () => {
  const [titulo, setTitulo] = useState('');
  const [ingredientes, setIngredientes] = useState('');
  const [modoPreparo, setModoPreparo] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRecipe = {
      titulo,
      ingredientes: ingredientes.split(',').map(ing => ing.trim()),
      modoPreparo
    };
    addRecipe(newRecipe).then(() => {
      navigate('/');
    });
  };

  return (
    <div>
      <h1>Adicionar Receita</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Título:
          <input type="text" value={titulo} onChange={(e) => setTitulo(e.target.value)} />
        </label>
        <br />
        <label>
          Ingredientes (separados por vírgula):
          <input type="text" value={ingredientes} onChange={(e) => setIngredientes(e.target.value)} />
        </label>
        <br />
        <label>
          Modo de Preparo:
          <textarea value={modoPreparo} onChange={(e) => setModoPreparo(e.target.value)} />
        </label>
        <br />
        <button type="submit">Adicionar Receita</button>
      </form>
    </div>
  );
};

export default AddRecipe;
