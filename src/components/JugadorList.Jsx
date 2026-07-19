// ─────────────────────────────────────────────
// JugadorList.jsx
// Componente principal de la lista de jugadores.
// Es responsable de:
//   1. Consumir la API de jugadores
//   2. Manejar los estados de carga, error y datos
//   3. Informar a App.jsx cuántos jugadores se cargaron
//   4. Renderizar un JugadorCard por cada jugador recibido
// ─────────────────────────────────────────────
import { useEffect, useState } from "react";
import JugadorCard from "./JugadorCard";
import "./JugadorList.css";
import ErrorPage from "./ErrorPage";

// Endpoint de la API — se define fuera del componente
// para que no se recree en cada render
const URL_API = "https://jugadores.up.railway.app/players";

// onCargados: función recibida desde App.jsx
// que actualiza el contador del Navbar
function JugadorList({ onCargados }) {

    // Estado que almacena el arreglo de jugadores recibidos de la API
    const [jugadores, setJugadores] = useState([]);

    // Estado que indica si la petición está en proceso
    // Inicia en true porque la carga empieza inmediatamente
    const [cargando, setCargando] = useState(true);

    // Estado que almacena el mensaje de error si la API falla
    // Inicia en null porque no hay error al comenzar
    const [error, setError] = useState(null);

    // useEffect: se ejecuta una sola vez cuando el componente
    // se monta en pantalla (equivale al "al iniciar" del componente)
    useEffect(() => {
        fetch(URL_API)
            .then((response) => {
                // Si la respuesta no es exitosa, lanza un error
                if (!response.ok) throw new Error(`Error HTTP: ${response.status}`);
                // Convierte la respuesta a formato JSON
                return response.json();
            })
            .then((respuesta) => {
                // La API devuelve { data: [...], meta: {...} }
                // Solo necesitamos el arreglo "data"
                setJugadores(respuesta.data);
                // Informa a App.jsx cuántos jugadores llegaron
                // para actualizar el contador del Navbar
                onCargados(respuesta.data.length);
                setCargando(false);
            })
            .catch((errorPeticion) => {
                // Si ocurre cualquier error, lo guarda en el estado
                setError(errorPeticion.message);
                setCargando(false);
            });
    }, [onCargados]); // Solo se ejecuta de nuevo si onCargados cambia

    // ── Renderizado condicional ──────────────────

    // Mientras la API responde, muestra un spinner de carga
    if (cargando) {
        return (
            <main className="jugador-list estado-contenedor">
                <div className="spinner"></div>
                <p>Cargando jugadores...</p>
            </main>
        );
    }

    // Si ocurrió un error, redirige a la página de error
    if (error) {
        return <ErrorPage mensaje={error} />;
    }

    // Si la API respondió pero no trajo jugadores
    if (jugadores.length === 0) {
        return (
            <main className="jugador-list estado-contenedor">
                <p>No se encontraron jugadores.</p>
            </main>
        );
    }

    // Renderizado principal: recorre el arreglo de jugadores
    // y genera un JugadorCard por cada uno
    // key={jugador.id} permite a React identificar cada tarjeta
    // de forma única y optimizar el renderizado
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

// Se exporta para poder ser importado en App.jsx
export default JugadorList;