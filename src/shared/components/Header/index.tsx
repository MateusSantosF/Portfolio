import Button from "../Button";
import Link from "../Link";

function Header() {
  return (
    <header className="h-[80px] w-full flex items-center justify-center sticky top-0 bg-white ">
      <div className="flex px-6 items-center justify-between container">
        <div>
          Ferreira
        </div>
        <nav>
          <ul className="flex gap-3 items-center">
            <li>
            <Link to="/">Home</Link>
            </li>
            <li>
            <Link to="/projetos">Projetos</Link>
            </li>
            <li>
            <Link to="/projetos">Sobre</Link>
            </li>
          </ul>
        </nav>
        <div>
          <Button size="sm" color="secondary" variant="solid">
            Baixar CV
          </Button>
        </div>
      </div>
    </header>
  );
}
export default Header;
