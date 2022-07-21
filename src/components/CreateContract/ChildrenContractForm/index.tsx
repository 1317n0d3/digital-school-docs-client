import { Button, TextField } from '@mui/material';
import { useFormik } from 'formik';
import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { appAPI } from '../../../services/AppService';
import '../ContractForm.scss';

interface IChildrenContractForm { }

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
    .string()
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
  snils: yup
    .string()
    .required('snils is required'),
  phone: yup
    .string()
    .required('phone is required'),
  email: yup
    .string()
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

const ChildrenContractForm: FC<IChildrenContractForm> = (props) => {
  const navigate = useNavigate();
  const [createDocument] = appAPI.useCreateDocumentMutation();
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
      surnameChild: '',
      firstNameChild: '',
      patronymicChild: '',
      birthdayChild: '',
      passportChild: '',
      education: '',
      phoneChild: '',
      emailChild: '',
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
    // validationSchema: validationSchema,
    onSubmit: (values) => {
      // alert(JSON.stringify(values, null, 2));
      // setIsValid(true)
      console.log(values);

      const body =
      {
        "name": `${values.surname} ${values.firstName} ${values.patronymic}`,
        "childName": `${values.surnameChild} ${values.firstNameChild} ${values.patronymicChild}`,
        "education": `${values.education}`,
        "birthday": `${values.birthday}`,
        "passport_serial": `${values.passportSerial}`,
        "passport_number": `${values.passportNumber}`,
        "passport_issue_date": `${values.passportDate}`,
        "passport_issued_by": `${values.passportIssue}`,
        "address": `${values.address}`,
        // "snils": `${values.snils}`,
        "snils": `0`,
        "email": `${values.email}`,
        "phone": `${values.phone}`,
        "doctype": "child_contract",
        "course": `${values.course}`,
        "date": `${values.contractDate}`,
        "contractNumber": `${values.contractNumber}`
      };
      console.log(body);

      createDocument(body)
        .then(() => navigate('/contracts'))
        .catch(err => console.log(err))
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
        <h3>Основная информация о ребенке</h3>
        <TextField
          fullWidth
          id="surnameChild"
          name="surnameChild"
          label="Фамилия"
          value={formik.values.surnameChild}
          onChange={formik.handleChange}
          error={formik.touched.surnameChild && Boolean(formik.errors.surnameChild)}
          helperText={formik.touched.surnameChild && formik.errors.surnameChild}
          sx={textFieldStyle}
        />
        <TextField
          fullWidth
          id="firstNameChild"
          name="firstNameChild"
          label="Имя"
          value={formik.values.firstNameChild}
          onChange={formik.handleChange}
          error={formik.touched.firstNameChild && Boolean(formik.errors.firstNameChild)}
          helperText={formik.touched.firstNameChild && formik.errors.firstNameChild}
          sx={textFieldStyle}
        />
        <TextField
          fullWidth
          id="patronymicChild"
          name="patronymicChild"
          label="Отчество"
          value={formik.values.patronymicChild}
          onChange={formik.handleChange}
          error={formik.touched.patronymicChild && Boolean(formik.errors.patronymicChild)}
          helperText={formik.touched.patronymicChild && formik.errors.patronymicChild}
          sx={textFieldStyle}
        />
        <TextField
          fullWidth
          id="birthdayChild"
          name="birthdayChild"
          label="Дата рождения"
          InputLabelProps={{ shrink: true, required: true }}
          type={'date'}
          value={formik.values.birthdayChild}
          onChange={formik.handleChange}
          error={formik.touched.birthdayChild && Boolean(formik.errors.birthdayChild)}
          helperText={formik.touched.birthdayChild && formik.errors.birthdayChild}
          sx={textFieldStyle}
        />
        <TextField
          fullWidth
          id="passportChild"
          name="passportChild"
          label="Свидетельство о рождении / паспорт"
          value={formik.values.passportChild}
          onChange={formik.handleChange}
          error={formik.touched.passportChild && Boolean(formik.errors.passportChild)}
          helperText={formik.touched.passportChild && formik.errors.passportChild}
          sx={textFieldStyle}
        />
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
        <h3>Контактная информация представителя</h3>
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
        <h3>Контактная информация ребенка</h3>
        <TextField
          fullWidth
          id="phoneChild"
          name="phoneChild"
          label="Номер телефона"
          type={'tel'}
          value={formik.values.phoneChild}
          onChange={formik.handleChange}
          error={formik.touched.phoneChild && Boolean(formik.errors.phoneChild)}
          helperText={formik.touched.phoneChild && formik.errors.phoneChild}
          sx={textFieldStyle}
        />
        <TextField
          fullWidth
          id="emailChild"
          name="emailChild"
          label="Электронная почта"
          type={'email'}
          value={formik.values.emailChild}
          onChange={formik.handleChange}
          error={formik.touched.emailChild && Boolean(formik.errors.emailChild)}
          helperText={formik.touched.emailChild && formik.errors.emailChild}
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

export default ChildrenContractForm;