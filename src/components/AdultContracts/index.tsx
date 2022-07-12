import React, { FC } from 'react';
import AdultContractsTable from '../AdultContractsTable';
import Header from '../Header';

interface IAdultContracts { }

const AdultContracts: FC<IAdultContracts> = ({ ...props }) => {
  return (
    <>
      <Header title='Список клиентов-договоров взрослый' />
      <AdultContractsTable />
    </>
  );
}

export default AdultContracts;