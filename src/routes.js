import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Layout from './hoc/Layout';

import BackupsContainer from './containers/BackupsContainer/BackupsContainer';
import BackupContainer from './containers/BackupContainer/BackupContainer';
import BackupForm from './containers/BackupForm/BackupForm';

const Routes = () => {
  return (
    <Switch>
    	<Route exact path="/" component={Layout(BackupsContainer)} />
    	<Route exact path="/detail" component={Layout(BackupContainer)} />
    	<Route exact path="/new" component={Layout(BackupForm)} />
    </Switch>
  );
}

export default Routes;