import Link from "next/link";

export default function NotFound() {
  return (
    <main className="not-found">
      <h2>404</h2>
      <div>
        <p>Cette page est introuvable !</p>
        <a href="/">Retour à l&apos;accueil</a>
      </div>
    </main>
  );
}
