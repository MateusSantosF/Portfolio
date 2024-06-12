import { SiAntdesign, SiCsharp, SiDocker, SiFastapi, SiMicrosoftsqlserver, SiMongodb } from "react-icons/si";
import { IProject } from "../interfaces/Project";
import { RiNextjsFill } from "react-icons/ri";
import { FaPython } from "react-icons/fa";

export const projects: IProject[] = [
  {
    id: "smac",
    name: "SMAC",
    shortDescription: "Sistema de Monitoramento e Avaliação da Cultura.",
    fullDescription: "",
    alias: "SMAC",
    url: "https://projeto-beta.example.com",
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
      {
        name: "SQL Server",
        url: "https://www.microsoft.com/pt-br/sql-server/sql-server-downloads",
        icon: {
          source: <SiMicrosoftsqlserver  size={26} />,
          alt: "SQL Server Logo",
        },
      },
    ],
    partners: [
    ],
  },
  {
    id: "agenda-viva-sp",
    name: "Agenda Viva SP",
    shortDescription: "Maior plataforma de eventos do Estado de São Paulo.",
    fullDescription: "",
    alias: "VIVA SP",
    url: "https://projeto-alpha.example.com",
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
      {
        name: "MongoDB",
        url: "https://www.mongodb.com/",
        icon: {
          source: <SiMongodb  size={26} />,
          alt: "MongoDB Logo",
        },
      },
      {
        name: "AntDesign",
        url: "https://ant.design/",
        icon: {
          source: <SiAntdesign  size={26} />,
          alt: "AntDesign Logo",
        },
      },
    ],
    partners: [
    ],
  },
  {
    id: "turistic-guide-ai",	
    name: "Turistic Guide AI",
    shortDescription:
      "Chatbot baseado em GPT-4 utilizando RAG para recomendar eventos do Agenda Viva SP.",
    fullDescription: "",
    alias: "AI GUIDE",
    url: "https://projeto-gamma.example.com",
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
        name: "Python",
        url: "https://www.python.org/",
        icon: {
          source: <FaPython size={26} />,
          alt: "Python Logo",
        },
      },
      {
        name: "FastAPI",
        url: "https://fastapi.tiangolo.com/",
        icon: {
          source: <SiFastapi size={26} />,
          alt: "FastAPI Logo",
        },
      },
      {
        name: "Docker",
        url: "https://www.docker.com/",
        icon: {
          source: <SiDocker  size={26} />,
          alt: "Docker Logo",
        },
      },
    ],
    partners: [
    ],
  },
];
