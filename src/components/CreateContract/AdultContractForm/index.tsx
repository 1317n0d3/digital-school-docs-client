import { Button, TextField } from '@mui/material';
import { useFormik } from 'formik';
import React, { FC, useState } from 'react';
import { Navigate } from 'react-router-dom';
import * as yup from 'yup';
import '../ContractForm.scss';

interface IAdultContractForm { }

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

const textFieldStyle = { margin: '10px', width: '400px' };

const AdultContractForm: FC<IAdultContractForm> = ({ ...props }) => {
  const [isValid, setIsValid] = useState<boolean>(false);
  const formik = useFormik({
    initialValues: {
      login: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      // alert(JSON.stringify(values, null, 2));
      setIsValid(true)
    },
  });

  return (
    <div className='contract-form-container'>
      <form onSubmit={formik.handleSubmit} className='contract-form'>
        <h3>Основная информация</h3>
        <TextField
          fullWidth
          id="login"
          name="login"
          label="Фамилия"
          value={formik.values.login}
          onChange={formik.handleChange}
          error={formik.touched.login && Boolean(formik.errors.login)}
          helperText={formik.touched.login && formik.errors.login}
          sx={textFieldStyle}
        />
        <TextField
          fullWidth
          id="login"
          name="login"
          label="Имя"
          value={formik.values.login}
          onChange={formik.handleChange}
          error={formik.touched.login && Boolean(formik.errors.login)}
          helperText={formik.touched.login && formik.errors.login}
          sx={textFieldStyle}
        />
        <TextField
          fullWidth
          id="login"
          name="login"
          label="Отчество"
          value={formik.values.login}
          onChange={formik.handleChange}
          error={formik.touched.login && Boolean(formik.errors.login)}
          helperText={formik.touched.login && formik.errors.login}
          sx={textFieldStyle}
        />
        <TextField
          fullWidth
          id="login"
          name="login"
          label="Адрес"
          value={formik.values.login}
          onChange={formik.handleChange}
          error={formik.touched.login && Boolean(formik.errors.login)}
          helperText={formik.touched.login && formik.errors.login}
          sx={textFieldStyle}
        />
        <TextField
          fullWidth
          id="login"
          name="login"
          label="Дата рождения"
          value={formik.values.login}
          onChange={formik.handleChange}
          error={formik.touched.login && Boolean(formik.errors.login)}
          helperText={formik.touched.login && formik.errors.login}
          sx={textFieldStyle}
        />
        <h3>Образование и карьера</h3>
        <TextField
          fullWidth
          id="login"
          name="login"
          label="Должность"
          value={formik.values.login}
          onChange={formik.handleChange}
          error={formik.touched.login && Boolean(formik.errors.login)}
          helperText={formik.touched.login && formik.errors.login}
          sx={textFieldStyle}
        />
        <TextField
          fullWidth
          id="login"
          name="login"
          label="Место работы"
          value={formik.values.login}
          onChange={formik.handleChange}
          error={formik.touched.login && Boolean(formik.errors.login)}
          helperText={formik.touched.login && formik.errors.login}
          sx={textFieldStyle}
        />
        <h3>Паспортные данные</h3>
        <TextField
          fullWidth
          id="login"
          name="login"
          label="Серия"
          value={formik.values.login}
          onChange={formik.handleChange}
          error={formik.touched.login && Boolean(formik.errors.login)}
          helperText={formik.touched.login && formik.errors.login}
          sx={textFieldStyle}
        />
        <TextField
          fullWidth
          id="login"
          name="login"
          label="Номер"
          value={formik.values.login}
          onChange={formik.handleChange}
          error={formik.touched.login && Boolean(formik.errors.login)}
          helperText={formik.touched.login && formik.errors.login}
          sx={textFieldStyle}
        />
        <TextField
          fullWidth
          id="login"
          name="login"
          label="Кем и когда выдан"
          value={formik.values.login}
          onChange={formik.handleChange}
          error={formik.touched.login && Boolean(formik.errors.login)}
          helperText={formik.touched.login && formik.errors.login}
          sx={textFieldStyle}
        />
        <TextField
          fullWidth
          id="login"
          name="login"
          label="СНИЛС"
          value={formik.values.login}
          onChange={formik.handleChange}
          error={formik.touched.login && Boolean(formik.errors.login)}
          helperText={formik.touched.login && formik.errors.login}
          sx={textFieldStyle}
        />
        <h3>Контактная информация</h3>
        <TextField
          fullWidth
          id="login"
          name="login"
          label="Номер телефона"
          value={formik.values.login}
          onChange={formik.handleChange}
          error={formik.touched.login && Boolean(formik.errors.login)}
          helperText={formik.touched.login && formik.errors.login}
          sx={textFieldStyle}
        />
        <TextField
          fullWidth
          id="login"
          name="login"
          label="Электронная почта"
          value={formik.values.login}
          onChange={formik.handleChange}
          error={formik.touched.login && Boolean(formik.errors.login)}
          helperText={formik.touched.login && formik.errors.login}
          sx={textFieldStyle}
        />
        <h3>Курсы</h3>
        <TextField
          fullWidth
          id="password"
          name="password"
          label="Название курса"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
          sx={textFieldStyle}
        />
        <TextField
          fullWidth
          id="login"
          name="login"
          label="Дата заключения договора"
          value={formik.values.login}
          onChange={formik.handleChange}
          error={formik.touched.login && Boolean(formik.errors.login)}
          helperText={formik.touched.login && formik.errors.login}
          sx={textFieldStyle}
        />
        <TextField
          fullWidth
          id="login"
          name="login"
          label="Номер договора"
          value={formik.values.login}
          onChange={formik.handleChange}
          error={formik.touched.login && Boolean(formik.errors.login)}
          helperText={formik.touched.login && formik.errors.login}
          sx={textFieldStyle}
        />
        <Button color="primary" variant="contained" fullWidth type="submit">
          Добавить
        </Button>

        {isValid && (
          <Navigate to={'/contracts'} replace={true} />
        )}
      </form>
    </div>
  );
}

export default AdultContractForm;