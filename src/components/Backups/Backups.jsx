import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import Grid from '@material-ui/core/Grid';


class Backups extends React.Component {
  state = {
    rows: [
      {name: "database-dump.sql", size: 14000, date: "2018-19-19 20:20:20"},
      {name: "database-dump-1.sql", size: 15000, date: "2018-19-19 20:20:20"},
    ]
  }
  render(){
    return (
      <Grid container spacing={5}>
        <Grid item xs={6}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="right">Size</TableCell>
                <TableCell align="right">Date</TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.state.rows.map((row, index) => (
                <TableRow key={index}>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.size}</TableCell>
                  <TableCell align="right">{row.date}</TableCell>
                  <TableCell></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Grid>
        <Grid item xs={3}>
          <Paper elevation={0}>
            <Button variant="outlined" color="primary">
              Create backup
              <Icon>add</Icon>
            </Button>
          </Paper>
        </Grid>
      </Grid>
    )
  }
}

export default Backups;