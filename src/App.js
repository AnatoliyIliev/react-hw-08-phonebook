import { Switch, Route } from 'react-router-dom';
import React, { useEffect, lazy } from 'react';
import Container from './components/Container';

import AppBar from './components/AppBar';
// import HomeView from './views/HomeView';
// import RegisterView from './views/RegisterView';
// import LoginView from './views/LoginView';
// import ContactsView from './views/ContactsView';
import { useDispatch } from 'react-redux';
import { authOperations } from './redux/auth';

const HomeView = lazy(() => import('./views/HomeView'));
const RegisterView = lazy(() => import('./views/LoginView'));
const LoginView = lazy(() => import('./views/LoginView'));
const ContactsView = lazy(() => import('./views/ContactsView'));

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <Container>
      <AppBar />
      {/* <Suspense fallback={<div>Loading...</div>}> */}
      <Switch>
        <Route path="/" exact>
          <HomeView />
        </Route>

        <Route path="/register">
          <RegisterView />
        </Route>

        <Route path="/login">
          <LoginView />
        </Route>

        <Route path="/contacts">
          <ContactsView />
        </Route>
      </Switch>
      {/* </Suspense> */}
    </Container>
  );
}

export default App;
