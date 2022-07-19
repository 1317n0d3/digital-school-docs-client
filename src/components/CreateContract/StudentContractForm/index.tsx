import { Button, TextField } from '@mui/material';
import { useFormik } from 'formik';
import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import '../ContractForm.scss';

interface IStudentContractForm { }

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

const StudentContractForm: FC<IStudentContractForm> = ({ ...props }) => {
  const navigate = useNavigate();
  // const [isValid, setIsValid] = useState<boolean>(false);
  const formik = useFormik({
    initialValues: {
      surname: '',
      firstName: '',
      patronymic: '',
      address: '',
      birthday: '',
      position: '',
      job: '',
      surnameStudent: '',
      firstNameStudent: '',
      patronymicStudent: '',
      addressStudent: '',
      birthdayStudent: '',
      education: '',
      graduationDate: '',
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
        <h3>Основная информация о представителе</h3>
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
        <h3>Основная информация о студенте</h3>
        <TextField
          fullWidth
          id="surnameStudent"
          name="surnameStudent"
          label="Фамилия"
          value={formik.values.surnameStudent}
          onChange={formik.handleChange}
          error={formik.touched.surnameStudent && Boolean(formik.errors.surnameStudent)}
          helperText={formik.touched.surnameStudent && formik.errors.surnameStudent}
          sx={textFieldStyle}
        />
        <TextField
          fullWidth
          id="firstNameStudent"
          name="firstNameStudent"
          label="Имя"
          value={formik.values.firstNameStudent}
          onChange={formik.handleChange}
          error={formik.touched.firstNameStudent && Boolean(formik.errors.firstNameStudent)}
          helperText={formik.touched.firstNameStudent && formik.errors.firstNameStudent}
          sx={textFieldStyle}
        />
        <TextField
          fullWidth
          id="patronymicStudent"
          name="patronymicStudent"
          label="Отчество"
          value={formik.values.patronymicStudent}
          onChange={formik.handleChange}
          error={formik.touched.patronymicStudent && Boolean(formik.errors.patronymicStudent)}
          helperText={formik.touched.patronymicStudent && formik.errors.patronymicStudent}
          sx={textFieldStyle}
        />
        <TextField
          fullWidth
          id="addressStudent"
          name="addressStudent"
          label="Адрес"
          value={formik.values.addressStudent}
          onChange={formik.handleChange}
          error={formik.touched.addressStudent && Boolean(formik.errors.addressStudent)}
          helperText={formik.touched.addressStudent && formik.errors.addressStudent}
          sx={textFieldStyle}
        />
        <TextField
          fullWidth
          id="birthdayStudent"
          name="birthdayStudent"
          label="Дата рождения"
          InputLabelProps={{ shrink: true, required: true }}
          type={'date'}
          value={formik.values.birthdayStudent}
          onChange={formik.handleChange}
          error={formik.touched.birthdayStudent && Boolean(formik.errors.birthdayStudent)}
          helperText={formik.touched.birthdayStudent && formik.errors.birthdayStudent}
          sx={textFieldStyle}
        />
        <h3>Образование и карьера</h3>
        <TextField
          fullWidth
          id="education"
          name="education"
          label="Место учебы"
          value={formik.values.education}
          onChange={formik.handleChange}
          error={formik.touched.education && Boolean(formik.errors.education)}
          helperText={formik.touched.education && formik.errors.education}
          sx={textFieldStyle}
        />
        <TextField
          fullWidth
          id="graduationDate"
          name="graduationDate"
          label="Дата окончания вуза"
          InputLabelProps={{ shrink: true, required: true }}
          type={'date'}
          value={formik.values.graduationDate}
          onChange={formik.handleChange}
          error={formik.touched.graduationDate && Boolean(formik.errors.graduationDate)}
          helperText={formik.touched.graduationDate && formik.errors.graduationDate}
          sx={textFieldStyle}
        />
        {/* <TextField
          fullWidth
          id="birthday"
          name="birthday"
          label="Год завершения обучения в вузе"
          InputLabelProps={{ shrink: true, required: true }}
          type={'date'}
          value={formik.values.birthday}
          onChange={formik.handleChange}
          error={formik.touched.birthday && Boolean(formik.errors.birthday)}
          helperText={formik.touched.birthday && formik.errors.birthday}
          sx={textFieldStyle}
        /> */}
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
      </form>
    </div>
  );
}

export default StudentContractForm;