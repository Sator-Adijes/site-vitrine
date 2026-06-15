import React from 'react';

import { Outlet } from 'react-router';

import { Navbar } from './Navbar';

export const Layout = (): React.JSX.Element => (
  <div className="flex flex-col min-h-screen">
    <Navbar />
    <Outlet />
  </div>
);
