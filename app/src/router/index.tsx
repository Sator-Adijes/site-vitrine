import React from 'react';

import { createBrowserRouter } from 'react-router';

import { Layout } from '@/components/Layout';
import { HomePage } from '@/pages/HomePage';
import { PassionsPage } from '@/pages/PassionsPage';
import { PlongeePage } from '@/pages/PlongeePage';
import { ProfilePage } from '@/pages/ProfilePage';
import { ProjectsPage } from '@/pages/ProjectsPage';
import { VeloPage } from '@/pages/VeloPage';
import { VoyagePage } from '@/pages/VoyagePage';

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/profile', element: <ProfilePage /> },
      { path: '/passions', element: <PassionsPage /> },
      { path: '/passions/plongee', element: <PlongeePage /> },
      { path: '/passions/velo', element: <VeloPage /> },
      { path: '/passions/voyage', element: <VoyagePage /> },
      { path: '/projects', element: <ProjectsPage /> },
    ],
  },
]);
