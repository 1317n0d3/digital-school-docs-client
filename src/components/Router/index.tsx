import React, { FC } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Contracts from '../Contracts';
import CreateContract from '../CreateContract';
import { withAuthRedirect } from '../hoc/withAuthRedirect';
import Login from '../Login';

interface IRouter { }

const Router: FC<IRouter> = ({ ...props }) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/*'} element={<Navigate to={'/contracts'} />} />
        <Route path={'/login'} element={<Login />} />
        <Route path={'/contracts'} element={withAuthRedirect(Contracts)} />
        <Route path={'/create-contract'} element={withAuthRedirect(CreateContract)} />
      </Routes>

    </BrowserRouter>
  );
}

export default Router;
