import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import SignInForm from 'Components/SignInForm';

const SignIn = () => {
  const { isAuthenticated } = useSelector((state) => state.signInData);
  const history = useHistory();

  useEffect(() => {
    if (isAuthenticated) {
      history.push('/home');
    }
  }, [history, isAuthenticated]);

  return (
    <div className="container">
      <SignInForm />
    </div>
  );
};

export default SignIn;
