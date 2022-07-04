import React, { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from '../Login';

interface IRouter {

}

const Router: FC<IRouter> = ({ ...props }) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
