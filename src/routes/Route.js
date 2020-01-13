import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import AuthLayout from '../_layouts/auth';
import DefaultLayout from '../_layouts/default';

function RouteWrapper({ component: Component, isPrivate, signed, ...rest }) {
  if (!signed && isPrivate) {
    return <Redirect to="/" />;
  }

  if (signed && !isPrivate) {
    return <Redirect to="/dashboard" />;
  }

  const Layout = signed ? DefaultLayout : AuthLayout;

  return (
    <Route
      {...rest}
      render={props => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  );
}

RouteWrapper.propTypes = {
  isPrivate: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
  signed: PropTypes.bool,
};

RouteWrapper.defaultProps = {
  isPrivate: false,
  signed: false,
};

const mapStateToProps = state => ({
  signed: state.auth.signed,
});

export default connect(mapStateToProps)(RouteWrapper);
