import React, { FC } from 'react';
import Router from './components/Router';

interface IApp { }

const App: FC<IApp> = ({ ...props }) => {
  return (
    <Router />
  );
}

export default App;
