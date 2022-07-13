import React, { FC } from 'react';
import CourseTitleFilter from './CourseTitleFilter';
import FullNameFilter from './FullNameFilter';
import './ContractFilters.scss';
import ContractDateFilter from './ContractDateFilter';
import { Button } from '@mui/material';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import { useNavigate } from 'react-router-dom';

interface IContractFilters { }

const ContractFilters: FC<IContractFilters> = ({ ...props }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/create-contract')
  }

  return (
    <div className='contract-filters'>
      <FullNameFilter />
      <CourseTitleFilter />
      <ContractDateFilter />
      <Button variant="outlined" startIcon={<NoteAddIcon />} onClick={handleClick}>
        Добавить
      </Button>
    </div>
  );
}

export default ContractFilters;