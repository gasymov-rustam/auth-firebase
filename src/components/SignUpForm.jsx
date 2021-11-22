import { useAuth } from "../hooks/useAuth";

export default function SignUpForm() {
  const { signUp, verificationByEmail } = useAuth();
  function registerUser(event) {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    signUp(email, password);
    // verificationByEmail();
  }
  return (
    <form onSubmit={registerUser}>
      <h2>Register form</h2>
      <input type="email" name="email" required />
      <input type="text" name="password" required />
      <button type="submit">Register</button>
    </form>
  );
}
