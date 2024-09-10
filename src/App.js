import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RegisterForm from "./components/Register/RegisterForm";
import ConfirmationRegisterForm from "./components/ConfirmationRegister/ConfirmationRegisterForm";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <div className="App">
        <Header isLoggedIn={isLoggedIn} /> {}

        <main>
          <div className="form-container">
            <Routes>
              {}
              <Route path="/register" element={<RegisterForm />} />

              {}
              <Route path="/confirm-register" element={<ConfirmationRegisterForm />} />

              {}
              <Route path="/login" element={</>}>
            </Routes>
          </div>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
