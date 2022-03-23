export function Navbar() {
  return (
    <div className='navbar'>
      <div
        style={{
          padding: "12px",
          color: "white",
          textAlign: "center",
          background: "#333",
        }}
      >
        <p
          style={{
            fontWeight: "bold",
            fontSize: "16px",
            margin: 0,
          }}
        >
          Viajar! - Your friendly neighbourhood travel agency
        </p>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <p>✈️</p>
        <div className='navbarRight' style={{ display: "flex" }}>
          <p className='navbarIcon'>🗓</p>
          <p className='navbarIcon'>♥</p>
          <p className='navbarIcon'>🧙</p>
        </div>
      </div>
    </div>
  );
}
