// rafce
// install es7+ snippets
// npm install --legacy-peer-deps

import React, { lazy, Suspense } from 'react';
import './App.css';
import { Box, CircularProgress } from '@mui/material';

// React Router
// Fetching and sending data.
// Routing ->
// Without React --> Page change = new request + response --> HTML is requested and loaded
// With React SPA --> Only one initial HTML request & response
// --> URL changes handled by client-side React code.
// --> Visible content changes without fetching a new HTML file.
// --> Watches the URL and loads a different React component when the URL changes.
// npm install react-router-dom

// Dynamic paths supported --> Example: '/products/:productId'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Components
import Root from './Components/Root';
import Error from './Pages/Error';

// Lazy Loaded Pages
const Home = lazy(() => import('./Pages/Home'));
const About = lazy(() => import('./Pages/About'));
const ExcerciseDetail = lazy(() => import('./Pages/ExcerciseDetail'));

// Loading Spinner Component
const Loading = () => (
  <Box
    sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
    }}
  >
    <CircularProgress />
  </Box>
);

// Router setup
const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: (
          <Suspense fallback={<Loading />}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: '/About',
        element: (
          <Suspense fallback={<Loading />}>
            <About />
          </Suspense>
        ),
      },
      {
        path: '/ExcerciseDetail/:id',
        element: (
          <Suspense fallback={<Loading />}>
            <ExcerciseDetail />
          </Suspense>
        ),
      },
    ],
  },
]);

// Main App
const Tut7 = () => {
  return (
    <RouterProvider
      router={router}
      fallbackElement={<Loading />}
    />
  );
};

export default Tut7;
