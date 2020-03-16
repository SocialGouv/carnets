import React from "react"
import Link from "next/link"

const Title = () => (
  <h1>
    <Link href="/" as="/">
      <a>Carnets</a>
    </Link>
    <div className="description">
      Carnets de bord des produits{" "}
      <a href="https://github.com/socialgouv">@SocialGouv</a>
    </div>
  </h1>
)

export default Title
