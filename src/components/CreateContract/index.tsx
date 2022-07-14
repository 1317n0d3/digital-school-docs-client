import React, { FC } from 'react';
import contractTypes from '../../constants/contractTypes';
import { useAppSelector } from '../../hooks/redux';
import Header from '../Header';
import TablesTabs from '../TablesTabs';
import AdultContractForm from './AdultContractForm';

interface ICreateAdultContract { }

const CreateContract: FC<ICreateAdultContract> = ({ ...props }) => {
  const { type } = useAppSelector(state => state.tabReducer)

  const switchTitle = (type: string): string => {
    switch (type) {
      case contractTypes.ADULT:
        return 'Договор взрослый'
      case contractTypes.STUDENT:
        return 'Договор студент'
      case contractTypes.CHILDREN:
        return 'Договор детский'
      default:
        return 'Договор взрослый'
    }
  }

  const switchForm = (type: string) => {
    switch (type) {
      case contractTypes.ADULT:
        return <AdultContractForm />
      case contractTypes.STUDENT:
        return <AdultContractForm />
      case contractTypes.CHILDREN:
        return <AdultContractForm />
      default:
        return <AdultContractForm />
    }
  }

  return (
    <>
      <Header title={switchTitle(type)} />
      <TablesTabs />
      {switchForm(type)}
    </>
  );
}

export default CreateContract;