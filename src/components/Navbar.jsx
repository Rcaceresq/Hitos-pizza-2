import React from "react";

const Navbar = ({ onNavigate = () => {} }) => {
  const go = (mode) => () => onNavigate(mode);

  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark px-3">
      <a className="navbar-brand fw-bold" href="#" onClick={go("home")}>
        🍕 Pizzería Mamma Mía
      </a>

      <div className="ms-auto d-flex gap-2">
        <button className="btn btn-outline-light" onClick={go("home")}>🍕 Home</button>
        <button className="btn btn-outline-light" onClick={go("login")}>🔐 Login</button>
        <button className="btn btn-warning" onClick={go("register")}>✨ Crear cuenta</button>
      </div>
    </nav>
  );
};

export default Navbar;