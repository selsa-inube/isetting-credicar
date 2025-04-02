import { FormikProps } from "formik";

import {
  Button,
  Divider,
  Fieldset,
  Input,
  Select,
  Stack,
} from "@inubekit/inubekit";
import { tokens } from "@design/tokens";
import { ComponentAppearance } from "@enum/appearances";
import { ICompanyEntry } from "@ptypes/payrollAgreement/payrollAgreementTab/forms/ICompanyEntry";
import { getDomainById } from "@mocks/domains/domainService.mocks";
import { getFieldState } from "@utils/forms/getFieldState";
import { IServerDomain } from "@ptypes/IServerDomain";
import { companyLabels } from "@config/payrollAgreement/payrollAgreementTab/forms/companyLabels";

import {
  StyledContainer,
  StyledContainerFields,
  StyledFormContent,
} from "./styles";

interface ICompanyFormUI {
  formik: FormikProps<ICompanyEntry>;
  loading: boolean;
  optionsCountries: IServerDomain[];
  optionsCities: IServerDomain[];
  legalPerson: IServerDomain[];
  isMobile: boolean;
  onChange: (name: string, value: string) => void;
  onCompanyChange: (name: string, value: string) => void;
  onButtonClick: () => void;
  isDisabledButton?: boolean;
}

const CompanyFormUI = (props: ICompanyFormUI) => {
  const {
    formik,
    loading,
    optionsCountries,
    optionsCities,
    legalPerson,
    isDisabledButton,
    isMobile,
    onChange,
    onCompanyChange,
    onButtonClick,
  } = props;

  return (
    <StyledContainer>
      <StyledFormContent>
        <StyledContainerFields $isMobile={isMobile}>
          <Stack gap={tokens.spacing.s300} direction="column" width="100%">
            <Select
              fullwidth
              disabled={false}
              id="companySelected"
              name="companySelected"
              label={companyLabels.companySelected}
              placeholder="Seleccione una opción"
              onChange={onCompanyChange}
              options={legalPerson}
              size="compact"
              value={formik.values.companySelected ?? ""}
              required
            />

            {formik.values.companySelected === "addCompany" && (
              <>
                <Divider dashed />
                <Stack direction="column" width="100%">
                  <Input
                    name="companyName"
                    id="companyName"
                    label={companyLabels.companyName}
                    placeholder="Nombre de la empresa"
                    type="text"
                    size="compact"
                    value={formik.values.companyName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    status={getFieldState(formik, "companyName")}
                    message={formik.errors.companyName}
                    fullwidth
                  />
                  <Stack
                    direction="row"
                    gap={tokens.spacing.s250}
                    width="100%"
                    justifyContent="space-between"
                    alignItems="center"
                    padding={`${tokens.spacing.s200} ${tokens.spacing.s0} ${tokens.spacing.s0}`}
                  >
                    <Input
                      name="companyNameCommercial"
                      id="companyNameCommercial"
                      label={companyLabels.companyNameCommercial}
                      placeholder="Nombre comercial"
                      type="text"
                      size="compact"
                      value={formik.values.companyNameCommercial}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      status={getFieldState(formik, "companyNameCommercial")}
                      message={formik.errors.companyNameCommercial}
                      fullwidth
                    />
                    <Select
                      disabled={false}
                      id="companyCountry"
                      name="companyCountry"
                      label={companyLabels.companyCountry}
                      placeholder="Seleccione una opción"
                      onChange={onChange}
                      options={optionsCountries}
                      size="compact"
                      value={formik.values.companyCountry ?? ""}
                      message={formik.errors.companyCountry}
                      invalid={formik.errors.companyCountry ? true : false}
                      fullwidth
                    />
                  </Stack>

                  <Fieldset legend="Identificación" type="body" size="medium">
                    <Stack
                      direction="row"
                      gap={tokens.spacing.s250}
                      width="100%"
                      justifyContent="space-between"
                      alignItems="center"
                    >
                      <Select
                        disabled={false}
                        id="companyTypeIdent"
                        name="companyTypeIdent"
                        label={companyLabels.companyTypeIdent}
                        placeholder="Seleccione una opción"
                        onChange={onChange}
                        options={getDomainById("typeIdentCompany")}
                        size="compact"
                        value={formik.values.companyTypeIdent ?? ""}
                        fullwidth
                        message={formik.errors.companyTypeIdent}
                        invalid={formik.errors.companyTypeIdent ? true : false}
                      />
                      <Input
                        name="companyNumberIdent"
                        id="companyNumberIdent"
                        label={companyLabels.companyNumberIdent}
                        placeholder="Número de identificacíon"
                        type="number"
                        size="compact"
                        value={formik.values.companyNumberIdent}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        status={getFieldState(formik, "companyNumberIdent")}
                        message={formik.errors.companyNumberIdent}
                        fullwidth
                      />
                      <Select
                        disabled={false}
                        id="companyCountryIdent"
                        name="companyCountryIdent"
                        label={companyLabels.companyCountryIdent}
                        placeholder="Seleccione una opción"
                        onChange={onChange}
                        options={optionsCountries}
                        size="compact"
                        value={formik.values.companyCountryIdent ?? ""}
                        message={formik.errors.companyCountryIdent}
                        invalid={
                          formik.errors.companyCountryIdent ? true : false
                        }
                        fullwidth
                      />
                    </Stack>
                  </Fieldset>

                  <Fieldset
                    legend="Dirección de la sede"
                    type="body"
                    size="medium"
                  >
                    <Stack
                      direction="column"
                      width="100%"
                      gap={isMobile ? tokens.spacing.s050 : tokens.spacing.s200}
                    >
                      <Stack
                        direction="row"
                        gap={tokens.spacing.s250}
                        width="100%"
                      >
                        <Input
                          name="companyAddressRes"
                          id="companyAddressRes"
                          label={companyLabels.companyAddressRes}
                          placeholder="Ej: Calle 10 #2a - 34"
                          type="text"
                          size="compact"
                          value={formik.values.companyAddressRes}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          status={getFieldState(formik, "companyAddressRes")}
                          message={formik.errors.companyAddressRes}
                          fullwidth
                        />
                        <Input
                          name="companyComplement"
                          id="companyComplement"
                          label={companyLabels.companyComplement}
                          placeholder="Ej: Edificio rojo, oficina 202"
                          type="text"
                          size="compact"
                          value={formik.values.companyComplement}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          status={getFieldState(formik, "companyComplement")}
                          message={formik.errors.companyComplement}
                          fullwidth
                        />
                      </Stack>
                      <Select
                        disabled={false}
                        id="companyCity"
                        name="companyCity"
                        label={companyLabels.companyCity}
                        placeholder="Nombre de la ciudad"
                        onChange={onChange}
                        options={optionsCities}
                        size="compact"
                        value={formik.values.companyCity ?? ""}
                        message={formik.errors.companyCity}
                        invalid={formik.errors.companyCity ? true : false}
                        fullwidth
                      />
                    </Stack>
                  </Fieldset>
                </Stack>
              </>
            )}
          </Stack>
        </StyledContainerFields>
      </StyledFormContent>
      <Stack justifyContent="flex-end" gap={tokens.spacing.s250}>
        <Button
          fullwidth={isMobile}
          onClick={onButtonClick}
          disabled={isDisabledButton}
          loading={loading}
          appearance={ComponentAppearance.PRIMARY}
        >
          Siguiente
        </Button>
      </Stack>
    </StyledContainer>
  );
};

export { CompanyFormUI };
