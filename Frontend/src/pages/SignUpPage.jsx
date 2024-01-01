import React from "react";

export default function SignUpPage() {
  return (
    <>
      <h1>Sign Up</h1>
      <form>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" />
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input type="password" id="confirmPassword" />
        <button type="submit">Sign Up</button>
      </form>
    </>
  );
}
