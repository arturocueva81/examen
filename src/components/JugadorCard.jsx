// ─────────────────────────────────────────────
// JugadorCard.jsx
// Componente de tarjeta reutilizable.
// Recibe un objeto "jugador" como prop desde JugadorList
// y muestra la información individual de cada jugador.
// ─────────────────────────────────────────────
import "./JugadorCard.css";

// jugador: prop que contiene todos los datos del jugador
// provenientes de la API (name, photoUrl, position, etc.)
function JugadorCard({ jugador }) {
    return (
        // article: elemento semántico HTML para contenido independiente
        <article className="jugador-card">

            {/* Fotografía del jugador
                - src: usa la URL de la foto que viene de la API
                - alt: texto descriptivo generado con template literal
                - onError: si la imagen falla, muestra una imagen de respaldo */}
            <img
                className="jugador-card-imagen"
                src={jugador.photoUrl}
                alt={`Foto de ${jugador.name}`}
                onError={(e) => { e.target.src = "https://placehold.co/150?text=Sin+foto"; }}
            />

            {/* Nombre completo del jugador */}
            <h2>{jugador.name}</h2>

            {/* Bloque de datos del jugador
                Cada campo accede directamente a la propiedad
                correspondiente del objeto jugador recibido como prop */}
            <div className="jugador-datos">
                <p><strong>Posición:</strong> {jugador.position}</p>
                <p><strong>Número:</strong> #{jugador.number}</p>
                <p><strong>Club:</strong> {jugador.currentClub}</p>
                <p><strong>Selección:</strong> {jugador.nationalTeam}</p>
                <p><strong>Edad:</strong> {jugador.age} años</p>
            </div>

        </article>
    );
}

// Se exporta para poder ser importado en JugadorList.jsx
export default JugadorCard;