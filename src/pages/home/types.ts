import { INavNavigation } from "@inubekit/nav";

interface ICardData {
  id: string;
  label: string;
  description: string;
  icon: string | JSX.Element;
  url: string;
}

interface ISection {
  title: string;
  links: ILink[];
}

interface ILink {
  id: string;
  label: string;
  icon: React.ReactNode;
  path: string;
}

interface INav {
  items: INavNavigation;
  breakpoint: string;
}

export type { INav, ISection, ICardData };
