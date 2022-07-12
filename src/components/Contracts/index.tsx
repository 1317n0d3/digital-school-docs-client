import React, { FC } from 'react';
import Header from '../Header';
import TablesTabs from '../TablesTabs';

interface IContracts { }

const Contracts: FC<IContracts> = ({ ...props }) => {
  return (
    <>
      <Header title='Список клиентов-договоров взрослый' />
      <TablesTabs />
    </>
  );
}

export default Contracts;