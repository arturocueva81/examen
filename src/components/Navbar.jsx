import "./Navbar.css";

function Navbar({ totalJugadores }) {
    return (
        <nav className="navbar">
            <div className="navbar-inner">
                <div className="navbar-logo">
                    <span className="navbar-icono">⚽</span>
                    <span>Album Panini - FIFA  Soccer PLayers</span>
                </div>
                <span className="navbar-contador">
                    {totalJugadores > 0
                        ? `${totalJugadores} jugadores listos para la gran final`
                        : "Cargando..."}
                </span>
            </div>
        </nav>
    );
}

export default Navbar;