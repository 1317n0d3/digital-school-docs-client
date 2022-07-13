import { Box, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import React, { FC } from 'react';

interface IContractDateFilter { }

const ContractDateFilter: FC<IContractDateFilter> = ({ ...props }) => {
  const [age, setAge] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  return (
    <Box sx={{ minWidth: 300 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Дата договора</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Дата договора"
          onChange={handleChange}
        >
          <MenuItem value={''}>По умолчанию</MenuItem>
          <MenuItem value={10}>Новые</MenuItem>
          <MenuItem value={20}>Старые</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

export default ContractDateFilter;