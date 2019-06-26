
import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { Link } from 'react-router-dom';



const dashboardHeader = () => (
  <div>
    <AppBar position="static">
      <Toolbar>
        <Container maxWidth="xl">
          <Typography variant="h6" noWrap>
            <Link to={'/'} style={{ textDecoration: 'none', color: 'white'}}>Copybird</Link>
          </Typography>
        </Container>
      </Toolbar>
    </AppBar>
  </div>
);

export default dashboardHeader;