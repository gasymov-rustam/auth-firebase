import { Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

export default function Header() {
  const { user, loading } = useAuth();
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          {!loading && (
            <>
              {!user && (
                <li>
                  <Link to="/login">Login</Link>
                </li>
              )}
              {user && (
                <li>
                  <Link to="/dashboard">Dashboard</Link>
                </li>
              )}
            </>
          )}
        </ul>
      </nav>
    </header>
  );
}
