import React, { FC } from 'react';
import Header from '../Header';
import LoginForm from '../LoginForm';

interface ILogin {

}

const Login: FC<ILogin> = ({ ...props }) => {
  return (
    <>
      <Header title={'Авторизация'} showLogOutButton={false} />
      <LoginForm />
    </>
  );
}

export default Login;