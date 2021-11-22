import { useAuth } from "../hooks/useAuth";

export default function ResetPass() {
  const { resetPassword } = useAuth();
  function resetPassUser(event) {
    event.preventDefault();
    const email = event.target.email.value;
    resetPassword(email);
  }
  return (
    <form onSubmit={resetPassUser}>
      <h2>Reset Password Form</h2>
      <input type="email" name="email" required />
      <button type="submit">Reset</button>
    </form>
  );
}
