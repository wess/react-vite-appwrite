import React from 'react';
import {
  Navigate,
  useLocation,
} from 'react-router-dom';

import {
  useSession,
} from '../../hooks';

const AuthRoute = ({children}) => {
  const location = useLocation();
  const {session} = useSession();

  return session == null
  ? <Navigate to="/home" state={{from: location}}/>
  : children
  ;
}

export default AuthRoute;