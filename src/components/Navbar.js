export function Navbar(){

  return (
    <div className="navbar">
      <p>✈️</p>
      <p style={{fontWeight: "bold", fontSize: "20px"}}>Viajar! - Your friendly neighbourhood travel agency</p>
      <div className="navbarRight">
        <p className="navbarIcon">🗓</p>
        <p className="navbarIcon">♥</p>
        <p className="navbarIcon">🧙</p>
      </div>
    </div>
  )
}