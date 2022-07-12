import React, { FC, useEffect, useState } from 'react';
// import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

const adultColumns: GridColDef[] = [
  {
    field: 'fullName',
    headerName: 'ФИО',
    width: 170,
    disableColumnMenu: true
  },
  {
    field: 'courseTitle',
    headerName: 'Название курса',
    width: 170,
    disableColumnMenu: true
  },
  {
    field: 'contractNumber',
    headerName: 'Номер договора',
    width: 170,
    disableColumnMenu: true
  },
  {
    field: 'contractDate',
    headerName: 'Дата договора',
    width: 170,
    disableColumnMenu: true
  },
  {
    field: 'courseTime',
    headerName: 'Часы',
    type: 'number',
    width: 90,
    disableColumnMenu: true
  },
  {
    field: 'snils',
    headerName: 'СНИЛС',
    width: 170,
    disableColumnMenu: true,
    sortable: false,
  },
  {
    field: 'age',
    headerName: 'Возраст',
    type: 'number',
    width: 90,
    disableColumnMenu: true
  },
  {
    field: 'passport',
    headerName: 'Паспортные данные',
    width: 170,
    disableColumnMenu: true,
    sortable: false,
  },
  {
    field: 'contacts',
    headerName: 'Контакты',
    width: 170,
    disableColumnMenu: true,
    sortable: false,
  },
  // {
  //   field: 'fullName',
  //   headerName: 'Full name',
  //   description: 'This column has a value getter and is not sortable.',
  //   sortable: false,
  //   disableColumnMenu: true,
  //   width: 160,
  //   valueGetter: (params: GridValueGetterParams) =>
  //     `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  // },
];

const studentColumns: GridColDef[] = [
  {
    field: 'fullName',
    headerName: 'ФИО',
    width: 170,
    disableColumnMenu: true
  },
  {
    field: 'parentFullName',
    headerName: 'ФИО представителя',
    width: 170,
    disableColumnMenu: true
  },
  {
    field: 'courseTitle',
    headerName: 'Название курса',
    width: 170,
    disableColumnMenu: true
  },
  {
    field: 'contractNumber',
    headerName: 'Номер договора',
    width: 170,
    disableColumnMenu: true
  },
  {
    field: 'contractDate',
    headerName: 'Дата договора',
    width: 170,
    disableColumnMenu: true
  },
  {
    field: 'courseTime',
    headerName: 'Часы',
    type: 'number',
    width: 90,
    disableColumnMenu: true
  },
  {
    field: 'snils',
    headerName: 'СНИЛС',
    width: 170,
    disableColumnMenu: true,
    sortable: false,
  },
  {
    field: 'age',
    headerName: 'Возраст',
    type: 'number',
    width: 90,
    disableColumnMenu: true
  },
  {
    field: 'passport',
    headerName: 'Паспортные данные',
    width: 170,
    disableColumnMenu: true,
    sortable: false,
  },
  {
    field: 'parentPassport',
    headerName: 'Паспортные данные представителя',
    width: 170,
    disableColumnMenu: true,
    sortable: false,
  },
  {
    field: 'contacts',
    headerName: 'Контакты',
    width: 170,
    disableColumnMenu: true,
    sortable: false,
  },
  // {
  //   field: 'fullName',
  //   headerName: 'Full name',
  //   description: 'This column has a value getter and is not sortable.',
  //   sortable: false,
  //   disableColumnMenu: true,
  //   width: 160,
  //   valueGetter: (params: GridValueGetterParams) =>
  //     `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  // },
];

const childColumns: GridColDef[] = [
  {
    field: 'fullName',
    headerName: 'ФИО',
    width: 170,
    disableColumnMenu: true
  },
  {
    field: 'parentFullName',
    headerName: 'ФИО представителя',
    width: 170,
    disableColumnMenu: true
  },
  {
    field: 'courseTitle',
    headerName: 'Название курса',
    width: 170,
    disableColumnMenu: true
  },
  {
    field: 'contractNumber',
    headerName: 'Номер договора',
    width: 170,
    disableColumnMenu: true
  },
  {
    field: 'contractDate',
    headerName: 'Дата договора',
    width: 170,
    disableColumnMenu: true
  },
  {
    field: 'courseTime',
    headerName: 'Часы',
    type: 'number',
    width: 90,
    disableColumnMenu: true
  },
  {
    field: 'age',
    headerName: 'Возраст',
    type: 'number',
    width: 90,
    disableColumnMenu: true
  },
  {
    field: 'passport',
    headerName: 'Паспортные данные',
    width: 170,
    disableColumnMenu: true,
    sortable: false,
  },
  {
    field: 'contacts',
    headerName: 'Контакты',
    width: 170,
    disableColumnMenu: true,
    sortable: false,
  },
  // {
  //   field: 'fullName',
  //   headerName: 'Full name',
  //   description: 'This column has a value getter and is not sortable.',
  //   sortable: false,
  //   disableColumnMenu: true,
  //   width: 160,
  //   valueGetter: (params: GridValueGetterParams) =>
  //     `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  // },
];

const rows = [
  { id: 1, fullName: 'Snow Jon', age: 35 },
  { id: 2, fullName: 'Lannister Cersei', age: 42 },
  { id: 3, fullName: 'Lannister Jaime', age: 45 },
  { id: 4, fullName: 'Stark Arya', age: 16 },
  { id: 5, fullName: 'Targaryen Daenerys', age: null },
  { id: 6, fullName: 'Melisandre', age: 150 },
  { id: 7, fullName: 'Clifford Ferrara', age: 44 },
  { id: 8, fullName: 'Frances Rossini', age: 36 },
  { id: 9, fullName: 'Roxie Harvey', age: 65 },
  { id: 2, fullName: 'Lannister Cersei', age: 42 },
  { id: 3, fullName: 'Lannister Jaime', age: 45 },
  { id: 4, fullName: 'Stark Arya', age: 16 },
  { id: 5, fullName: 'Targaryen Daenerys', age: null },
  { id: 6, fullName: 'Melisandre', age: 150 },
  { id: 7, fullName: 'Clifford Ferrara', age: 44 },
  { id: 8, fullName: 'Frances Rossini', age: 36 },
  { id: 9, fullName: 'Roxie Harvey', age: 65 },
  { id: 2, fullName: 'Lannister Cersei', age: 42 },
  { id: 3, fullName: 'Lannister Jaime', age: 45 },
  { id: 4, fullName: 'Stark Arya', age: 16 },
  { id: 5, fullName: 'Targaryen Daenerys', age: null },
  { id: 6, fullName: 'Melisandre', age: 150 },
  { id: 7, fullName: 'Clifford Ferrara', age: 44 },
  { id: 8, fullName: 'Frances Rossini', age: 36 },
  { id: 9, fullName: 'Roxie Harvey', age: 65 },
];

interface IContractsTable {
  contractType: number,
}

const ContractsTable: FC<IContractsTable> = ({ contractType, ...props }) => {
  const [columns, setColumns] = useState(adultColumns);

  useEffect(() => {
    switchColumns(contractType)
  })


  const switchColumns = (value: number) => {
    switch (value) {
      case 0:
        setColumns(adultColumns);
        break;
      case 1:
        setColumns(studentColumns);
        break;
      case 2:
        setColumns(childColumns);
        break;
      default:
        return;
    }
  }

  return (
    <div style={{ width: '100%', height: '70vh' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
      />
    </div>
  );
}

export default ContractsTable;