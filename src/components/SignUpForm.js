import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { signUp } from 'Store/actions';

const SignUpForm = () => {
  const dispatch = useDispatch();
  const { loading, error, data } = useSelector((state) => state.signUpData);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signUp({ email, password }));
  };
  return (
    <div className="form-body">
      <div className="row">
        <div className="form-holder">
          <div className="form-content">
            <div className="form-items">
              {!data ? (
                <>
                  <h3>Sign Up Today</h3>
                  <p>Fill in the data below.</p>
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
                    <div className="form-button d-inline-block mt-3">
                      <button
                        id="submit"
                        type="button"
                        className="btn btn-primary"
                        onClick={(e) => handleSubmit(e)}
                      >
                        Register
                      </button>
                    </div>
                    <div className="signup-link d-inline-block m-3">
                      <p>
                        Existing User?
                        <Link to="/signin" type="button" className="btn btn-link">
                          Sign In
                        </Link>
                      </p>
                    </div>
                    {loading && <p>Please wait...</p>}
                    {!!error && (
                      <div className="alert alert-danger my-2" role="alert">
                        Error {error}
                      </div>
                    )}
                  </form>
                </>
              ) : (
                <>
                  <h3>Congratulations!</h3>
                  <p>
                    You have SignUp successfully, You can
                    <Link to="/signin" type="button" className="btn btn-link">
                      Sign In
                    </Link>
                    now.
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
