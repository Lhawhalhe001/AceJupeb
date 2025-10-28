// src/app/admin/page.js
// Admin dashboard: generate student codes, upload notes, add quizzes and past questions.

"use client";
import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import DashboardCard from "../../components/DashboardCard";
import "../../styles/admin.css";
import { postData } from "../../utils/api";

export default function AdminDashboard() {
  const [generatedCode, setGeneratedCode] = useState(""); // store generated code locally
  const [uploadFile, setUploadFile] = useState(null);
  const [message, setMessage] = useState(""); // status messages

  const handleGenerate = async () => {
    setMessage("");
    // -----------------------
    // Preferred: backend generates and returns code
    // Example:
    // const res = await postData('admin/generate-code', { length: 8 });
    // if (res && res.code) setGeneratedCode(res.code);
    // -----------------------

    // Frontend fallback generator (temporary)
    const code = 'STU-' + Math.random().toString(36).slice(2, 8).toUpperCase();
    setGeneratedCode(code);
    setMessage('Code generated locally. Replace with backend call later.');
  };

  const handleFileChange = (e) => setUploadFile(e.target.files[0]);

  const handleUpload = async () => {
    if (!uploadFile) return setMessage('Please choose a file');
    setMessage('Uploading...');

    // -----------------------
    // Recommended: use a multipart/form-data POST to the backend
    // Example:
    // const form = new FormData();
    // form.append('file', uploadFile);
    // form.append('subject', 'physics');
    // const res = await fetch(`${BASE_URL}/admin/upload-note`, { method: 'POST', body: form });
    // -----------------------

    setTimeout(() => setMessage('Uploaded (simulated). Connect to backend upload endpoint to store files'), 800);
  };

  return (
    <div>
      <Navbar />
      <main className="container admin-page">
        <h1>Admin Dashboard</h1>

        <div className="grid">
          <DashboardCard title="Generate Student Access Code">
            <p>Generate a code each student can use to create/login into student account.</p>
            <button onClick={handleGenerate}>Generate Code</button>
            {generatedCode && <p style={{ marginTop: 8 }}><strong>Generated:</strong> {generatedCode}</p>}
            {message && <p style={{ marginTop: 8 }}>{message}</p>}

            <p style={{ marginTop: 8, fontSize: 13, color: '#666' }}>
              <strong>NOTE:</strong> When backend is ready, swap the local generator with an API call to <code>POST /admin/generate-code</code> and use the returned code.
            </p>
          </DashboardCard>

          <DashboardCard title="Upload Notes & Resources">
            <p>Upload PDF/Doc for students. Include a subject field in the upload request.</p>
            <input type="file" onChange={handleFileChange} />
            <div style={{ marginTop: 8 }}>
              <button onClick={handleUpload}>Upload File</button>
            </div>
          </DashboardCard>

          <DashboardCard title="Manage Quizzes & Past Questions">
            <p>Add quizzes (questions/options/answers) and upload past question papers here.</p>
            <button style={{ marginRight: 8 }}>Add New Quiz</button>
            <button>Add Past Questions</button>
          </DashboardCard>
        </div>
      </main>
    </div>
  );
}
