import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { JOURNEYS } from '../constants/GlobalRoutes.js';
import BlankRoutes from './BlankRoutes.jsx';
import MainRoutes from './MainRoutes.jsx';
import PortfolioRoutes from './PortfolioRoutes.jsx';

/**
 * Routes component to hold the base routes for each journey
 *
 * @returns {JSX.Element} The base route for each journey
 */
function Journeys() {
  return (
    <Routes>
      <Route
        path={`${JOURNEYS.BLANK}*`}
        element={<BlankRoutes />}
      ></Route>
      <Route
        path={`${JOURNEYS.MAIN}/*`}
        element={<MainRoutes />}
      ></Route>
      <Route
        path={`${JOURNEYS.PORTFOLIO}/*`}
        element={<PortfolioRoutes />}
      >
      </Route>
    </Routes>
  );
}

export default Journeys;
