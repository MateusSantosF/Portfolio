import Button from "@shared/components/Button";
import { Link } from "react-router-dom";

function NotFound() {
  return <section className="h-screen flex flex-col gap-3 justify-center items-center">
    <h1 className="font-bold text-3xl text-center">Página não encontrada!</h1>
    <Button>
        <Link  to="/">Voltar ao inicio</Link>
    </Button>
  </section>;
}

export default NotFound;
