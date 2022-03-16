import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

const Start = React.lazy(() =>
  import(/* webpackChunkName: "start" */ './start')
);
const Market = React.lazy(() =>
  import(/* webpackChunkName: "market" */ './market')
);
const Gogo = ({ match }) => (
  <Suspense fallback={<div className="loading" />}>
    <Switch>
      <Redirect exact from={`${match.url}/`} to={`${match.url}/start`} />
      <Route
        path={`${match.url}/start`}
        render={(props) => <Start {...props} />}
      />
      <Route
        path={`${match.url}/market`}
        render={(props) => <Market {...props} />}
      />
      <Redirect to="/error" />
    </Switch>
  </Suspense>
);
export default Gogo;
