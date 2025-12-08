import Navbar from "~/components/Navbar";
import type { Route } from "./+types/home";
import { resumes } from "../constants";
import ResumeCard from "~/components/ResumeCard";
import { resume } from "react-dom/server";
import Auth from "../routes/auth";
import { usePuterStore } from "~/lib/puter";

import { useLocation } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "AI Resume" },
    { name: "description", content: "Ace your dream job!" },
  ];
}

export default function Home() {
  const { isLoading, auth } = usePuterStore();
  const location = useLocation();
  const next = location.search.split("next=")[0];

  return (
    <main className="bg-gradient">
      <Auth />
      {/* <Navbar />
      {window.puter.ai.chat()}
      <section className="main-section">
        <div className="page-heading py-10">
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
      </section> */}
    </main>
  );
}
