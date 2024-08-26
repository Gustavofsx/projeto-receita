import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import RecipeDetails from './pages/RecipeDetails';
import AddRecipe from './pages/AddRecipe';
import './App.css'; // Importa o arquivo CSS

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <nav>
          <a href="/">Home</a>
          <a href="/add">Adicionar Receita</a>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipe/:id" element={<RecipeDetails />} />
          <Route path="/add" element={<AddRecipe />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
