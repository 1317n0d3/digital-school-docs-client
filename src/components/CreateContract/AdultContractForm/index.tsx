import { Button, TextField } from '@mui/material';
import { useFormik } from 'formik';
import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import '../ContractForm.scss';

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
    .required('address is required'),
  birthday: yup
    .date()
    .required('birthday is required'),
  position: yup
    .string()
    .required('position is required'),
  job: yup
    .string()
    .required('job is required'),
  passportSerial: yup
    .string()
    .required('passportSerial is required'),
  passportNumber: yup
    .string()
    .required('passportNumber is required'),
  passportIssue: yup
    .string()
    .required('passportIssue is required'),
  passportDate: yup
    .date()
    .required('passportDate is required'),
  snils: yup
    .string()
    .required('snils is required'),
  phone: yup
    .string()
    .matches(/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/, 'Phone number is not valid')
    .required('phone is required'),
  email: yup
    .string()
    .email()
    .required('email is required'),
  course: yup
    .string()
    .required('course is required'),
  contractDate: yup
    .string()
    .required('contractDate is required'),
  contractNumber: yup
    .string()
    .required('contractNumber is required'),
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
        <TextField
          fullWidth
          id="surname"
          name="surname"
          label="Фамилия"
          value={formik.values.surname}
          onChange={formik.handleChange}
          error={formik.touched.surname && Boolean(formik.errors.surname)}
          helperText={formik.touched.surname && formik.errors.surname}
          sx={textFieldStyle}
        />
        <TextField
          fullWidth
          id="firstName"
          name="firstName"
          label="Имя"
          value={formik.values.firstName}
          onChange={formik.handleChange}
          error={formik.touched.firstName && Boolean(formik.errors.firstName)}
          helperText={formik.touched.firstName && formik.errors.firstName}
          sx={textFieldStyle}
        />
        <TextField
          fullWidth
          id="patronymic"
          name="patronymic"
          label="Отчество"
          value={formik.values.patronymic}
          onChange={formik.handleChange}
          error={formik.touched.patronymic && Boolean(formik.errors.patronymic)}
          helperText={formik.touched.patronymic && formik.errors.patronymic}
          sx={textFieldStyle}
        />
        <TextField
          fullWidth
          id="address"
          name="address"
          label="Адрес"
          value={formik.values.address}
          onChange={formik.handleChange}
          error={formik.touched.address && Boolean(formik.errors.address)}
          helperText={formik.touched.address && formik.errors.address}
          sx={textFieldStyle}
        />
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
          id="passportDate"
          name="passportDate"
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
        <div className='form-buttons'>
          <Button color="primary" variant="contained" type="submit">
            Добавить
          </Button>

          <Button color="primary" variant="contained" type="button" onClick={handleClick}>
            Назад
          </Button>
        </div>
        {/* {isValid && (
          <Navigate to={'/contracts'} replace={true} />
        )} */}
      </form>
    </div>
  );
}

export default AdultContractForm;