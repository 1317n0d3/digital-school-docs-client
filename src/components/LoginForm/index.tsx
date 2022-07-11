import { Button, TextField } from '@mui/material';
import { useFormik } from 'formik';
import React, { FC, useState } from 'react';
import { Navigate } from 'react-router-dom';
import * as yup from 'yup';
import './LoginForm.scss';

interface ILoginForm { }

const validationSchema = yup.object({
  login: yup
    .string()
    .min(4, 'Login should be of minimum 4 characters length')
    .required('Login is required'),
  password: yup
    .string()
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
});

const textFieldStyle = { marginBottom: '20px' };

const LoginForm: FC<ILoginForm> = ({ ...props }) => {
  const [isValid, setIsValid] = useState<boolean>(false);
  const formik = useFormik({
    initialValues: {
      login: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      setIsValid(true)
    },
  });

  return (
    <div className='login-form'>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          id="login"
          name="login"
          label="Логин"
          value={formik.values.login}
          onChange={formik.handleChange}
          error={formik.touched.login && Boolean(formik.errors.login)}
          helperText={formik.touched.login && formik.errors.login}
          sx={textFieldStyle}
        />
        <TextField
          fullWidth
          id="password"
          name="password"
          label="Пароль"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
          sx={textFieldStyle}
        />
        <Button color="primary" variant="contained" fullWidth type="submit">
          Продолжить
        </Button>

        {isValid && (
          <Navigate to={'/adult-contracts'} replace={true} />
        )}
      </form>
    </div>
  );
}

export default LoginForm;