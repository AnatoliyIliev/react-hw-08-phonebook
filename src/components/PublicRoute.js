import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router';
import { authSelectors } from '../redux/auth';

export default function PublicRoute({
  redirectTo = '/',
  children,
  restricted = false,
  ...routeRrops
}) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  //   const shouldRedirect = isLoggedIn && routeRrops.restricted;
  const shouldRedirect = isLoggedIn && routeRrops.restricted;
  return (
    <Route {...routeRrops}>
      {shouldRedirect ? <Redirect to={redirectTo} /> : children}
      {/* {shouldRedirect ? <Redirect to="/contacts" /> : children} */}
    </Route>
  );
}
