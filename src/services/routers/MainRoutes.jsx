import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { MAIN_JOURNEY } from '../constants/GlobalRoutes.js';
import LandingPage from '../../components/pages/Landing/Landing.jsx';
import ContactPage from '../../components/pages/Contact/Contact.jsx';
import AboutPage from '../../components/pages/About/About.jsx';
import MessageCardPage from '../../components/pages/MessageCard/MessageCard.jsx';

function MainRoutes() {
  return (
    <Routes>
      <Route
        path={`${MAIN_JOURNEY.LANDING}/*`}
        element={<LandingPage />}
      ></Route>
      <Route
        path={`${MAIN_JOURNEY.ABOUT}/*`}
        element={<AboutPage />}
      ></Route>
      <Route
        path={`${MAIN_JOURNEY.CONTACT}/*`}
        element={<ContactPage />}
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

export default MainRoutes;
