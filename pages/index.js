import React from "react";
import Link from "next/link";

import Layout from "../src/components/Layout";
import { useFetchUser, useUser } from "../src/lib/user";

export default function Home() {
  const { user, loading } = useFetchUser();

  return (
    <Layout user={user} loading={loading}>
      <h3>Carnet de bord des startups @SocialGouv</h3>

      {loading && <p>Chargement....</p>}

      {!loading && !user && (
        <React.Fragment>
          <p>
            Pour poster une nouvelle,{" "}
            <Link href="/api/login" passHref>
              <a>connectez-vous</a>
            </Link>
          </p>
        </React.Fragment>
      )}
      {user && (
        <div style={{ marginTop: 40 }}>
          <h4>Bienvenue {user.name}</h4>
          <Link href="/publish">
            <button className="btn btn-primary">Publier une nouvelle</button>
          </Link>
        </div>
      )}
    </Layout>
  );
}
