import React from "react";
import { Link } from "react-router-dom";
import "../signUpPage.css";

export default function SignUpPage() {
  return (
    <div className="container">
      <h1>Sign Up</h1>
      <form>
        <input type="text" placeholder="Username" />
        <input type="text" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <input type="password" placeholder="Confirm Password" />
        <button type="submit">Sign Up</button>
      </form>
      <div>
        <p>Already have an account?</p>
        <Link to={"/sign-in"}>
          <span>Sign In</span>
        </Link>
      </div>
    </div>
  );
}
