import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { signIn } from 'Store/actions';

const SignInForm = () => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.signInData);
  const [email, setEmail] = useState('eve.holt@reqres.in');
  const [password, setPassword] = useState('cityslicka');
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signIn({ email, password }));
  };
  return (
    <div className="form-body">
      <div className="row">
        <div className="form-holder">
          <div className="form-content">
            <div className="form-items">
              <h3>Sign In</h3>
              <p>Enter your email and password.</p>
              <form className="requires-validation">
                <div className="col-md-12">
                  <input
                    className="form-control"
                    name="email"
                    placeholder="E-mail Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <div className="valid-feedback">Email field is valid!</div>
                  <div className="invalid-feedback">Email field cannot be blank!</div>
                </div>

                <div className="col-md-12">
                  <input
                    className="form-control"
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <div className="valid-feedback">Password field is valid!</div>
                  <div className="invalid-feedback">Password field cannot be blank!</div>
                </div>
                <div className="form-button mt-3 d-inline-block">
                  <button
                    id="submit"
                    type="button"
                    className="btn btn-primary"
                    onClick={(e) => handleSubmit(e)}
                  >
                    Sign In
                  </button>
                </div>
                <div className="signup-link d-inline-block m-3">
                  <p>
                    New User?
                    <Link to="/signup" type="button" className="btn btn-link">
                      Sign Up
                    </Link>
                  </p>
                </div>
                {loading && <p>Verifying details...</p>}
                {!!error && (
                  <div className="alert alert-danger" role="alert">
                    Error: {error}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInForm;
