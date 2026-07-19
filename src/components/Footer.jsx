// ─────────────────────────────────────────────
// Footer.jsx
// Componente de pie de página de la aplicación.
// Es estático — no recibe props ni maneja estados.
// Muestra información del proyecto y del desarrollador.
// ─────────────────────────────────────────────
import "./Footer.css";

function Footer() {
    return (
        // footer: elemento semántico HTML para pie de página
        <footer className="footer">

            {/* Descripción de las tecnologías utilizadas */}
            <p>Catálogo de Jugadores — Desarrollado con React y Vite en VS Code</p><br />

            {/* Información del autor del proyecto */}
            <p>Desarrollado por: Arturo Javier Cueva Salazar</p>

            {/* Información de la asignatura */}
            <p>Asignatura: DESARROLLO WEB FRONTEND - Paralelo "A".</p>

        </footer>
    );
}

// Se exporta para poder ser importado en App.jsx
export default Footer;