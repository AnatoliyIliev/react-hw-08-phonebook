import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router';
import { authSelectors } from '../redux/auth';

export default function PrivateRoute({
  // component: Cpmponent,
  redirectTo = '/',
  children,
  ...routeRrops
}) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <Route {...routeRrops}>
      {isLoggedIn ? children : <Redirect to={redirectTo} />}
      {/* {isLoggedIn ? children : <Redirect to="/login" />} */}
    </Route>
  );
}
