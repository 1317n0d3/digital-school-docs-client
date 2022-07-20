import { Button, TextField } from '@mui/material';
import { useFormik } from 'formik';
import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import '../ContractForm.scss';
import { fieldsMap } from './const';

interface IAdultContractForm { }

const validationSchema = yup.object({
  surname: yup
    .string()
    .required('Surname is required'),
  firstName: yup
    .string()
    .required('Name is required'),
  patronymic: yup
    .string()
    .required('Patronymic is required'),
  address: yup
    .string()
    .required('Patronymic is required'),
  birthday: yup
    .string()
    .required('Patronymic is required'),
  position: yup
    .string()
    .required('Patronymic is required'),
  job: yup
    .string()
    .required('Patronymic is required'),
  passportSerial: yup
    .string()
    .required('Patronymic is required'),
  passportNumber: yup
    .string()
    .required('Patronymic is required'),
  passportIssue: yup
    .string()
    .required('Patronymic is required'),
  snils: yup
    .string()
    .required('Patronymic is required'),
  phone: yup
    .string()
    .required('Patronymic is required'),
  email: yup
    .string()
    .required('Patronymic is required'),
  course: yup
    .string()
    .required('Patronymic is required'),
  contractDate: yup
    .string()
    .required('Patronymic is required'),
  contractNumber: yup
    .string()
    .required('Patronymic is required'),
});

const textFieldStyle = { margin: '10px', width: '400px' };

