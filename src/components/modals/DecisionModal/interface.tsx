import { MdClear } from "react-icons/md";
import { createPortal } from "react-dom";
import { FormikValues } from "formik";
import { Button } from "@inubekit/button";
import { useMediaQuery } from "@inubekit/hooks";
import { Stack } from "@inubekit/stack";
import { Text } from "@inubekit/text";
import { Blanket } from "@inubekit/blanket";
import { Icon } from "@inubekit/icon";
import { Textarea } from "@inubekit/textarea";
import { Divider } from "@inubekit/divider";

import { tokens } from "@design/tokens";
import { mediaQueryMobile } from "@config/environment";
import { ComponentAppearance } from "@ptypes/aparences.types";
import { StyledContainerButton, StyledModal, StyledTextarea } from "./styles";

interface IDecisionModalUI {
  actionText: string;
  comparisonData: boolean;
  description: string;
  formik: FormikValues;
  isLoading: boolean;
  justificationOfDecision: boolean;
  portalId: string;
  title: string;
  onClick: () => void;
  onCloseModal: () => void;
}

const DecisionModalUI = (props: IDecisionModalUI) => {
  const {
    actionText,
    comparisonData,
    description,
    formik,
    isLoading,
    justificationOfDecision,
    portalId,
    title,
    onCloseModal,
    onClick,
  } = props;

  const isMobile = useMediaQuery(mediaQueryMobile);
  const isMobileTextarea = useMediaQuery("(max-width: 490px)");

  const getFieldState = (formik: FormikValues, fieldName: string) => {
    if (formik.errors[fieldName]) return "invalid";
  };

  const node = document.getElementById(portalId);

  if (!node) {
    throw new Error(
      "The portal node is not defined. This can occur when the specific node used to render the portal has not been defined correctly.",
    );
  }

  return createPortal(
    <Blanket>
      <StyledModal $smallScreen={isMobile}>
        <Stack direction="column" gap={tokens.spacing.s200}>
          <Stack alignItems="center" justifyContent="space-between">
            <Text type="headline" size="small" appearance="dark">
              {title}
            </Text>
            <StyledContainerButton>
              <Button
                spacing="compact"
                appearance={ComponentAppearance.DARK}
                variant="none"
                onClick={onCloseModal}
                iconAfter={
                  <Icon
                    appearance={ComponentAppearance.DARK}
                    icon={<MdClear />}
                  />
                }
              >
                Cerrar
              </Button>
            </StyledContainerButton>
          </Stack>
          <Divider />
        </Stack>
        <Text appearance={ComponentAppearance.GRAY} type="body" size="medium">
          {description}
        </Text>

        {justificationOfDecision && (
          <StyledTextarea $smallScreen={isMobileTextarea}>
            <Textarea
              label=""
              name="justification"
              id="justification"
              placeholder="Indique la razón por la que desea realizar esta acción"
              value={formik.values.justification}
              message={formik.errors.justification}
              fullwidth
              maxLength={130}
              status={getFieldState(formik, "justification")}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
          </StyledTextarea>
        )}

        <Stack gap={tokens.spacing.s250} justifyContent="flex-end">
          <Button
            spacing="wide"
            appearance={ComponentAppearance.GRAY}
            variant="filled"
            onClick={onCloseModal}
          >
            Cancelar
          </Button>
          <Button
            spacing="wide"
            appearance={ComponentAppearance.PRIMARY}
            variant="filled"
            loading={isLoading}
            onClick={onClick}
            disabled={comparisonData || !formik.isValid}
          >
            {actionText}
          </Button>
        </Stack>
      </StyledModal>
    </Blanket>,
    node,
  );
};

export { DecisionModalUI };
export type { IDecisionModalUI };
