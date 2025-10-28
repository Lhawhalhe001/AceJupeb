// src/app/student/notes/page.js
// Notes list page showing the 4 subjects and listing resources per subject

"use client";
import React, { useEffect, useState } from "react";
import { fetchData } from "../../../utils/api";

export default function NotesPage() {
  const subjects = ["Mathematics", "Physics", "Chemistry", "Biology"];
  const [notes, setNotes] = useState({});

  useEffect(() => {
    async function load() {
      // -------------------------
      // Example API usage:
      // const data = await fetchData('notes');
      // Expect data format: { Mathematics: [{id, title, url}], Physics: [...], ... }
      // -------------------------

      // Local demo data until backend is connected
      const demo = {
        Mathematics: [{ id: 1, title: 'Algebra basics', url: '/sample-notes/algebra.pdf' }],
        Physics: [{ id: 2, title: 'Mechanics notes', url: '/sample-notes/mechanics.pdf' }],
        Chemistry: [{ id: 3, title: 'Organic introduction', url: '/sample-notes/organic.pdf' }],
        Biology: [{ id: 4, title: 'Cell biology', url: '/sample-notes/cell.pdf' }],
      };
      setNotes(demo);
    }
    load();
  }, []);

  return (
    <div className="container">
      <h2>Notes</h2>
      {subjects.map((s) => (
        <section key={s} style={{ marginBottom: 20 }}>
          <h3>{s}</h3>
          <ul>
            {(notes[s] || []).map((n) => (
              <li key={n.id}>
                <a href={n.url} target="_blank" rel="noreferrer">{n.title}</a>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
