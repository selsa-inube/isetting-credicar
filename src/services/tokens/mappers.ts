import { ITokens } from "@ptypes/ITokens";

const mapTokensApiToEntity = (token: ITokens): ITokens => {
  const tokenData: ITokens = {
    tokenThemeId: String(token.tokenThemeId),
    businessUnit: String(token.businessUnit),
    portal: String(token.portal),
    themeData: Object(token.themeData),
  };
  return tokenData;
};

const mapTokensToEntities = (token: ITokens[]): ITokens[] => {
  return token.map(mapTokensApiToEntity);
};

export { mapTokensApiToEntity, mapTokensToEntities };
