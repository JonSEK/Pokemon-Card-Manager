import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "../signUpPage.css";

export default function SignUp() {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await axios.post("/api/auth/signup", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.data;
      console.log(data);
      if (data.success === false) {
        setLoading(false);
        setError(data.error);
        return;
      }
      setLoading(false);
      setError(null);
      navigate("/sign-in");
    } catch (error) {
      setLoading(false);
      setError(error.response?.data?.error || error.message);
    }
  };

  return (
    <div className="container">
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          id="username"
          onChange={handleChange}
        />
        <input
          type="email"
          placeholder="Email"
          id="email"
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Password"
          id="password"
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Confirm Password"
          id="confirmPassword"
          onChange={handleChange}
        />
        <button disabled={loading} type="submit">
          {loading ? "Loading..." : "Sign Up"}
        </button>
      </form>
      <div>
        <p>Already have an account?</p>
        <Link to={"/sign-in"}>
          <span>Sign In</span>
        </Link>
      </div>
      {error && <p>{error}</p>}
    </div>
  );
}
