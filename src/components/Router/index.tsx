import React, { FC } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Contracts from '../Contracts';
import Login from '../Login';

interface IRouter {

}

const Router: FC<IRouter> = ({ ...props }) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<Navigate to={'/login'} />} />
        <Route path={'/login'} element={<Login />} />
        <Route path={'/contracts'} element={<Contracts />} />
      </Routes>

    </BrowserRouter>
  );
}

export default Router;
