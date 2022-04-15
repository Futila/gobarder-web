import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './styles';

export default function Default({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

AuthLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
