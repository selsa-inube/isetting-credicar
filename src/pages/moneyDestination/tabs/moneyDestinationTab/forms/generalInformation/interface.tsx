import { MdCategory } from "react-icons/md";
import { FormikProps } from "formik";
import { useMediaQuery } from "@inubekit/hooks";
import { Button } from "@inubekit/button";
import { Stack } from "@inubekit/stack";
import { Textarea } from "@inubekit/textarea";
import { Text } from "@inubekit/text";
import { Autosuggest } from "@inubekit/autosuggest";

import { tokens } from "@design/tokens";
import { getFieldState } from "@utils/forms";
import { ComponentAppearance } from "@ptypes/aparences.types";
import { IServerDomain } from "@ptypes/domain.types";
import {
  normalizeCodeDestination,
  normalizeDestination,
  normalizeIconDestination,
} from "@utils/destination";
import {
  StyledContainer,
  StyledContainerFields,
  StyledFormContent,
  StyledIcon,
} from "./styles";
import { IGeneralInformationEntry } from "./types";
import { IEnumeratorsMoneyDestination } from "../../types";

interface IGeneralInformationFormUI {
  formik: FormikProps<IGeneralInformationEntry>;
  enumData: IEnumeratorsMoneyDestination[];
  optionsDestination: IServerDomain[];
  onNextStep: () => void;
  onChange: (name: string, value: string) => void;
  loading?: boolean;
  autosuggestValue: string;
}

function GeneralInformationFormUI(props: IGeneralInformationFormUI) {
  const {
    formik,
    loading,
    optionsDestination,
    enumData,
    onNextStep,
    onChange,
    autosuggestValue,
  } = props;

  const isMobile = useMediaQuery("(max-width: 990px)");

  const nameEnum =
    normalizeCodeDestination(formik.values.nameDestination || "")?.code || "";

  const data = normalizeDestination(enumData, nameEnum);

  return (
    <StyledContainer>
      <StyledFormContent>
        <form>
          <Stack direction="column" gap={tokens.spacing.s300}>
            <StyledContainerFields $isMobile={isMobile}>
              <Stack direction="column" width="100%" gap={tokens.spacing.s250}>
                <Stack
                  direction={isMobile ? "column" : "row"}
                  gap={tokens.spacing.s250}
                >
                  <Stack width={isMobile ? "100%" : "350px"}>
                    <Autosuggest
                      label="Nombre del destino"
                      name="nameDestination"
                      id="nameDestination"
                      placeholder="Por favor, escribe algo"
                      value={autosuggestValue}
                      onChange={onChange}
                      options={optionsDestination}
                      onBlur={formik.handleBlur}
                      disabled={false}
                      required={false}
                      size="compact"
                      fullwidth
                    />
                  </Stack>
                  <Stack
                    direction="column"
                    gap={tokens.spacing.s050}
                    alignItems="center"
                  >
                    <Text type="label" size="small" weight="bold">
                      Icono
                    </Text>
                    <StyledIcon $isMobile={isMobile}>
                      {normalizeIconDestination(data?.value ?? "")?.icon || (
                        <MdCategory size={24} />
                      )}
                    </StyledIcon>
                  </Stack>
                </Stack>

                <Textarea
                  label="Descripción"
                  placeholder="Describe el destino."
                  name="description"
                  id="description"
                  value={data?.description ?? formik.values.description}
                  maxLength={1000}
                  disabled={loading}
                  status={getFieldState(formik, "description")}
                  message={formik.errors.description}
                  fullwidth
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                />
              </Stack>
            </StyledContainerFields>
          </Stack>
        </form>
      </StyledFormContent>
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
