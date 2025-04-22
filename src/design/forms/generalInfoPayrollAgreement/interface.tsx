import { FormikProps } from "formik";
import { MdInfoOutline } from "react-icons/md";
import {
  Autosuggest,
  Button,
  Grid,
  Icon,
  Input,
  inube,
  Label,
  Select,
  Stack,
} from "@inubekit/inubekit";

import { IGeneralInformationEntry } from "@ptypes/payrollAgreement/payrollAgreementTab/forms/IGeneralInformationPayroll";
import { generalInfoLabels } from "@config/payrollAgreement/payrollAgreementTab/forms/generalInfoLabels";
import { ComponentAppearance } from "@enum/appearances";
import { getFieldState } from "@utils/forms/getFieldState";
import { getDomainById } from "@mocks/domains/domainService.mocks";
import { DecisionModal } from "@design/modals/decisionModal";
import { IMessageModal } from "@ptypes/decisions/IMessageModal";
import { SelectCheck } from "@design/inputs/selectCheck";
import { IServerDomain } from "@ptypes/IServerDomain";
import { BoxContainer } from "@design/layout/boxContainer";
import { tokens } from "@design/tokens";
import { StyledContainer, StyledFormContent, StyledRow } from "./styles";

interface IGeneralInformationPayrollFormUI {
  autosuggestValue: string;
  editDataOption: boolean;
  formik: FormikProps<IGeneralInformationEntry>;
  infoModal: IMessageModal;
  loading: boolean;
  showModal: boolean;
  valuesEqual: boolean;
  isMobile: boolean;
  sourcesOfIncomeValues: IServerDomain[];
  displayList: boolean;
  focused: boolean;
  selectRef: React.RefObject<HTMLDivElement>;
  typePayrollOptions: IServerDomain[];
  setFocused: React.Dispatch<React.SetStateAction<boolean>>;
  setDisplayList: React.Dispatch<React.SetStateAction<boolean>>;
  onToggleInfoModalModal: () => void;
  onChangeCheck: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onButtonClick: () => void;
  onChangeSelect: (name: string, value: string) => void;
  onChangeAutosuggest: (name: string, value: string) => void;
  onPreviousStep?: () => void;
  onResetEdit?: () => void;
  onResetAdd?: () => void;
  isDisabledButton?: boolean;
  companyAgreement?: string;
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
    isDisabledButton,
    showModal,
    sourcesOfIncomeValues,
    isMobile,
    displayList,
    focused,
    selectRef,
    typePayrollOptions,
    companyAgreement,
    setFocused,
    setDisplayList,
    onChangeSelect,
    onChangeAutosuggest,
    onButtonClick,
    onResetEdit,
    onToggleInfoModalModal,
    onChangeCheck,
    onPreviousStep,
  } = props;

  return (
    <StyledContainer>
      <StyledFormContent>
        <form>
          <Stack direction="column">
            <BoxContainer
              borderColor={inube.palette.neutral.N40}
              borderRadius={tokens.spacing.s100}
              width="auto"
              gap={tokens.spacing.s300}
              backgroundColor={inube.palette.neutral.N0}
              boxSizing="border-box"
              padding={
                isMobile ? `${tokens.spacing.s150}` : `${tokens.spacing.s300}`
              }
            >
              <Grid
                templateColumns={isMobile ? "1fr" : "repeat(2, 1fr) "}
                templateRows={
                  editDataOption
                    ? isMobile
                      ? "repeat(5, 1fr)"
                      : "repeat(3, auto)"
                    : isMobile
                      ? "repeat(4, 1fr)"
                      : "repeat(2, 1fr)"
                }
                width="100%"
                gap={isMobile ? tokens.spacing.s050 : tokens.spacing.s250}
              >
                {editDataOption && (
                  <>
                    <Input
                      name="companyAgreement"
                      id="companyAgreement"
                      label={generalInfoLabels.companyAgreement}
                      readOnly
                      type="text"
                      size="compact"
                      value={companyAgreement}
                      fullwidth
                      disabled
                    />
                    <Input
                      name="typePayrollSelected"
                      id="typePayrollSelected"
                      label={generalInfoLabels.typePayrollSelected}
                      readOnly
                      type="text"
                      size="compact"
                      value={formik.values.typePayroll}
                      fullwidth
                      disabled
                    />
                  </>
                )}
                <StyledRow $isMobile={isMobile} $editOption={editDataOption}>
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
                </StyledRow>
                {!editDataOption && (
                  <Select
                    disabled={false}
                    id="typePayroll"
                    name="typePayroll"
                    label="Tipo de nómina de convenio"
                    placeholder="Selecciónalo de la lista"
                    onChange={onChangeSelect}
                    options={typePayrollOptions}
                    size="compact"
                    value={formik.values.typePayroll ?? ""}
                    fullwidth
                    message={formik.errors.typePayroll}
                    invalid={formik.errors.typePayroll ? true : false}
                  />
                )}

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
                  displayList={displayList}
                  focused={focused}
                  selectRef={selectRef}
                  setFocused={setFocused}
                  setDisplayList={setDisplayList}
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
            </BoxContainer>
          </Stack>
        </form>
      </StyledFormContent>
      <Stack justifyContent="flex-end" gap={tokens.spacing.s250}>
        <Button
          fullwidth={isMobile}
          onClick={editDataOption ? onResetEdit : onPreviousStep}
          variant="outlined"
          appearance={ComponentAppearance.GRAY}
        >
          {editDataOption ? "Cancelar" : "Anterior"}
        </Button>

        <Button
          fullwidth={isMobile}
          onClick={onButtonClick}
          disabled={isDisabledButton}
          loading={loading}
          appearance={ComponentAppearance.PRIMARY}
        >
          {editDataOption ? "Enviar" : "Siguiente"}
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
          moreDetails={infoModal.moreDetails}
        />
      )}
    </StyledContainer>
  );
};

export { GeneralInformationPayrollFormUI };
