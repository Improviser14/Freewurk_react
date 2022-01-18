import React from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import propTypes from "prop-types";

export const Landing = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }
  return (
    <section className='landing'>
      <div className='dark-overlay'>
        <div className='landing-inner'>
          <Link to='/'>
            <h1 className='x-large'>freeWurk</h1>
          </Link>

          <p className='lead'>
            Find freework for credit, experience, for your community or post
            freework opportunities
          </p>
          <div className='buttons'>
            <Link to='/register' className='btn btn-primary'>
              Sign Up
            </Link>
            <Link to='/login' className='btn btn-light'>
              Login
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

Landing.propTypes = {
  isAuthenticated: propTypes.bool
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(Landing);
