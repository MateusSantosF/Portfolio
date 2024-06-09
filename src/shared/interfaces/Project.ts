import { ReactElement } from "react";

export interface IProject {
  name: string;
  alias?: string;
  image?: string;
  shortDescription: string;
  fullDescription: string;
  url?: string;
  detailsUrl?: string;
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