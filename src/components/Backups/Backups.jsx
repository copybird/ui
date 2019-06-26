import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';


class Backups extends React.Component {
  state = {
    rows: [
      {name: "database-dump.sql", size: 14000, date: "2018-19-19 20:20:20"},
      {name: "database-dump-1.sql", size: 15000, date: "2018-19-19 20:20:20"},
      {name: "database-dump-1.sql", size: 15000, date: "2018-19-19 20:20:20"},
      {name: "database-dump-1.sql", size: 15000, date: "2018-19-19 20:20:20"},
      {name: "database-dump-1.sql", size: 15000, date: "2018-19-19 20:20:20"},
      {name: "database-dump-1.sql", size: 15000, date: "2018-19-19 20:20:20"},
      {name: "database-dump-1.sql", size: 15000, date: "2018-19-19 20:20:20"},
      {name: "database-dump-1.sql", size: 15000, date: "2018-19-19 20:20:20"},
    ]
  }
  render(){
    return (
      <Grid container>
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
                    <Link to={'/detail'}>{row.name}</Link>
                  </TableCell>
                  <TableCell align="right">{row.size}</TableCell>
                  <TableCell align="right">{row.date}</TableCell>
                  <TableCell>

                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Grid>
        <Grid item xs={3}>
          <div style={{ padding: 20, margin: 20 }}>
            <Button variant="outlined" color="primary" onClick={this.props.createBackup}>
              <Icon>add</Icon>
              Create backup
            </Button>
          </div>
        </Grid>
      </Grid>
    )
  }
}

export default Backups;