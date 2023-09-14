export const ROUTES = {
  BLANK: '/',
  HOME: '/Welcome',
  ABOUT: '/About',
  PORTFOLIO: '/Projects',
  CONTACT: '/Contact',
  ERROR: '/Error',
};

export const JOURNEYS = {
  BLANK: '/',
  MAIN: '/Welcome',
  PORTFOLIO: '/Portfolio',
};

export const BLANK_JOURNEY = {
  ERROR: `${ROUTES.BLANK}${ROUTES.ERROR}`,
};

export const MAIN_JOURNEY = {
  LANDING: `${JOURNEYS.MAIN}${ROUTES.BLANK}`,
  ABOUT: `${JOURNEYS.MAIN}${ROUTES.PORTFOLIO}`,
  CONTACT: `${JOURNEYS.MAIN}${ROUTES.CONTACT}`,
};

export const PORTFOLIO_JOURNEY = {
  PORTFOLIO: `${JOURNEYS.PORTFOLIO}`,
};
