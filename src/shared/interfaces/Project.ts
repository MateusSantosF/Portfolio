import { ReactElement } from "react";

export interface IProject {
  id: string;
  name: string;
  logo?: string;
  shortDescription: string;
  fullDescription: string;
  alias?: string;
  image?: string;
  url?: string;
  github?: string;
  images?: Array<{ title?: string; url: string }>;
  technologies?: Array<ITechnologie>;
  partners?: Array<IPartner>;
}

export interface ITechnologie {
  name: string;
  url: string;
  icon: IIcon;
}

export interface IIcon {
  alt?: string;
  source: ReactElement;
}

export interface IPartner {
  name: string;
  url: string;
  job: string;
}