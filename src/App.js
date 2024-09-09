// /src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RegisterForm from "./components/RegisterForm";
import ConfirmationRegisterForm from "./components/ConfirmationRegisterForm";

function App() {
  return (
    <Router>
      <div className="App">
        <h1>User Authentication</h1>
        <Routes>
          {/* Маршрут для страницы регистрации */}
          <Route path="/register" element={<RegisterForm />} />

          {/* Маршрут для подтверждения регистрации */}
          <Route path="/confirm-register" element={<ConfirmationRegisterForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
