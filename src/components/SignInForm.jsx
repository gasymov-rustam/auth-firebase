import { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import ResetPass from "./ResetPass";

export default function SignInForm() {
  const { signIn, resetPassword } = useAuth();
  const [isPassword, setIsPassword] = useState(false);
  function loginUser(event) {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    signIn(email, password);
  }
  return (
    <>
      <button onClick={() => setIsPassword(true)}>Reset Password</button>
      {isPassword && <ResetPass />}
      {!isPassword && (
        <form onSubmit={loginUser}>
          <h2>Login form</h2>
          <input type="email" name="email" required />
          <input type="text" name="password" required />
          <button type="submit">Login</button>
        </form>
      )}
    </>
  );
}
