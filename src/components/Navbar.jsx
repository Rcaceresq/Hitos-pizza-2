const formatCLP = (value) => Number(value).toLocaleString("es-CL")

const Navbar = () => {
  const total = 25000
  const token = false

  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark px-3">
      <a className="navbar-brand fw-bold" href="#">
        🍕 Pizzería Mamma Mía
      </a>

      <div className="ms-auto d-flex gap-2">
        <button className="btn btn-outline-light">🍕 Home</button>
        <button className="btn btn-warning">
          🛒 Total: ${formatCLP(total)}
        </button>

        {token ? (
          <>
            <button className="btn btn-outline-light">🔓 Profile</button>
            <button className="btn btn-outline-light">🔒 Logout</button>
          </>
        ) : (
          <>
            <button className="btn btn-outline-light">🔐 Login</button>
            <button className="btn btn-outline-light">🔐 Register</button>
          </>
        )}
      </div>
    </nav>
  )
}

export default Navbar