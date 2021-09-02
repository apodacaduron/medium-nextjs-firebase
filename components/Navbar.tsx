import Link from 'next/link';
import React, { FC, useContext } from 'react';

import { UserContext } from '../lib/context';

const Navbar: FC = () => {
  const { user, username } = useContext(UserContext);

  const hasUser = username && (
    <>
      <li className="push-left">
        <Link href="/admin">
          <button className="btn-blue">Write posts</button>
        </Link>
      </li>
      <li>
        <Link href={`/${username}`}>
          <img src={user?.photoURL || ""} alt="User image" />
        </Link>
      </li>
    </>
  );

  const noUser = !username && (
    <>
      <li>
        <Link href="/enter">
          <button className="btn-blue">Sign in</button>
        </Link>
      </li>
    </>
  );

  return (
    <nav className="navbar">
      <ul>
        <li>
          <button className="btn-logo">Feed</button>
        </li>
        {hasUser}
        {noUser}
      </ul>
    </nav>
  );
};

export default Navbar;
