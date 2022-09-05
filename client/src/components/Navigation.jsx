import React from 'react'
import { Link } from 'react-router-dom'
export default function Navigation() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
        <a className="navbar-brand" href="#">Sistema de ventas</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
        <li className="nav-item active">
            <Link className="nav-link" to="/">Inicio</Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link" to="/productos">Productos</Link>
        </li>
        
        <li className="nav-item">
        <Link className="nav-link" to="/clientes">Clientes</Link>
        </li>
        
        <li className="nav-item">
        <Link className="nav-link" to="/ventas">Ventas</Link>
        </li>
        
        <li className="nav-item">
            <a className="nav-link" href="#">Reportes</a>
        </li>
        </ul>
    </div>
        </div>
    </nav>
  )
}
