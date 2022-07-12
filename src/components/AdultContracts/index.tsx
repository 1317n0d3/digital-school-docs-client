import React, { FC } from 'react';
import Header from '../Header';
import TablesTabs from '../TablesTabs';

interface IAdultContracts { }

const AdultContracts: FC<IAdultContracts> = ({ ...props }) => {
  return (
    <>
      <Header title='Список клиентов-договоров взрослый' />
      <TablesTabs />
    </>
  );
}

export default AdultContracts;