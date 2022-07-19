import { Button, TextField } from '@mui/material';
import { useFormik } from 'formik';
import React, { FC, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import './LoginForm.scss';
import { appAPI } from "../../../services/AppService";
import { useAppDispatch } from '../../../hooks/redux';
import { authSlice } from '../../../store/reducers/AuthSlice';

interface ILoginForm { }

const validationSchema = yup.object({
  username: yup
    .string()
    .min(4, 'Login should be of minimum 4 characters length')
    .required('Login is required'),
  password: yup
    .string()
    .min(4, 'Password should be of minimum 4 characters length')
    .required('Password is required'),
});

const textFieldStyle = { marginBottom: '20px' };

const LoginForm: FC<ILoginForm> = ({ ...props }) => {
  const [isValid, setIsValid] = useState<boolean>(false);
  const [createAuth] = appAPI.useUserAuthMutation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { setLoginCredentials } = authSlice.actions;
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      // alert(JSON.stringify(values, null, 2));
      // setIsValid(true)
      // createAuth({
      //   username: formik.values.login,
      //   password: formik.values.password
      // })

      createAuth(values)
        .unwrap()
        .then((credentials) => {
          dispatch(setLoginCredentials(credentials)); console.log(credentials);
        })
        .then(() => navigate('/contracts'))
        .catch((error) => console.log(error.message))
    },
  });

  return (
    <div className='login-form'>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          id="username"
          name="username"
          label="Логин"
          value={formik.values.username}
          onChange={formik.handleChange}
          error={formik.touched.username && Boolean(formik.errors.username)}
          helperText={formik.touched.username && formik.errors.username}
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
          <Navigate to={'/contracts'} replace={true} />
        )}
      </form>
    </div>
  );
}

export default LoginForm;