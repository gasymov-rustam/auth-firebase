import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from './useAuth';

export function useRequireAuth(redirectUrl = '/login') {
  const auth = useAuth();
  const navigate = useNavigate();
  const location = useLocation()

  useEffect(() => {
    if (auth.user === false) {
      navigate(redirectUrl, {state: location});
    }
  }, [auth]);

  return auth;
}
