// src/app/student/quiz/page.js
// Simple quiz chooser: choose subject then start a small demo quiz

"use client";
import React, { useState } from "react";

const demoQuestions = {
  Mathematics: [
    { q: 'What is 2 + 2?', options: ['3','4','5'], answer: 1 },
  ],
  Physics: [
    { q: 'Unit of force?', options: ['Joule','Newton','Watt'], answer: 1 },
  ],
  Chemistry: [
    { q: 'pH < 7 means?', options: ['Basic','Acidic','Neutral'], answer: 1 },
  ],
  Biology: [
    { q: 'Basic unit of life?', options: ['Atom','Cell','Organ'], answer: 1 },
  ],
};

export default function QuizPage() {
  const [subject, setSubject] = useState('Mathematics');
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const questions = demoQuestions[subject];

  const handleAnswer = (i) => {
    if (i === questions[index].answer) setScore((s) => s + 1);
    if (index + 1 < questions.length) setIndex(index + 1);
    else setFinished(true);
  };

  return (
    <div className="container">
      <h2>Quizzes</h2>
      <div style={{ marginBottom: 12 }}>
        <label>Choose subject:</label>
        <select value={subject} onChange={(e) => { setSubject(e.target.value); setIndex(0); setScore(0); setFinished(false); }}>
          {Object.keys(demoQuestions).map((s) => <option key={s} value={s}>{s}</option>)}
        </select>
      </div>

      {!finished ? (
        <div>
          <p><strong>Q:</strong> {questions[index].q}</p>
          <div style={{ display: 'flex', gap: 8 }}>
            {questions[index].options.map((opt, i) => (
              <button key={i} onClick={() => handleAnswer(i)}>{opt}</button>
            ))}
          </div>
        </div>
      ) : (
        <div>
          <p>Finished! Score: {score} / {questions.length}</p>
          <button onClick={() => { setIndex(0); setScore(0); setFinished(false); }}>Try again</button>
        </div>
      )}
    </div>
  );
}
