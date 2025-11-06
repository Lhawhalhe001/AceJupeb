// src/utils/api.js
// Reusable API helper functions. Replace BASE_URL with your backend API base URL.

// TODO: Replace this with your backend URL when it's ready
export const BASE_URL = "https://ace-jupeb.onrender.com/api"; 

// Fetch GET request helper
export async function fetchData(endpoint) {
  try {
    // endpoint example: "students", "notes/physics", "admin/generate-code"
    const res = await fetch(`${BASE_URL}/${endpoint}`);
    if (!res.ok) {
      throw new Error(`Failed to fetch ${endpoint} - status ${res.status}`);
    }
    return await res.json();
  } catch (err) {
    console.error("fetchData error:", err);
    return null;
  }
}

// POST helper
export async function postData(endpoint, payload) {
  try {
    const res = await fetch(`${BASE_URL}/${endpoint}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    if (!res.ok) throw new Error(`Failed POST ${endpoint}`);
    return await res.json();
  } catch (err) {
    console.error("postData error:", err);
    return null;
  }
}

/*
  ----------------
  HOW TO CONNECT:
  - When backend is ready, edit BASE_URL at the top.
  - Use fetchData('notes/physics') or postData('auth/login', {email, password})
  - The backend must provide endpoints matching the usages in pages below.
*/
