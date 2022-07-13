import React, { FC } from 'react';
import CourseTitleFilter from './CourseTitleFilter';
import FullNameFilter from './FullNameFilter';
import './ContractFilters.scss';
import ContractDateFilter from './ContractDateFilter';
import { Button } from '@mui/material';
import NoteAddIcon from '@mui/icons-material/NoteAdd';

interface IContractFilters { }

const ContractFilters: FC<IContractFilters> = ({ ...props }) => {

  return (
    <div className='contract-filters'>
      <FullNameFilter />
      <CourseTitleFilter />
      <ContractDateFilter />
      <Button variant="outlined" startIcon={<NoteAddIcon />}>
        Добавить
      </Button>
    </div>
  );
}

export default ContractFilters;