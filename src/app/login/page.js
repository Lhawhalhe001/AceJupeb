// src/app/login/page.js
// Login page where user can toggle between Student and Admin login.

"use client";
import React, { useState } from "react";
import Link from "next/link";
import "../../styles/login.css";
import { postData } from "../../utils/api"; // used when backend exists

export default function LoginPage() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [identifier, setIdentifier] = useState(""); // email or id
  const [password, setPassword] = useState(""); // password or access code
  const [loading, setLoading] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // ------------------------------
    // If you have backend ready, use this POST to authenticate
    // const endpoint = isAdmin ? 'auth/admin-login' : 'auth/student-login';
    // const res = await postData(endpoint, { identifier, password });
    // if (res && res.token) { localStorage.setItem('token', res.token); if (isAdmin) router.push('/admin'); else router.push('/student'); }
    // ------------------------------

    // For now: local simulation
    setTimeout(() => {
      setLoading(false);
      if (isAdmin) window.location.href = "/admin";
      else window.location.href = "/student";
    }, 700);
  };

  return (
    <div className="login-container container">
      <div className="login-card">
        <h2>{isAdmin ? "Admin Login" : "Student Login"}</h2>
        <form onSubmit={submit}>
          <label>FullName</label>
          <input
            value={identifier}
            onChange={(e) => setIdentifier(e.target.value)}
            placeholder={isAdmin ? "AceJupeb Admin......." : "AceJupeb student....."}
            required
          />

          <label>Password or Access Code</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit">{loading ? "Checking..." : "Login"}</button>
        </form>

        <p className="switch">
          {isAdmin ? "Login as a Student?" : "Login as an Admin?"}
          <span onClick={() => setIsAdmin(!isAdmin)} className="switch-link">
            {" "}
            Click here
          </span>
        </p>

        <p style={{ marginTop: 10 }}>
          No account? Ask your admin to generate an access code.
        </p>
      </div>
    </div>
  );
}
