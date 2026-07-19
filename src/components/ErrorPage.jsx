    import "./ErrorPage.css";

    function ErrorPage({ mensaje }) {
    return (
        <div className="error-page">
        <span className="error-icono">⚠️</span>
        <h2>Error de conexión</h2>
        <p>No se pudo conectar con la API de jugadores.</p>
        <p className="error-detalle">{mensaje}</p>
        <button onClick={() => window.location.reload()}>
            🔄 Reintentar
        </button>
        </div>
    );
    }

    export default ErrorPage;