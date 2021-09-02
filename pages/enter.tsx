import type { NextPage } from "next";
import React, { useContext } from 'react';

import SignInButton from '../components/SignInButton';
import SignOutButton from '../components/SignOutButton';
import UsernameForm from '../components/UsernameForm';
import { UserContext } from '../lib/context';

const EnterPage: NextPage = () => {
  const { user, username } = useContext(UserContext);

  const hasFullAccount = user && username && <SignOutButton />;
  const hasUser = user && !username && <UsernameForm />;
  const noUser = !user && !username && <SignInButton />;

  return (
    <main>
      {hasFullAccount}
      {hasUser}
      {noUser}
    </main>
  );
};

export default EnterPage;
