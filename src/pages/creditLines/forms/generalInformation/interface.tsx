import { FormikProps } from "formik";
import {
  Stack,
  useMediaQuery,
  Textarea,
  Input,
  Button,
} from "@inubekit/inubekit";

import { tokens } from "@design/tokens";
import { ComponentAppearance } from "@enum/appearances";
import { getFieldState } from "@utils/forms/getFieldState";
import { IGeneralInformationEntry } from "@ptypes/creditLines/forms/IGeneralInformationEntry";
import { StyledContainer, StyledContainerFields } from "./styles";

interface IGeneralInformationFormUI {
  formik: FormikProps<IGeneralInformationEntry>;
  onNextStep: () => void;
  loading?: boolean;
}

function GeneralInformationFormUI(props: IGeneralInformationFormUI) {
  const {
    formik,
    loading,

    onNextStep,
  } = props;

  const isMobile = useMediaQuery("(max-width: 990px)");

  return (
    <StyledContainer>
      <form>
        <Stack direction="column" gap={tokens.spacing.s300}>
          <StyledContainerFields $isMobile={isMobile}>
            <Stack direction="column" width="100%" gap={tokens.spacing.s250}>
              <Stack
                direction={isMobile ? "column" : "row"}
                gap={tokens.spacing.s250}
              >
                <Stack width={isMobile ? "100%" : "350px"}>
                  <Input
                    name="nameCreditLine"
                    id="nameCreditLine"
                    label="Nombre"
                    placeholder="Nombre de la línea de crédito"
                    type="text"
                    size="compact"
                    value={formik.values.nameCreditLine}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    status={getFieldState(formik, "nameCreditLine")}
                    message={formik.errors.nameCreditLine}
                    fullwidth
                  />
                </Stack>
              </Stack>

              <Textarea
                label="descripción"
                placeholder="Describe la línea de crédito."
                name="descriptionCreditLine"
                id="descriptionCreditLine"
                value={formik.values.descriptionCreditLine}
                maxLength={1000}
                disabled={loading}
                status={getFieldState(formik, "descriptionCreditLine")}
                message={formik.errors.descriptionCreditLine}
                fullwidth
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
              />
            </Stack>
          </StyledContainerFields>
        </Stack>
      </form>
      <Stack justifyContent="flex-end" gap={tokens.spacing.s250}>
        <Button
          fullwidth={isMobile}
          onClick={() => formik.resetForm()}
          appearance={ComponentAppearance.GRAY}
        >
          Cancelar
        </Button>

        <Button
          fullwidth={isMobile}
          onClick={onNextStep}
          disabled={loading ?? !formik.isValid}
          appearance={ComponentAppearance.PRIMARY}
        >
          Siguiente
        </Button>
      </Stack>
    </StyledContainer>
  );
}

export { GeneralInformationFormUI };
