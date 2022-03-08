import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

const Diposite = React.lazy(() => import('./diposite'));
const Withdraw = React.lazy(() => import('./withdraw'));

const RequestPage = ({ match }) => (
    
  <Suspense fallback={<div className="loading" />}>
    <Switch>
      <Redirect exact from={`${match.url}/`} to={`${match.url}/request`} />
      <Route
        path={`${match.url}/request`}
        exact
        render={(props) => <Diposite {...props} />}
      />
      <Route
        path={`${match.url}/request/withdraw`}
        exact
        render={(props) => <Withdraw {...props} />}
      />
      <Redirect to="/error" />
    </Switch>
  </Suspense>
);
export default RequestPage;
