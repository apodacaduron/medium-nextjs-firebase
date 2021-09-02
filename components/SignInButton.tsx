import React, { FC } from 'react';

import { auth, googleAuthProvider } from '../lib/firebase';

const SignInButton: FC = () => {
  const signInWithGoogle = async () =>
    await auth.signInWithPopup(googleAuthProvider);

  return (
    <button className="btn-google" onClick={signInWithGoogle}>
      Sign in with Google
    </button>
  );
};

export default SignInButton;
