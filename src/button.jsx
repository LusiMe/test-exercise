
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1)
    }
  }
})
  // table: {
  //   minWidth: 650,
  // },
);

function createData (name, calories, fat) {
  return { name, calories, fat };
}
const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24),
  createData('Frozen yoghurt', 159, 6.0, 24)

];

export default function ContainedButtons () {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} size='small' aria-label='a dense table'>
        <TableHead>
          <TableRow>
            <TableCell>BTS-USD</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell align='right'>
              <Button variant='contained' color='secondary' size='small'>
              Sell
              </Button>
            </TableCell>
            <TableCell align='right'>num</TableCell>
            <TableCell align='right'>
              <Button variant='contained' color='primary' size='small'>
              Buy
              </Button>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell align='right'>1,25</TableCell>
            <TableCell align='right'> MKT</TableCell>
            <TableCell align='right'> Slippage</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
