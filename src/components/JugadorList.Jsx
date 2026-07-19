import { useEffect, useState } from "react";
import JugadorCard from "./JugadorCard";
import "./JugadorList.css";
import ErrorPage from "./ErrorPage";

const URL_API = "https://jugadores.up.railway.app/players";

function JugadorList({ onCargados }) {
    const [jugadores, setJugadores] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(URL_API)
            .then((response) => {
                if (!response.ok) throw new Error(`Error HTTP: ${response.status}`);
                return response.json();
            })
            .then((respuesta) => {
                setJugadores(respuesta.data);
                onCargados(respuesta.data.length);
                setCargando(false);
            })
            .catch((errorPeticion) => {
                setError(errorPeticion.message);
                setCargando(false);
            });
    }, [onCargados]);

    if (cargando) {
        return (
            <main className="jugador-list estado-contenedor">
                <div className="spinner"></div>
                <p>Cargando jugadores...</p>
            </main>
        );
    }

    if (error) {
        
        return <ErrorPage mensaje={error} />;
        
    }

    if (jugadores.length === 0) {
        return (
            <main className="jugador-list estado-contenedor">
                <p>No se encontraron jugadores.</p>
            </main>
        );
    }

    return (
        <main className="jugador-list">
            <div className="grid-jugadores">
                {jugadores.map((jugador) => (
                    <JugadorCard key={jugador.id} jugador={jugador} />
                ))}
            </div>
        </main>
    );
}

export default JugadorList;