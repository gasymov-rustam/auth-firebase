import { useEffect } from 'react';
import { useLocation, useNavigate, useHref } from 'react-router-dom';
import SignInForm from '../components/SignInForm';
import SignUpForm from '../components/SignUpForm';
import { useAuth } from '../hooks/useAuth';

export default function Login() {
  const location = useLocation();
  const { user, loading } = useAuth();
  const navigate = useNavigate();
  const from = location.state?.pathname || '/';
  console.log(from);

  useEffect(() => {
    if (user && !loading) {
      navigate(from, { replace: true });
    }
  }, [user, loading]);

  if (loading) {
    return <h1>Loading...</h1>;
  }
  if (user) {
    return <></>;
  }

  return (
    <div>
      <h1>Login</h1>
      <SignInForm />
      <SignUpForm />
    </div>
  );
}
