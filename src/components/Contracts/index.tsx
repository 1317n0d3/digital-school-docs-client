import React, { FC } from 'react';
import { useAppSelector } from '../../hooks/redux';
import Header from '../Header';
import TablesTabs from '../TablesTabs';

interface IContracts { }

const Contracts: FC<IContracts> = ({ ...props }) => {
  const { id } = useAppSelector(state => state.tabReducer)

  const switchTitle = (id: number): string => {
    switch (id) {
      case 0:
        return 'Список клиентов-договоров взрослый'
      case 1:
        return 'Список клиентов-договоров студент'
      case 2:
        return 'Список клиентов-договоров детский'
      default:
        return 'Список клиентов-договоров взрослый'
    }
  }

  return (
    <>
      <Header title={switchTitle(id)} />
      <TablesTabs />
    </>
  );
}

export default Contracts;