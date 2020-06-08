import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import React from 'react';
import { IconButton } from '@material-ui/core';
import { Edit } from '@material-ui/icons';
import { EditSweetDialog } from '../EditSweetDialog';

interface Column {
  id: 'name' | 'price' | 'description' | 'large_category' | 'small_categories' | 'action' | 'shop';
  label: string;
  minWidth?: number;
  align?: 'right' | 'center';
  format?: (value: number) => string;
}

const columns: Column[] = [
  { id: 'name', label: '名前', minWidth: 170, align: 'center' },
  { id: 'price', label: '価格', minWidth: 100, align: 'center' },
  {
    id: 'description',
    label: '説明',
    minWidth: 170,
    align: 'center',
  },
  {
    id: 'large_category',
    label: '大カテゴリ',
    minWidth: 170,
    align: 'center',
  },
  {
    id: 'small_categories',
    label: '少カテゴリ',
    minWidth: 170,
    align: 'center',
  },
  {
    id: 'shop',
    label: '販売店舗',
    minWidth: 170,
    align: 'center',
  },
  {
    id: 'action',
    label: '操作',
    align: 'center',
  },
];

interface Data {
  name: string;
  code: string;
  population: number;
  size: number;
  density: number;
}

function createData(name: string, code: string, population: number, size: number): Data {
  const density = population / size;
  return { name, code, population, size, density };
}

const rows = [createData('ケーキ', 'IN', 1324171354, 3287263)];

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 440,
  },
});

export function SweetsTable() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [open, setOpen] = React.useState(false);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <>
      <Paper className={classes.root}>
        <TableContainer className={classes.container}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow hover role="checkbox" tabIndex={-1}>
                <TableCell component="th" scope="row" align="center">
                  いちごのショートケーキ
                </TableCell>
                <TableCell component="th" scope="row" align="center">
                  500円
                </TableCell>
                <TableCell component="th" scope="row" align="center">
                  おいしいケーキdesu
                </TableCell>
                <TableCell component="th" scope="row" align="center">
                  洋菓子
                </TableCell>
                <TableCell component="th" scope="row" align="center">
                  ケーキ
                </TableCell>
                <TableCell component="th" scope="row" align="center">
                  店舗A
                </TableCell>
                <TableCell component="th" scope="row" align="center">
                  <IconButton onClick={() => setOpen(true)}>
                    <Edit />
                  </IconButton>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={1}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
      <EditSweetDialog open={open} handleClose={() => setOpen(false)} />
    </>
  );
}
