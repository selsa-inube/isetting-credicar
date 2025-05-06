import { IIconAppearance } from "@inubekit/inubekit";
import { ComponentAppearance } from "@enum/appearances";

interface IDecisionModalUI {
  actionText: string;
  appearance: IIconAppearance;
  description: string;
  icon: React.JSX.Element;
  isLoading: boolean;
  node: HTMLElement;
  title: string;
  withIcon: boolean;
  withCancelButton: boolean;
  isMobile: boolean;
  onClick: () => void;
  onCloseModal: () => void;
  moreDetails?: string;
  sizeIcon: string;
  appearanceButton?: ComponentAppearance;
}

export type { IDecisionModalUI };
