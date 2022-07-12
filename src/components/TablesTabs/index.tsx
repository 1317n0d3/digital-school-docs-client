import { Tab, Tabs } from '@mui/material';
import React, { FC, SyntheticEvent, useState } from 'react';
import AdultContractsTable from '../AdultContractsTable';
import StudentContractsTable from '../StudentContractsTable';

interface ITablesTabs { }

const TablesTabs: FC<ITablesTabs> = ({ ...props }) => {
  const [value, setValue] = useState(0);

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const switchTab = (value: number) => {
    switch (value) {
      case 0:
        return <AdultContractsTable />
      case 1:
        return <StudentContractsTable />
      default:
        return <AdultContractsTable />
    }
  }

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
      {switchTab(value)}
    </>
  );
}

export default TablesTabs;