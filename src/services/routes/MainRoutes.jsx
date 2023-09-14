import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ROUTES } from './services/constants/GlobalRoutes.js';
import LandingPage from './components/pages/Landing/Landing.js';

function Journeys() {

  return (
    <Routes>
      <Route
        path={`${ROUTES.HOME}`}
        element={<LandingPage />}
      ></Route>
    </Routes>
  );
}

export default Journeys;
