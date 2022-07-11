import React, { FC } from 'react';
import Header from '../Header';

interface IAdultContracts { }

const AdultContracts: FC<IAdultContracts> = ({ ...props }) => {
  return (
    <Header title='Список клиентов-договоров взрослый' />
  );
}

export default AdultContracts;