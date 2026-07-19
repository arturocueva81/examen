// ─────────────────────────────────────────────
// Header.jsx
// Componente de presentación principal de la aplicación.
// No recibe props — su contenido es estático.
// Se muestra debajo del Navbar y encima de la lista de jugadores.
// ─────────────────────────────────────────────
import "./Header.css";

function Header() {
    return (
        // header: elemento semántico HTML para encabezados de sección
        <header className="header">

            {/* Ícono decorativo de la aplicación */}
            <span className="header-icono">🏆</span>

            {/* Título principal de la página */}
            <h1>Jugadores final FIFA - 2026</h1>

        </header>
    );
}

// Se exporta para poder ser importado en App.jsx
export default Header;