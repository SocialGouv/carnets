import Link from "next/link"
import React from "react"

const Title = () => (
  <h1>
    <Link href="/" as="/">
      <a>Carnets</a>
    </Link>
    <small className="description">
      Carnets de bord des produits{" "}
      <a href="https://github.com/socialgouv">@SocialGouv</a>
    </small>
  </h1>
)

export default Title
