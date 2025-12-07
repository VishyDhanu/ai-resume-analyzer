import Navbar from "~/components/Navbar";
import type { Route } from "./+types/home";
import { resumes } from "../constants";
import ResumeCard from "~/components/ResumeCard";
import { resume } from "react-dom/server";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "AI Resume" },
    { name: "description", content: "Ace your dream job!" },
  ];
}

export default function Home() {
  return (
    <main className="bg-gradient">
      <Navbar />

      <section className="main-section">
        <div className="page-heading py-16">
          <h1>Stay Ahead with AI-Powered Tracking</h1>
          <h2>AI-Powered Reviews Made Simple</h2>
        </div>

        {resume.length > 0 && (
          <div className="resumes-section">
            {resumes.map((resume) => (
              <ResumeCard key={resume.id} resume={resume} />
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
