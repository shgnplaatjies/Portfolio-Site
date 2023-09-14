import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { BLANK_JOURNEY } from '../constants/GlobalRoutes.js';
import MessageCardPage from '../../components/pages/MessageCard/MessageCard.jsx';

function BlankRoutes() {
  return (
    <Routes>
      <Route
        path={`${BLANK_JOURNEY.ERROR}/*`}
        element={
          <MessageCardPage
            primaryMessage='Whoops!'
            secondaryMessage='Error Page!'
          />
        }
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

export default BlankRoutes;
