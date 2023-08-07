import React from 'react';
import { useRoutes } from 'react-router-dom';
import routes from './router'
const App = () => {
  const router = useRoutes(routes)
  return (
    <>
      {router}
    </>
    );
};

export default App;