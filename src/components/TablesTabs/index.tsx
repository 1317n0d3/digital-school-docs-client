import { Tab, Tabs } from '@mui/material';
import React, { FC, SyntheticEvent } from 'react';
import contractTypes from '../../constants/contractTypes';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { tabSlice } from '../../store/reducers/TabSlice';

interface ITablesTabs { }

const TablesTabs: FC<ITablesTabs> = ({ ...props }) => {
  const { id } = useAppSelector(state => state.tabReducer)
  const { setTableType } = tabSlice.actions;
  const dispatch = useAppDispatch();

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    let tableType: string;

    // TODO: refactor with store/reducers/TabSlice
    switch (newValue) {
      case 0:
        tableType = contractTypes.ADULT
        break;
      case 1:
        tableType = contractTypes.STUDENT
        break;
      case 2:
        tableType = contractTypes.CHILDREN
        break;
      default:
        tableType = contractTypes.ADULT
        break;
    }
    dispatch(setTableType(tableType))
  };

  return (
    <Tabs
      value={id}
      onChange={handleChange}
      aria-label="table tabs"
    >
      <Tab label="Взрослый" />
      <Tab label="Студент" />
      <Tab label="Детский" />
    </Tabs>
  );
}

export default TablesTabs;