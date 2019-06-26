import React from 'react';
import Header from '../components/Header/Header';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

const Layout = (Component) => {
  return (props) =>(
    <div>
      <CssBaseline />
      <Header />
      <Container maxWidth="xl">
        <Component {...props} />
      </Container>
    </div>
  );
}

export default Layout;