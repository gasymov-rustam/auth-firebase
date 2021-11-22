import { useAuth } from "../hooks/useAuth";

export default function UpdateEmailForm({ setEmail }) {
  const { updateAuthEmail } = useAuth();
  function updateEmail(event) {
    event.preventDefault();
    const email = event.target.email.value;
    updateAuthEmail(email);
    setEmail(false);
  }
  return (
    <form onSubmit={updateEmail}>
      <h2>Update information about your email</h2>
      <input type="email" name="email" required />
      <button type="submit">Set new Email!!</button>
    </form>
  );
}
