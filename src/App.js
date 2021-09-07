import { Switch } from 'react-router-dom';
import React, { useEffect, lazy, Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authOperations, authSelectors } from './redux/auth';

import Container from './components/Container';
import AppBar from './components/AppBar';
import PublicRoute from './components/PublicRoute';
import PrivateRoute from './components/PrivateRoute';

const HomeView = lazy(() => import('./views/HomeView'));
const RegisterView = lazy(() => import('./views/LoginView'));
const LoginView = lazy(() => import('./views/LoginView'));
const ContactsView = lazy(() => import('./views/ContactsView'));
// const UploadView = lazy(() => import('./views/UploadView'));

function App() {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrent);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    !isFetchingCurrentUser && (
      <Container>
        <AppBar />

        <Switch>
          <Suspense fallback={<div>Loading...</div>}>
            <PublicRoute exact path="/">
              <HomeView />
            </PublicRoute>

            <PrivateRoute exact path="/register" restricted>
              <RegisterView />
            </PrivateRoute>

            <PrivateRoute exact path="/login" redirectTo="/contacts" restricted>
              <LoginView />
            </PrivateRoute>

            <PrivateRoute path="/contacts" redirectTo="/login">
              <ContactsView />
            </PrivateRoute>

            {/* <PrivateRoute path="/upload" redirectTo="/login">
              <UploadView />
            </PrivateRoute> */}
          </Suspense>
        </Switch>
      </Container>
    )
  );
}

export default App;
