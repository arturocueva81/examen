// ─────────────────────────────────────────────
// ErrorPage.jsx
// Componente de página de error.
// Se muestra automáticamente cuando la API falla.
// Recibe el mensaje de error desde JugadorList.jsx
// y ofrece un botón para reintentar la conexión.
// ─────────────────────────────────────────────
import "./ErrorPage.css";

// mensaje: prop que contiene el texto del error
// generado por el .catch() en JugadorList.jsx
function ErrorPage({ mensaje }) {
    return (
        <div className="error-page">

            {/* Ícono visual de advertencia */}
            <span className="error-icono">⚠️</span>

            {/* Título del error */}
            <h2>Error de conexión</h2>

            {/* Descripción general del problema */}
            <p>No se pudo conectar con la API de jugadores.</p>

            {/* Detalle técnico del error recibido desde la API */}
            <p className="error-detalle">{mensaje}</p>

            {/* Botón de reintento:
                window.location.reload() recarga completamente
                la página para volver a intentar la petición */}
            <button onClick={() => window.location.reload()}>
                🔄 Reintentar
            </button>

        </div>
    );
}

// Se exporta para poder ser importado en JugadorList.jsx
export default ErrorPage;