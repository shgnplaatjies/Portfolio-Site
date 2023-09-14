import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ROUTES } from '../constants/GlobalRoutes.js';
import PortfolioPage from '../../components/pages/Portfolio/Portfolio.jsx';
import MessageCardPage from '../../components/pages/MessageCard/MessageCard.jsx';

function PortfolioRoutes() {

  return (
    <Routes>
      <Route
        path={`${ROUTES.PORTFOLIO}`}
        element={<PortfolioPage />}
      ></Route>
      <Route
        path={'*'}
        element={
          <MessageCardPage
            primaryMessage='Error 404'
            secondaryMessage='Page not found'
          />
        }
      ></Route>
    </Routes>
  );
}

export default PortfolioRoutes;
