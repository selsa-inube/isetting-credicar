import { FormikProps } from "formik";
import {
  Autosuggest,
  Button,
  Stack,
  Text,
  Textarea,
  useMediaQuery,
} from "@inubekit/inubekit";

import { tokens } from "@design/tokens";

import { MdOutlineFax } from "react-icons/md";
import { IServerDomain } from "@ptypes/IServerDomain";
import { ComponentAppearance } from "@enum/appearances";
import { getFieldState } from "@utils/forms/getFieldState";
import { IGeneralInformationEntry } from "@ptypes/moneyDestination/tabs/moneyDestinationTab/forms/IGeneralInformationDestination";
import {
  StyledContainer,
  StyledContainerFields,
  StyledFormContent,
  StyledIcon,
} from "./styles";

interface IGeneralInformationFormUI {
  formik: FormikProps<IGeneralInformationEntry>;
  optionsDestination: IServerDomain[];
  autosuggestValue: string;
  editDataOption: boolean;
  icon: JSX.Element | undefined;
  valuesEqual: boolean;
  loading: boolean;
  onButtonClick: () => void;
  onChange: (name: string, value: string) => void;
  isDisabledButton?: boolean;
}

const GeneralInformationFormUI = (props: IGeneralInformationFormUI) => {
  const {
    formik,
    loading,
    optionsDestination,
    editDataOption,
    icon,
    onChange,
    onButtonClick,
    valuesEqual,
    autosuggestValue,
    isDisabledButton,
  } = props;

  const isMobile = useMediaQuery("(max-width: 990px)");

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
                      {icon ?? <MdOutlineFax size={24} />}
                    </StyledIcon>
                  </Stack>
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
          disabled={valuesEqual}
        >
          Cancelar
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
    </StyledContainer>
  );
};

export { GeneralInformationFormUI };
