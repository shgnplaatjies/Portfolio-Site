import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Journeys from './services/routers/Journeys';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={'*'}
          element={<Journeys />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
