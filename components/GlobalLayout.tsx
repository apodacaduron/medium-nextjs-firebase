import React, { FC } from 'react';
import { Toaster } from 'react-hot-toast';

import Navbar from './Navbar';

const GlobalLayout: FC = (props) => {
  return (
    <>
      <Navbar />
      {props.children}
      <Toaster />
    </>
  );
};

export default GlobalLayout;
