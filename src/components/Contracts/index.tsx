import React, { FC } from 'react';
import contractTypes from '../../constants/contractTypes';
import { useAppSelector } from '../../hooks/redux';
import Header from '../Header';
import TablesTabs from '../TablesTabs';

interface IContracts { }

const Contracts: FC<IContracts> = ({ ...props }) => {
  const { type } = useAppSelector(state => state.tabReducer)

  const switchTitle = (type: string): string => {
    switch (type) {
      case contractTypes.ADULT:
        return 'Список клиентов-договоров взрослый'
      case contractTypes.STUDENT:
        return 'Список клиентов-договоров студент'
      case contractTypes.CHILDREN:
        return 'Список клиентов-договоров детский'
      default:
        return 'Список клиентов-договоров взрослый'
    }
  }

  return (
    <>
      <Header title={switchTitle(type)} />
      <TablesTabs />
    </>
  );
}

export default Contracts;