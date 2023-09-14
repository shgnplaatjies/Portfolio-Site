import React from 'react';
import PropTypes from 'prop-types';

/**
 * MessageCard page for my portfolio site.
 *
 * @returns {React.Component} The MessageCard page component.
 */
function MessageCardPage({ primaryMessage='Whoops', secondaryMessage='Something went wrong...' }) {
  return (
    <>
      <h1>{primaryMessage}</h1>
      <h2>{secondaryMessage}</h2>
    </>
  );
}

MessageCardPage.PropTypes = {
  primaryMessage: PropTypes.string,
  secondaryMessage: PropTypes.string,
};

export default MessageCardPage;