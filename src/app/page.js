// src/app/page.js
// Homepage for the portal
import Link from "next/link";
import "./page.css";

export default function HomePage() {
  return (
    <main className="container home">
      <section className="hero">
        <h1>Ace Jupeb Learning Portal</h1>
        <p>Prepare for JUPEB — notes, quizzes, and past questions for Math, Physics, Chemistry & Biology.</p>
        <div className="cta">
          <Link href="/login"><button>Login</button></Link>
        </div>
      </section>

      <section className="features">
        <div className="card">Notes — organized by subject</div>
        <div className="card">Quizzes — timed practice</div>
        <div className="card">Past Questions — real JUPEB papers</div>
      </section>
    </main>
  );
}
