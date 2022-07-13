import React, { FC } from 'react';
import Header from '../Header';

interface ICreateContractForm { }

const CreateContractForm: FC<ICreateContractForm> = ({ ...props }) => {

  return (
    <>
      <Header title={'Создание взрослого договора'} />
    </>
  );
}

export default CreateContractForm;