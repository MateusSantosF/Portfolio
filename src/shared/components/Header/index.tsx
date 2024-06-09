import { ElementRef, useEffect, useRef } from "react";
import Button from "../Button";
import HashLink from "../HashLink";
import { GrDocumentDownload } from "react-icons/gr";

function Header() {
  const headerRef = useRef<ElementRef<"div">>(null);

  // * Set listeners scroll event
  useEffect(() => {
    const headerEl = headerRef.current;
    if (headerEl == null) return;

    if (window.scrollY >= 30) headerEl.classList.add("shadow-lg");

    const onScroll = () => {
      const scroll = window.scrollY;

      if (scroll >= 30) {
        headerEl.classList.add("shadow-lg");
      } else if (scroll < 20) {
        headerEl.classList.remove("shadow-lg");
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [headerRef]);

  return (
    <header
      className="h-[80px] w-full flex items-center justify-center sticky top-0 bg-white"
      ref={headerRef}
    >
      <div className="flex px-6 items-center justify-between container">
        <h2 className="font-bold text-xl">
          <span className="text-2xl">F</span>erreira
        </h2>
        <nav>
          <ul className="flex gap-3 items-center font-light">
            <li>
              <HashLink href="#home">Inicio</HashLink>
            </li>
            <li>
              <HashLink href="#projects">Projetos</HashLink>
            </li>
            <li>
              <HashLink href="#about">Sobre</HashLink>
            </li>
          </ul>
        </nav>
        <div>
          <Button size="sm" color="secondary" variant="solid">
            <GrDocumentDownload  />
            Baixar CV
          </Button>
        </div>
      </div>
    </header>
  );
}
export default Header;