const AdultContractForm: FC<IAdultContractForm> = ({ ...props }) => {
  // const [isValid, setIsValid] = useState<boolean>(false);
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      surname: '',
      firstName: '',
      patronymic: '',
      address: '',
      birthday: '',
      position: '',
      job: '',
      passportSerial: '',
      passportNumber: '',
      passportIssue: '',
      passportDate: '',
      snils: '',
      phone: '',
      email: '',
      course: '',
      contractDate: '',
      contractNumber: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      // alert(JSON.stringify(values, null, 2));
      // setIsValid(true)
    },
  });

  const handleClick = () => {
    navigate('/contracts')
  }

  return (
    <div className='contract-form-container'>
      <form onSubmit={formik.handleSubmit} className='contract-form'>
        <h3>Основная информация</h3>
        {(Object.entries(fieldsMap) as [key: keyof typeof formik.values, value: string][]).map(entry => {
          const [key, value] = entry

          return (
            <TextField
              fullWidth
              id={key}
              name={key}
              label={value}
              value={formik.values[key]}
              onChange={formik.handleChange}
              error={formik.touched[key] && Boolean(formik.errors[key])}
              helperText={formik.touched[key] && formik.errors[key]}
              sx={textFieldStyle}
            />
          )
        })}

        <TextField
          fullWidth
          id="birthday"
          name="birthday"
          label="Дата рождения"
          InputLabelProps={{ shrink: true, required: true }}
          type={'date'}
          value={formik.values.birthday}
          onChange={formik.handleChange}
          error={formik.touched.birthday && Boolean(formik.errors.birthday)}
          helperText={formik.touched.birthday && formik.errors.birthday}
          sx={textFieldStyle}
        />
        <h3>Образование и карьера</h3>
        <TextField
          fullWidth
          id="position"
          name="position"
          label="Должность"
          value={formik.values.position}
          onChange={formik.handleChange}
          error={formik.touched.position && Boolean(formik.errors.position)}
          helperText={formik.touched.position && formik.errors.position}
          sx={textFieldStyle}
        />
        <TextField
          fullWidth
          id="job"
          name="job"
          label="Место работы"
          value={formik.values.job}
          onChange={formik.handleChange}
          error={formik.touched.job && Boolean(formik.errors.job)}
          helperText={formik.touched.job && formik.errors.job}
          sx={textFieldStyle}
        />
        <h3>Паспортные данные</h3>
        <TextField
          fullWidth
          id="passportSerial"
          name="passportSerial"
          label="Серия"
          value={formik.values.passportSerial}
          onChange={formik.handleChange}
          error={formik.touched.passportSerial && Boolean(formik.errors.passportSerial)}
          helperText={formik.touched.passportSerial && formik.errors.passportSerial}
          sx={textFieldStyle}
        />
        <TextField
          fullWidth
          id="passportNumber"
          name="passportNumber"
          label="Номер"
          value={formik.values.passportNumber}
          onChange={formik.handleChange}
          error={formik.touched.passportNumber && Boolean(formik.errors.passportNumber)}
          helperText={formik.touched.passportNumber && formik.errors.passportNumber}
          sx={textFieldStyle}
        />
        <TextField
          fullWidth
          id="passportIssue"
          name="passportIssue"
          label="Кем выдан"
          value={formik.values.passportIssue}
          onChange={formik.handleChange}
          error={formik.touched.passportIssue && Boolean(formik.errors.passportIssue)}
          helperText={formik.touched.passportIssue && formik.errors.passportIssue}
          sx={textFieldStyle}
        />
        <TextField
          fullWidth
          id="passportIssue"
          name="passportIssue"
          label="Дата выдачи"
          value={formik.values.passportDate}
          InputLabelProps={{ shrink: true, required: true }}
          type={'date'}
          onChange={formik.handleChange}
          error={formik.touched.passportDate && Boolean(formik.errors.passportDate)}
          helperText={formik.touched.passportDate && formik.errors.passportDate}
          sx={textFieldStyle}
        />
        <TextField
          fullWidth
          id="snils"
          name="snils"
          label="СНИЛС"
          value={formik.values.snils}
          onChange={formik.handleChange}
          error={formik.touched.snils && Boolean(formik.errors.snils)}
          helperText={formik.touched.snils && formik.errors.snils}
          sx={textFieldStyle}
        />
        <h3>Контактная информация</h3>
        <TextField
          fullWidth
          id="phone"
          name="phone"
          label="Номер телефона"
          type={'tel'}
          value={formik.values.phone}
          onChange={formik.handleChange}
          error={formik.touched.phone && Boolean(formik.errors.phone)}
          helperText={formik.touched.phone && formik.errors.phone}
          sx={textFieldStyle}
        />
        <TextField
          fullWidth
          id="email"
          name="email"
          label="Электронная почта"
          type={'email'}
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
          sx={textFieldStyle}
        />
        <h3>Курсы</h3>
        <TextField
          fullWidth
          id="course"
          name="course"
          label="Название курса"
          value={formik.values.course}
          onChange={formik.handleChange}
          error={formik.touched.course && Boolean(formik.errors.course)}
          helperText={formik.touched.course && formik.errors.course}
          sx={textFieldStyle}
        />
        <TextField
          fullWidth
          id="contractDate"
          name="contractDate"
          label="Дата заключения договора"
          InputLabelProps={{ shrink: true, required: true }}
          type={'date'}
          value={formik.values.contractDate}
          onChange={formik.handleChange}
          error={formik.touched.contractDate && Boolean(formik.errors.contractDate)}
          helperText={formik.touched.contractDate && formik.errors.contractDate}
          sx={textFieldStyle}
        />
        <TextField
          fullWidth
          id="contractNumber"
          name="contractNumber"
          label="Номер договора"
          value={formik.values.contractNumber}
          onChange={formik.handleChange}
          error={formik.touched.contractNumber && Boolean(formik.errors.contractNumber)}
          helperText={formik.touched.contractNumber && formik.errors.contractNumber}
          sx={textFieldStyle}
        />
        <Button color="primary" variant="contained" type="submit">
          Добавить
        </Button>

        <Button color="primary" variant="contained" type="button" onClick={handleClick}>
          Назад
        </Button>

        {/* {isValid && (
          <Navigate to={'/contracts'} replace={true} />
        )} */}
      </form>
    </div>
  );
}

export default AdultContractForm;