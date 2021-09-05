import { Switch, Route } from 'react-router-dom';
import React from 'react';
import Container from './components/Container';

import AppBar from './components/AppBar';
import HomeView from './views/HomeView';
import RegisterView from './views/RegisterView';
import LoginView from './views/LoginView';
import ContactsView from './views/ContactsView';

function App() {
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
