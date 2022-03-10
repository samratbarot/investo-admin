import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

const IpoList = React.lazy(() =>import('./ipo'));
const ArticleList = React.lazy(()=>import('./araticles'))
const SecondaryMarketList = React.lazy(() => import('./secondry-market'));
const AddArtical = React.lazy(() =>import('./add-article'));
const EditArtical = React.lazy(() =>import('./edit-article'));
const AddIpo = React.lazy(() =>import('./add-ipo'));
const EditIpo = React.lazy(() =>import('./edit-ipo'));
const EditSecondaryMaket=React.lazy(() =>import('./edit-secondary-market'))



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
        path={`${match.url}/articles`}
        exact
        render={(props) => <ArticleList {...props} />}
      />
        <Route
        path={`${match.url}/add-ipo`}
        exact
        render={(props) => <AddIpo {...props} />}
      />
        <Route
        path={`${match.url}/edit-ipo`}
        exact
        render={(props) => <EditIpo {...props} />}
      />
        <Route
        path={`${match.url}/edit-secondary-market`}
        exact
        render={(props) => <EditSecondaryMaket {...props} />}
      />
       <Route
        path={`${match.url}/add-article`}
        exact
        render={(props) => <AddArtical {...props} />}
      />
        <Route
        path={`${match.url}/edit-article`}
        exact
        render={(props) => <EditArtical {...props} />}
      />
     
      <Redirect to="/error" />
    </Switch>
  </Suspense>
);
export default IpoMenu;
