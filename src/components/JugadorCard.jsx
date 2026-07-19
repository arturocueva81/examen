import "./JugadorCard.css";

function JugadorCard({ jugador }) {
    return (
        <article className="jugador-card">
            <img
                className="jugador-card-imagen"
                src={jugador.photoUrl}
                alt={`Foto de ${jugador.name}`}
                onError={(e) => { e.target.src = "https://placehold.co/150?text=Sin+foto"; }}
            />
            <h2>{jugador.name}</h2>
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

export default JugadorCard;