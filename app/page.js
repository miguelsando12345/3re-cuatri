// Importa el CSS de Bootstrap en tu archivo de entrada principal
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./componente/navbar/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <h1>mi pagina</h1>
    </>
  );
}
