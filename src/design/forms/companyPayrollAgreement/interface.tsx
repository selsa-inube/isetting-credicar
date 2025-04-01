import { MdHorizontalRule } from "react-icons/md";
import { FormikProps } from "formik";

import {
  Button,
  Date,
  Divider,
  Grid,
  Input,
  Select,
  Stack,
  useMediaQuery,
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
    onChange,
    onCompanyChange,
    onButtonClick,
  } = props;

  const isMobile = useMediaQuery("(max-width: 990px)");

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
                <Grid
                  templateRows="repeat(4, 1fr)"
                  templateColumns="repeat(3, 1fr)"
                  width="100%"
                  gap={isMobile ? tokens.spacing.s050 : tokens.spacing.s250}
                >
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
                  <Input
                    name="companyVerifDigit"
                    id="companyVerifDigit"
                    label={companyLabels.companyVerifDigit}
                    placeholder="Digito de verificación de id"
                    iconBefore={<MdHorizontalRule />}
                    type="number"
                    size="compact"
                    value={formik.values.companyVerifDigit}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    status={getFieldState(formik, "companyVerifDigit")}
                    message={formik.errors.companyVerifDigit}
                    fullwidth
                  />
                  <Date
                    name="companyDateIdent"
                    id="companyDateIdent"
                    label={companyLabels.companyDateIdent}
                    size="compact"
                    value={formik.values.companyDateIdent}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    status={getFieldState(formik, "companyDateIdent")}
                    message={formik.errors.companyDateIdent}
                    fullwidth
                  />
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
                  <Input
                    name="companyCode"
                    id="companyCode"
                    label={companyLabels.companyCode}
                    placeholder="Código postal"
                    type="text"
                    size="compact"
                    value={formik.values.companyCode}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    status={getFieldState(formik, "companyCode")}
                    message={formik.errors.companyCode}
                    fullwidth
                  />
                  <Select
                    disabled={false}
                    id="companyCity"
                    name="companyCity"
                    label={companyLabels.companyCity}
                    placeholder="Seleccione una opción"
                    onChange={onChange}
                    options={optionsCities}
                    size="compact"
                    value={formik.values.companyCity ?? ""}
                    message={formik.errors.companyCity}
                    invalid={formik.errors.companyCity ? true : false}
                    fullwidth
                  />
                  <Input
                    name="companyAddressRes"
                    id="companyAddressRes"
                    label="Dirección de la sede"
                    placeholder={companyLabels.companyAddressRes}
                    type="text"
                    size="compact"
                    value={formik.values.companyAddressRes}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    status={getFieldState(formik, "companyAddressRes")}
                    message={formik.errors.companyAddressRes}
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
                    invalid={formik.errors.companyCountryIdent ? true : false}
                    fullwidth
                  />
                </Grid>
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
