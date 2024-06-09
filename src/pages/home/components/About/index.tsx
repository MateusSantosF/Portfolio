function About() {
  return (
    <section className="min-h-[50lvh] px-6 pb-12">
      <h2 className="pt-6 text-3xl font-bold" id="about">
        Sobre mim
      </h2>
      <section className="flex justify-between">
        <div className="md:max-w-[50%] pt-6 ">
          <p className="text-lg leading-relaxed text-balance">
            Desenvolvedor{" "}
            <span className="font-bold">Pleno Fullstack .NET</span> com
            experiência em
            <span className="font-bold">
              {" "}
              Next.js, TypeScript, Node.js, Python
            </span>
            , e uma gama de ferramentas Azure, focado na construção de soluções
            robustas e eficientes para a web. Possuo uma sólida formação em{" "}
            <span className="font-bold">Ciência da Computação</span> e tenho um
            histórico de sucesso no desenvolvimento de{" "}
            <span className="font-bold">
              APIs REST, Websites com foco em acessibilidade e observabilidade
            </span>
            , além de <span className="font-bold">chatbots</span>.
          </p>
          <p className="text-lg leading-relaxed pt-3 text-balance">
            Trabalho alinhado com{" "}
            <span className="font-bold">práticas ágeis</span> e uma forte
            aderência a <span className="font-bold">padrões de código</span>.
            Comunicador eficaz e organizado, tenho interesse em{" "}
            <span className="font-bold">arquitetura de software</span> e
            desafios complexos.
          </p>
          <p className="text-lg leading-relaxed pt-3 text-balance">
            Minha <span className="font-bold">missão</span> é entregar{" "}
            <span className="font-bold">
              soluções de software de alta qualidade{" "}
            </span>
            e trabalhar em conjunto com{" "}
            <span className="font-bold">empresas e clientes</span> para
            aprimorar seus processos de desenvolvimento e ferramentas.
          </p>
          <blockquote className="pt-6 text-sm italic">
            "O único limite para a nossa compreensão de amanhã são as nossas
            dúvidas de hoje."
            <cite>— Franklin D. Roosevelt </cite>
          </blockquote>
        </div>
      </section>
    </section>
  );
}

export default About;
