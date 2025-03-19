import { FormikProps } from "formik";
import { MdInfoOutline } from "react-icons/md";
import {
  Autosuggest,
  Button,
  Grid,
  Icon,
  Input,
  Label,
  Select,
  Stack,
  useMediaQuery,
} from "@inubekit/inubekit";

import { tokens } from "@design/tokens";
import { ComponentAppearance } from "@enum/appearances";
import { getFieldState } from "@utils/forms/getFieldState";
import { IGeneralInformationEntry } from "@ptypes/payrollAgreement/payrollAgreementTab/forms/IGeneralInformationPayroll";
import { getDomainById } from "@mocks/domains/domainService.mocks";
import { DecisionModal } from "@design/modals/decisionModal";
import { IMessageModal } from "@ptypes/decisions/IMessageModal";
import { SelectCheck } from "@design/inputs/selectCheck";
import { IServerDomain } from "@ptypes/IServerDomain";
import {
  StyledContainer,
  StyledContainerFields,
  StyledFormContent,
} from "./styles";

interface IGeneralInformationPayrollFormUI {
  autosuggestValue: string;
  editDataOption: boolean;
  formik: FormikProps<IGeneralInformationEntry>;
  infoModal: IMessageModal;
  loading: boolean;
  showModal: boolean;
  valuesEqual: boolean;
  sourcesOfIncomeValues: IServerDomain[];
  onToggleInfoModalModal: () => void;
  onChangeCheck: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onButtonClick: () => void;
  onPreviousStep: () => void;
  onReset: () => void;
  onChangeSelect: (name: string, value: string) => void;
  onChangeAutosuggest: (name: string, value: string) => void;
  isDisabledButton?: boolean;
}

const GeneralInformationPayrollFormUI = (
  props: IGeneralInformationPayrollFormUI,
) => {
  const {
    formik,
    loading,
    infoModal,
    editDataOption,
    autosuggestValue,
    valuesEqual,
    isDisabledButton,
    showModal,
    sourcesOfIncomeValues,
    onChangeSelect,
    onChangeAutosuggest,
    onButtonClick,
    onReset,
    onToggleInfoModalModal,
    onChangeCheck,
    onPreviousStep,
  } = props;

  const isMobile = useMediaQuery("(max-width: 990px)");

  return (
    <StyledContainer>
      <StyledFormContent>
        <form>
          <Stack direction="column">
            <StyledContainerFields $isMobile={isMobile}>
              <Grid
                templateColumns={isMobile ? "1fr" : "repeat(2, 1fr)"}
                templateRows={isMobile ? "repeat(4, 1fr)" : "repeat(2, 1fr)"}
                width="100%"
                gap={tokens.spacing.s250}
              >
                <Input
                  name="namePayroll"
                  id="namePayroll"
                  label="Nombre de nómina"
                  placeholder="Nombre de nómina de convenio"
                  type="text"
                  size="compact"
                  value={formik.values.namePayroll}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  status={getFieldState(formik, "namePayroll")}
                  message={formik.errors.namePayroll}
                  fullwidth
                />

                <Select
                  disabled={false}
                  id="typePayroll"
                  name="typePayroll"
                  label="Tipo de nómina de convenio"
                  placeholder="Selecciónalo de la lista"
                  onChange={onChangeSelect}
                  options={getDomainById("typePayroll")}
                  size="compact"
                  value={formik.values.typePayroll ?? ""}
                  fullwidth
                  message={formik.errors.typePayroll}
                  invalid={formik.errors.typePayroll ? true : false}
                />

                <SelectCheck
                  label="Fuentes de ingreso"
                  name="sourcesOfIncome"
                  id="sourcesOfIncome"
                  placeholder="Selecciona opciones"
                  status={getFieldState(formik, "sourcesOfIncome")}
                  message={formik.errors.sourcesOfIncome}
                  invalid={formik.errors.sourcesOfIncome ? true : false}
                  fullwidth={true}
                  options={sourcesOfIncomeValues}
                  value={formik.values.sourcesOfIncome}
                  onBlur={formik.handleBlur}
                  onChangeCheck={onChangeCheck}
                  size="compact"
                  onChange={formik.handleChange}
                />

                <Stack direction="column">
                  <Stack
                    alignItems="center"
                    gap={tokens.spacing.s050}
                    margin={`${tokens.spacing.s0} ${tokens.spacing.s0} ${tokens.spacing.s075} ${tokens.spacing.s200}`}
                  >
                    <Label htmlFor="applicationDaysPayroll" size="small">
                      Días para determinar la fecha de aplicación
                    </Label>
                    <Icon
                      icon={<MdInfoOutline />}
                      appearance={ComponentAppearance.PRIMARY}
                      onClick={onToggleInfoModalModal}
                      size="12px"
                      cursorHover
                    />
                  </Stack>
                  <Autosuggest
                    label=""
                    name="applicationDaysPayroll"
                    id="applicationDaysPayroll"
                    placeholder="Escribe o selecciona # de días"
                    value={autosuggestValue}
                    onChange={onChangeAutosuggest}
                    options={getDomainById("daysForApplication")}
                    onBlur={formik.handleBlur}
                    size="compact"
                    fullwidth
                    message={formik.errors.applicationDaysPayroll}
                    invalid={
                      formik.errors.applicationDaysPayroll ? true : false
                    }
                  />
                </Stack>
              </Grid>
            </StyledContainerFields>
          </Stack>
        </form>
      </StyledFormContent>
      <Stack justifyContent="flex-end" gap={tokens.spacing.s250}>
        <Button
          fullwidth={isMobile}
          onClick={editDataOption ? onReset : onPreviousStep}
          variant="outlined"
          appearance={ComponentAppearance.GRAY}
          disabled={editDataOption ? valuesEqual : false}
        >
          {editDataOption ? "Cancelar" : "Anterior"}
        </Button>

        <Button
          fullwidth={isMobile}
          onClick={onButtonClick}
          disabled={
            editDataOption ? isDisabledButton && !loading : isDisabledButton
          }
          loading={loading}
          appearance={ComponentAppearance.PRIMARY}
        >
          {editDataOption ? "Guardar" : "Siguiente"}
        </Button>
      </Stack>
      {showModal && (
        <DecisionModal
          portalId="portal"
          title={infoModal.title}
          description={infoModal.description}
          actionText={infoModal.actionText}
          withIcon
          withCancelButton={false}
          icon={<MdInfoOutline />}
          appearance={ComponentAppearance.PRIMARY}
          onCloseModal={onToggleInfoModalModal}
          onClick={onToggleInfoModalModal}
        />
      )}
    </StyledContainer>
  );
};

export { GeneralInformationPayrollFormUI };
