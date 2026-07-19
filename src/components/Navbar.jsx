// ─────────────────────────────────────────────
// Navbar.jsx
// Barra de navegación principal de la aplicación.
// Recibe desde App.jsx el total de jugadores cargados
// y lo muestra como un contador en la esquina derecha.
// ─────────────────────────────────────────────
import "./Navbar.css";

// totalJugadores: prop que viene de App.jsx con la cantidad
// de jugadores recibidos desde la API
function Navbar({ totalJugadores }) {
    return (
        // nav: elemento semántico HTML para barras de navegación
        <nav className="navbar">
            <div className="navbar-inner">

                {/* Logo y nombre de la aplicación */}
                <div className="navbar-logo">
                    <span className="navbar-icono">⚽</span>
                    <span>Album Panini - FIFA Soccer Players</span>
                </div>

                {/* Contador dinámico:
                    - Si totalJugadores > 0 muestra la cantidad
                    - Mientras carga, muestra "Cargando..." */}
                <span className="navbar-contador">
                    {totalJugadores > 0
                        ? `${totalJugadores} jugadores listos para la gran final`
                        : "Cargando..."}
                </span>

            </div>
        </nav>
    );
}

// Se exporta para poder ser importado en App.jsx
export default Navbar;