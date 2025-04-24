import { ComponentAppearance } from "@enum/appearances";

interface IModalWrapper {
  children: React.ReactNode;
  isMobile: boolean;
  labelActionButton: string;
  labelCloseButton: string;
  labelCloseModal: string;
  portalId: string;
  title: string;
  onClick: () => void;
  appearanceButton?: ComponentAppearance;
  iconBeforeButton?: React.ReactElement;
  height?: string;
  width?: string;
  isLoading?: boolean;
  withCancelButton?: boolean;
  minHeight?: string;
  maxHeight?: string;
  onCloseModal?: () => void;
}

export type { IModalWrapper };
