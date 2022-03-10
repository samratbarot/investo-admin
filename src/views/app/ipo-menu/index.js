import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

const IpoList = React.lazy(() =>import('./ipo'));
const SecondaryMarketList = React.lazy(() => import('./secondry-market'));
const AddArtical = React.lazy(() =>import('./araticles'));


const IpoMenu = ({ match }) => (
  <Suspense fallback={<div className="loading" />}>
    <Switch>
      <Redirect exact from={`${match.url}/`} to={`${match.url}/list`} />
      <Route
        path={`${match.url}/list`}
        exact
        render={(props) => <IpoList {...props} />}
      />
       <Route
        path={`${match.url}/secondary-market`}
        exact
        render={(props) => <SecondaryMarketList {...props} />}
      />
       <Route
        path={`${match.url}/add-article`}
        exact
        render={(props) => <AddArtical {...props} />}
      />
     
      <Redirect to="/error" />
    </Switch>
  </Suspense>
);
export default IpoMenu;
