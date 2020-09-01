import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { TextField, MenuItem } from '@material-ui/core';
import Data from './data.json';

const useStyles = makeStyles({
  text :{
    color: '#ffffff'
  },
  container: {
    maxHeight: 330
  }
});

export default function SimpleTable(props) {
  const classes = useStyles();
  const rows = props.rows || [];
  const headers = props.headers || [];
  const isCell = props.isCell != null ? props.isCell : true;
  const key = props.key ? props.key : 'name';

  return (
    <TableContainer component={Paper} className={classes.container}>
      <Table className={classes.table} size='small' aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell size='medium'>
              Filters Applied:
            </TableCell>
            <TableCell>
              <TextField id='select' value='10' size='small' select>
                <MenuItem value='10'>Filter 1</MenuItem>
              </TextField>
            </TableCell>
            <TableCell>
              <TextField id='select' value='10' size='small' select>
                <MenuItem value='10'>Filter 1</MenuItem>
              </TextField>
            </TableCell>
            <TableCell>
              <TextField id='select' value='10' select>
                <MenuItem value='10' size='small'>Filter 1</MenuItem>
              </TextField>
            </TableCell>

          </TableRow>
          <TableRow>
            {headers.map((header) => (
              <TableCell key={header} align='right'>{header.toUpperCase()}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {(rows.map((row) => (
            <TableRow key={row[key] || row}>
              {isCell ? Object.keys(row).map((property) => <TableCell key={property + key} align='right'>{row[property]}</TableCell>) : <TableCell colSpan={10} key={row}>{row}</TableCell>}
            </TableRow>
          )))
          }

        </TableBody>
      </Table>
    </TableContainer>
  );
}
