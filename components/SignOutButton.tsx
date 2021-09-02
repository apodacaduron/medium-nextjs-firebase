import React, { FC } from 'react';

import { auth } from '../lib/firebase';

const SignInButton: FC = () => {
  const signOut = () => auth.signOut();

  return (
    <button className="btn-google" onClick={signOut}>
      Sign out
    </button>
  );
};

export default SignInButton;
