import Navbar from "~/components/Navbar";
import type { Route } from "./+types/home";

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
        <div className="page-heading">
          <h1>Stay Ahead with AI-Powered Tracking</h1>
          <h2>AI-Powered Reviews Made Simple</h2>
        </div>
      </section>
    </main>
  );
}
