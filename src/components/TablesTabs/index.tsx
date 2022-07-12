import { Tab, Tabs } from '@mui/material';
import React, { FC, SyntheticEvent, useState } from 'react';
import ContractsTable from '../ContractsTable';

interface ITablesTabs { }

const TablesTabs: FC<ITablesTabs> = ({ ...props }) => {
  const [value, setValue] = useState(0);

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="table type tabs"
      // sx={{ marginRight: 0, backgroundColor: 'black', width: '400px' }}
      >
        <Tab label="Взрослый" />
        <Tab label="Студент" />
        <Tab label="Детский" />
      </Tabs>
      <ContractsTable contractType={value} />
    </>
  );
}

export default TablesTabs;