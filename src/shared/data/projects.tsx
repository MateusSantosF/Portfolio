import { SiCsharp } from "react-icons/si";
import { IProject } from "../interfaces/Project";
import { RiNextjsFill } from "react-icons/ri";
import { FaPython } from "react-icons/fa";

export const projects: IProject[] = [
  {
    name: "SMAC",
    shortDescription: "Sistema de Monitoramento e Avaliação da Cultura.",
    fullDescription: "",
    alias: "SMAC",
    url: "https://projeto-beta.example.com",
    detailsUrl: "https://projeto-beta.example.com/detalhes",
    images: [
      {
        title: "Página Principal",
        url: "https://via.placeholder.com/150/FF0000/FFFFFF?text=Principal+Beta",
      },
      {
        title: "Carrinho de Compras",
        url: "https://via.placeholder.com/150/FF0000/FFFFFF?text=Carrinho+Beta",
      },
    ],
    technologies: [
      {
        name: "C#",
        url: "https://dotnet.microsoft.com/pt-br/languages/csharp",
        icon: {
          source: <SiCsharp size={26} />,
          alt: "CSharp Logo",
        },
      },
      {
        name: "NextJS",
        url: "https://nextjs.org/",
        icon: {
          source: <RiNextjsFill size={29} />,
          alt: "NextJs Logo",
        },
      },
    ],
    partners: [
      {
        name: "Commerce Solutions",
        url: "https://commercesolutions.example.com",
        job: "Integração de Pagamentos",
      },
      {
        name: "Translators Inc.",
        url: "https://translatorsinc.example.com",
        job: "Tradução e Localização",
      },
    ],
  },
  {
    name: "Agenda Viva SP",
    shortDescription: "Maior plataforma de eventos do Estado de São Paulo.",
    fullDescription: "",
    alias: "VIVA SP",
    url: "https://projeto-alpha.example.com",
    detailsUrl: "https://projeto-alpha.example.com/detalhes",
    github: "https://github.com/exemplo/projeto-alpha",
    images: [
      {
        title: "Dashboard",
        url: "https://via.placeholder.com/150/0000FF/808080?text=Dashboard+Alpha",
      },
      {
        title: "Relatórios",
        url: "https://via.placeholder.com/150/0000FF/808080?text=Relatórios+Alpha",
      },
    ],
    technologies: [
      {
        name: "C#",
        url: "https://dotnet.microsoft.com/pt-br/languages/csharp",
        icon: {
          source: <SiCsharp size={26} />,
          alt: "CSharp Logo",
        },
      },
      {
        name: "NextJS",
        url: "https://nextjs.org/",
        icon: {
          source: <RiNextjsFill size={29} />,
          alt: "NextJs Logo",
        },
      },
    ],
    partners: [
      {
        name: "TechCorp",
        url: "https://techcorp.example.com",
        job: "Desenvolvimento de Backend",
      },
      {
        name: "DesignExperts",
        url: "https://designexperts.example.com",
        job: "UI/UX Design",
      },
    ],
  },
  {
    name: "Turistic Guide AI",
    shortDescription:
      "Chatbot baseado em GPT-4 utilizando RAG para recomendar eventos do Agenda Viva SP.",
    fullDescription: "",
    alias: "AI GUIDE",
    url: "https://projeto-gamma.example.com",
    detailsUrl: "https://projeto-gamma.example.com/detalhes",
    github: "https://github.com/exemplo/projeto-gamma",
    images: [
      {
        title: "Página de Cursos",
        url: "https://via.placeholder.com/150/00FF00/000000?text=Cursos+Gamma",
      },
      {
        title: "Área de Estudante",
        url: "https://via.placeholder.com/150/00FF00/000000?text=Estudante+Gamma",
      },
    ],
    technologies: [
      {
        name: "C#",
        url: "https://dotnet.microsoft.com/pt-br/languages/csharp",
        icon: {
          source: <FaPython size={26} />,
          alt: "CSharp Logo",
        },
      },
    ],
    partners: [
      {
        name: "EduTech",
        url: "https://edutech.example.com",
        job: "Desenvolvimento de Conteúdo",
      },
      {
        name: "CertifyNow",
        url: "https://certifynow.example.com",
        job: "Certificação e Avaliações",
      },
    ],
  },
];
