import { FormikValues } from "formik";
import { useMediaQuery } from "@inubekit/hooks";
import { Button } from "@inubekit/button";
import { Stack } from "@inubekit/stack";
import { Textarea } from "@inubekit/textarea";
import { Select } from "@inubekit/select";

import { tokens } from "@design/tokens";
import { getFieldState } from "@utils/forms";
import { ComponentAppearance } from "@ptypes/aparences.types";
import { StyledContainer } from "./styles";

interface IGeneralInformationFormUI {
  formik: FormikValues;
  nameSelected: string;
  withNextButton?: boolean;
  handleNextStep: () => void;
  onChange: (name: string, value: string) => void;
  loading?: boolean;
}

function GeneralInformationFormUI(props: IGeneralInformationFormUI) {
  const {
    formik,
    loading,
    withNextButton,
    nameSelected,
    handleNextStep,
    onChange,
  } = props;

  const isMobile = useMediaQuery("(max-width: 700px)");

  return (
    <form>
      <Stack direction="column" gap={tokens.spacing.s300}>
        <StyledContainer $isMobile={isMobile}>
          <Stack direction="column" width="100%" gap={tokens.spacing.s250}>
            <Stack
              direction={isMobile ? "column" : "row"}
              gap={tokens.spacing.s250}
            >
              <Select
                disabled={false}
                fullwidth={true}
                id="nameDestination"
                name="nameDestination"
                label="Nombre del destino"
                placeholder="Por favor, escribe algo"
                onChange={onChange}
                options={[]}
                required={false}
                size="compact"
                value={nameSelected}
              />
            </Stack>

            <Textarea
              label="Descripción"
              placeholder="Describe el destino."
              name="description"
              id="description"
              value={formik.values.description}
              maxLength={1000}
              disabled={loading}
              status={getFieldState(formik, "description")}
              message={formik.errors.description}
              fullwidth={true}
              required={true}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
          </Stack>
        </StyledContainer>

        {withNextButton && (
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
              onClick={handleNextStep}
              disabled={loading ?? !formik.isValid}
              appearance={ComponentAppearance.PRIMARY}
            >
              Siguiente
            </Button>
          </Stack>
        )}
      </Stack>
    </form>
  );
}

export { GeneralInformationFormUI };
