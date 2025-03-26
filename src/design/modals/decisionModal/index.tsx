import { IIconAppearance, useMediaQuery } from "@inubekit/inubekit";
import { ComponentAppearance } from "@enum/appearances";
import { DecisionModalUI } from "./interface";
import { mediaQueryMobile } from "@config/environment";

interface IDecisionModal {
  actionText: string;
  description: string;
  portalId: string;
  title: string;
  onClick: () => void;
  onCloseModal: () => void;
  appearance?: IIconAppearance;
  icon?: React.JSX.Element;
  isLoading?: boolean;
  withIcon?: boolean;
  withCancelButton?: boolean;
  moreDetails?: string;
}

const DecisionModal = (props: IDecisionModal) => {
  const {
    actionText,
    icon = <></>,
    withIcon = false,
    description,
    isLoading = false,
    portalId,
    title,
    appearance = ComponentAppearance.PRIMARY,
    withCancelButton = true,
    moreDetails,
    onClick,
    onCloseModal,
  } = props;

  const isMobile = useMediaQuery(mediaQueryMobile);

  const node = document.getElementById(portalId);

  if (!node) {
    throw new Error(
      "The portal node is not defined. This can occur when the specific node used to render the portal has not been defined correctly.",
    );
  }

  return (
    <DecisionModalUI
      actionText={actionText}
      appearance={appearance}
      description={description}
      icon={icon}
      isLoading={isLoading}
      onClick={onClick}
      onCloseModal={onCloseModal}
      isMobile={isMobile}
      title={title}
      withIcon={withIcon}
      withCancelButton={withCancelButton}
      moreDetails={moreDetails}
      node={node}
    />
  );
};

export { DecisionModal };
export type { IDecisionModal };
