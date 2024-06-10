import { Link } from "react-router-dom";

function About() {
  return (
    <section className="min-h-[50lvh] md:px-6 pb-12">
      <h2 className="pt-6 text-3xl font-bold" id="about">
        Sobre mim
      </h2>
      <section className="flex flex-col lg:flex-row gap-3 md:gap-12 md:items-center justify-between">
        <div className="flex-1 min-w-[50%] pt-6 ">
          <p className="text-lg leading-relaxed">
            Desenvolvedor{" "}
            <span className="font-bold">Pleno Fullstack .NET</span> na <Link className="font-bold italic text-gray-700" to="https://bnpsolucoes.com.br/">BNP Soluções em TI</Link>, com
            ampla experiência em
            <span className="font-bold">
              {" "}
              CSharp, TypeScript
            </span>
            e serviços em nuvem do <span className="font-bold">Azure</span>. Focado na construção de soluções
            robustas e eficientes para a web. Possuo uma sólida formação em{" "}
            <span className="font-bold">Ciência da Computação</span> e tenho um
            histórico de sucesso no desenvolvimento de{" "}
            <span className="font-bold">
              APIs, Websites com foco em acessibilidade e observabilidade
            </span>
            , além de <span className="font-bold">chatbots</span>.
          </p>
          <p className="text-lg leading-relaxed pt-3">
            Trabalho alinhado com{" "}
            <span className="font-bold">práticas ágeis</span> e tenho uma forte
            aderência a <span className="font-bold">padrões de código</span>.
            Comunicador eficaz e organizado, tenho interesse em{" "}
            <span className="font-bold">arquitetura de software</span> e
            desafios complexos.
          </p>
          <p className="text-lg leading-relaxed pt-3">
            Minha <span className="font-bold">missão</span> é entregar{" "}
            <span className="font-bold">
              soluções de software de alta qualidade{" "}
            </span>
            e trabalhar em conjunto com{" "}
            <span className="font-bold">empresas e clientes</span> para
            aprimorar seus processos de desenvolvimento e ferramentas.
          </p>
      
        </div>
        <blockquote className="flex-1 pt-6 text-sm md:text-2xl italic px-12">
            "O único limite para a nossa compreensão de amanhã são as nossas
            dúvidas de hoje."
            <cite>— Franklin D. Roosevelt </cite>
          </blockquote>
      </section>
    </section>
  );
}

export default About;
