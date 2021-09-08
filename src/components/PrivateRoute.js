import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router';
import { authSelectors } from '../redux/auth';

export default function PrivateRoute({
  // component: Cpmponent,
  children,
  redirectTo = '/',
  ...routeRrops
}) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <Route {...routeRrops}>
      {isLoggedIn ? children : <Redirect to={redirectTo} />}
    </Route>
  );
}

/**
 * 1. Он должен повторять API Route
 *  2. Он должен рендерить Route
 * - Если маршрут приватный и пользователь залогинен, рендерит компонент
 * - В противном случае рендерит Redirect на redirectTo
 */
