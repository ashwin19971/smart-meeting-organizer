import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import { BASE_ROUTE, HOME_PAGE_ROUTE } from '../models/routes';
import NoPage from '../components/NoPage';
import HomePage from '../modules/MeetingOrganizer/pages/HomePage';

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route path={BASE_ROUTE} exact component={HomePage} />
        <Route path={HOME_PAGE_ROUTE} exact component={HomePage} />
        <Route component={NoPage} />
        <Redirect from="//*" to="/*" />
      </Switch>
    )
  }
}

export default Routes;