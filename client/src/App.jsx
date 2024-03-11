import React from 'react';
import Navigation from './features/navigation/Navigation.jsx';
import DrugStorePage from './features/drug-store-page/DrugStorePage.jsx';
import ShoppingCartPage from './features/shopping-cart-page/ShoppingCartPage.jsx';
import { Route, Routes } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div className="page">
        <Navigation />
        <Routes>
          <Route path="/" element={<DrugStorePage />} />
          <Route path="/shopping-cart" element={<ShoppingCartPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
