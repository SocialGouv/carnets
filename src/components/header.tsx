import Link from "next/link"

import Auth from "@/components/auth"
import Logo from "@/components/common/logo"

const Header = () => (
  <header>
    <div className="container">
      <Link href="/">
        <a>
          <Logo />
          <div className="title">
            <h1>Carnets</h1>
            <p>Carnets de bord des produits de la Fabrique Numérique</p>
          </div>
        </a>
      </Link>
      <nav>
        <Link href="/stat">
          <a>
            <i className="ri-bar-chart-fill" />
            Statistiques
          </a>
        </Link>
        <Auth />
      </nav>
    </div>
  </header>
)

export default Header
