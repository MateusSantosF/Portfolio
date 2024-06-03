import Badge from "@shared/components/Badge";
import Button from "@shared/components/Button";
import Link from "@shared/components/Link";
import { FiGithub, FiLinkedin } from "react-icons/fi";

function LandPage() {
  return (
    <section className="h-lvh px-6">
      <section className="flex flex-1 flex-wrap-reverse lg:flex-nowrap lg:items-center gap-6 h-full">
        <div className="flex w-full lg:items-start items-center flex-col gap-6">
          <Badge color="stone" value="Mateus Ferreira" />
          <h1 className="font-bold  text-5xl lg:text-6xl text-center md:text-left">
            Desenvolvedor <span className="text-violet-700">.NET</span>
          </h1>

          <p className="text-md text-gray-500 -mt-3">
            Python / React / Next.js / NodeJS / Azure Devops
          </p>
          <div className="flex gap-3">
            <Button>Meus projetos</Button>
            <Button color="secondary">Baixar CV</Button>
          </div>
          <div className="flex w-full md:w-min items-center justify-center gap-3">
            <Link
              target="_blank"
              to={"https://www.linkedin.com/in/mateusferreira-dev/"}
            >
              <div className="rounded-full cursor-pointer p-3 shadow-md hover:bg-gray-50 hover:shadow-xl">
                <FiLinkedin />
              </div>
            </Link>
            <Link target="_blank" to={"https://github.com/MateusSantosF"}>
              <div className="rounded-full cursor-pointer  p-3 shadow-md hover:bg-gray-50 hover:shadow-xl">
                <FiGithub />
              </div>
            </Link>
          </div>
        </div>
        <div className="flex w-full items-center justify-center lg:mb-24">
          <img className="object-fit rounded-full max-w-[35%] lg:max-w-[70%]" src="https://avatars.githubusercontent.com/u/62969620?v=4"/>
        </div>
      </section>
    </section>
  );
}

export default LandPage;
