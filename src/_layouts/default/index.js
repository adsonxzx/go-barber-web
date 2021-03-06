import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './style';
import Header from '../../componets/Header';

export default function DefaultLayout({ children }) {
  return (
    <Wrapper>
      <Header />
      {children}
    </Wrapper>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
