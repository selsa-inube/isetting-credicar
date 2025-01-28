import { FormikProps } from "formik";
import {
  Button,
  Divider,
  Select,
  Stack,
  Text,
  useMediaQuery,
} from "@inubekit/inubekit";

import { getDomainById } from "@mocks/domains/domainService.mocks";
import { OptionsPropectCredit } from "@design/data/optionsPropectCredit";
import { IEntry } from "@design/data/optionsPropectCredit/types";
import {
  StyledContainer,
  StyledContainerFields,
} from "@design/forms/creditProspect/styles";
import { tokens } from "@design/tokens";
import { ComponentAppearance } from "@enum/appearances";
import { ICreditProspectEntry } from "@design/forms/creditProspect/types";

interface ICreditProspectFormUI {
  formik: FormikProps<ICreditProspectEntry>;
  entries: IEntry[];
  additionalDebtorsField: boolean;
  onNextStep: () => void;
  onPreviousStep: () => void;
  onChange: (name: string, value: string) => void;
  onToggle: (id: string) => void;
  isFormValid: boolean;
  loading?: boolean;
}

function CreditProspectFormUI(props: ICreditProspectFormUI) {
  const {
    formik,
    loading,
    entries,
    additionalDebtorsField,
    isFormValid,
    onNextStep,
    onPreviousStep,
    onChange,
    onToggle,
  } = props;

  const isMobile = useMediaQuery("(max-width: 990px)");

  return (
    <StyledContainer>
      <form>
        <Stack direction="column" gap={tokens.spacing.s300}>
          <StyledContainerFields $isMobile={isMobile}>
            <Stack direction="column" gap={tokens.spacing.s250}>
              {entries.map((entry) => (
                <Stack
                  direction="column"
                  key={entry.id}
                  gap={tokens.spacing.s250}
                >
                  <OptionsPropectCredit entry={entry} onChange={onToggle} />
                  <Divider dashed />
                </Stack>
              ))}

              <Text size="medium">
                ¿Cuál es la cantidad máxima de deudores que se pueden registrar?
              </Text>
              <Select
                fullwidth={isMobile ? true : false}
                disabled={!additionalDebtorsField}
                id="additionalDebtors"
                name="additionalDebtors"
                label=""
                placeholder="Seleccione una opción"
                onChange={onChange}
                options={getDomainById("additionalDebtors")}
                required={false}
                size="compact"
                value={
                  additionalDebtorsField ? formik.values.additionalDebtors : ""
                }
              />
            </Stack>
          </StyledContainerFields>
        </Stack>
      </form>
      <Stack justifyContent="flex-end" gap={tokens.spacing.s250}>
        <Button
          fullwidth={isMobile}
          onClick={onPreviousStep}
          appearance={ComponentAppearance.GRAY}
        >
          Anterior
        </Button>

        <Button
          fullwidth={isMobile}
          onClick={onNextStep}
          disabled={loading ?? !isFormValid}
          appearance={ComponentAppearance.PRIMARY}
        >
          Siguiente
        </Button>
      </Stack>
    </StyledContainer>
  );
}

export { CreditProspectFormUI };
