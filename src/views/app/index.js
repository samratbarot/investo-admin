import React, { Suspense } from 'react';
import { Route, withRouter, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import '../../custom/style.css'
import AppLayout from 'layout/AppLayout';
// import { ProtectedRoute, UserRole } from 'helpers/authHelper';

const Gogo = React.lazy(() =>
  import(/* webpackChunkName: "viwes-gogo" */ './gogo')
);
const SecondMenu = React.lazy(() =>
  import(/* webpackChunkName: "viwes-second-menu" */ './second-menu')
);
const OrderPage = React.lazy(() =>
  import(/* webpackChunkName: "viwes-order-page" */ './order-list')
);
const RequestPage = React.lazy(() =>
  import(/* webpackChunkName: "viwes-order-page" */ './request')
);
const ReportPage = React.lazy(() =>
  import(/* webpackChunkName: "viwes-order-page" */ './report')
);
const IpoPage = React.lazy(() =>
  import(/* webpackChunkName: "viwes-order-page" */ './ipo')
);


const App = ({ match }) => {
  return (
    <AppLayout>
      <div className="dashboard-wrapper">
        <Suspense fallback={<div className="loading" />}>
          <Switch>
            <Redirect exact from={`${match.url}/`} to={`${match.url}/gogo`} />
            <Route
              path={`${match.url}/gogo`}
              render={(props) => <Gogo {...props} />}
            />
            <Route
              path={`${match.url}/second-menu`}
              render={(props) => <SecondMenu {...props} />}
            />

            {/* <ProtectedRoute
                    path={`${match.url}/second-menu`}
                    component={SecondMenu}
                    roles={[UserRole.Admin]}
            /> */}
            <Route
              path={`${match.url}/order`}
              render={(props) => <OrderPage {...props} />}
            />
            <Route
              path={`${match.url}/request-menu`}
              render={(props) => <RequestPage {...props} />}
            />
             <Route
              path={`${match.url}/report`}
              render={(props) => <ReportPage {...props} />}
            />
            <Route
              path={`${match.url}/ipo`}
              render={(props) => <IpoPage {...props} />}
            />
            <Redirect to="/error" />
          </Switch>
        </Suspense>
      </div>
    </AppLayout>
  );
};

const mapStateToProps = ({ menu }) => {
  const { containerClassnames } = menu;
  return { containerClassnames };
};

export default withRouter(connect(mapStateToProps, {})(App));
