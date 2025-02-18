import {
  useState,
  ReactNode,
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
  useContext,
} from "react";
import { ThemeProvider } from "styled-components";
import { IThemeData } from "@ptypes/ITokens";
import { useToken } from "@hooks/useTokens";
import { AuthAndPortalData } from "../authAndPortalDataProvider";

interface IThemeProviderWrapper {
  children: ReactNode;
}

interface IThemeContextType {
  themeBusinessUnit: IThemeData;
  setThemeBusinessUnit: Dispatch<SetStateAction<IThemeData>>;
}

const ThemeContext = createContext<IThemeContextType>({} as IThemeContextType);

const ThemeProviderWrapper = ({ children }: IThemeProviderWrapper) => {
  const { appData } = useContext(AuthAndPortalData);
  const [themeBusinessUnit, setThemeBusinessUnit] = useState<IThemeData>({});
  const { token } = useToken(appData.businessUnit.publicCode);

  useEffect(() => {
    if (appData.businessUnit.publicCode) {
      setThemeBusinessUnit(token);
    }
  }, [appData.businessUnit.publicCode]);

  const theme = {
    themeBusinessUnit,
    setThemeBusinessUnit,
  };

  return (
    <ThemeContext.Provider value={theme}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

export { ThemeProviderWrapper };
