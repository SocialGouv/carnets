const Logo = ({ big = false }: { big?: boolean }) => (
  <div className={`logo${big ? " big" : ""}`}>
    Ministères
    <br />
    Sociaux
  </div>
)

export default Logo
