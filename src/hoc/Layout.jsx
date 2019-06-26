import React from 'react';
import Header from '../components/Header/Header';
import CssBaseline from '@material-ui/core/CssBaseline';

const Layout = (Component) => {
  return (props) =>(
    <div>
      <CssBaseline />
      <Header />
      <Component {...props} />
    </div>
  );
}

export default Layout;