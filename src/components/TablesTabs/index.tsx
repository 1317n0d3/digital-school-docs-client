import { Tab, Tabs } from '@mui/material';
import React, { FC, SyntheticEvent } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { tabSlice } from '../../store/reducers/TabSlice';
import ContractsTable from '../ContractsTable';

interface ITablesTabs { }

const TablesTabs: FC<ITablesTabs> = ({ ...props }) => {
  const { id } = useAppSelector(state => state.tabReducer)
  const { setTableType } = tabSlice.actions;
  const dispatch = useAppDispatch();

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    dispatch(setTableType(newValue))
  };

  return (
    <>
      <Tabs
        value={id}
        onChange={handleChange}
        aria-label="table type tabs"
      >
        <Tab label="Взрослый" />
        <Tab label="Студент" />
        <Tab label="Детский" />
      </Tabs>
      <ContractsTable contractType={id} />
    </>
  );
}

export default TablesTabs;