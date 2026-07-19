// ─────────────────────────────────────────────
// App.jsx
// Componente raíz de la aplicación.
// Es el punto de entrada que organiza y conecta
// todos los componentes entre sí.
// Responsabilidades:
//   1. Mantener el estado global del total de jugadores
//   2. Pasar props a los componentes hijos
// ─────────────────────────────────────────────
import { useState } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import JugadorList from "./components/JugadorList";
import Footer from "./components/Footer";

function App() {

  // totalJugadores: estado que almacena cuántos jugadores
  // devolvió la API. Inicia en 0 mientras carga.
  // setTotalJugadores: función que actualiza ese número,
  // se pasa a JugadorList para que lo llame cuando termine de cargar
  const [totalJugadores, setTotalJugadores] = useState(0);

  return (
    // Fragment (<>) agrupa los componentes sin agregar
    // un elemento HTML extra al DOM
    <>
      {/* Navbar recibe totalJugadores para mostrar el contador */}
      <Navbar totalJugadores={totalJugadores} />

      {/* Header es estático, no necesita props */}
      <Header />

      {/* JugadorList recibe setTotalJugadores como onCargados
          para informar a App cuántos jugadores llegaron de la API */}
      <JugadorList onCargados={setTotalJugadores} />

      {/* Footer es estático, no necesita props */}
      <Footer />
    </>
  );
}

// Se exporta para ser usado en main.jsx
export default App;