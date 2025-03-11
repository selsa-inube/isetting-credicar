import { ICountry } from "@ptypes/ICountry";

const mapCountriesToEntity = (data: ICountry): ICountry => {
  const newData: ICountry = {
    abbreviatedName: String(data.abbreviatedName),
    countryCatalogId: String(data.countryCatalogId),
    descriptionUse: String(data.descriptionUse),
    publicCode: String(data.publicCode),
  };

  return newData;
};

const mapCountriesToEntities = (enums: ICountry[]): ICountry[] => {
  return enums.map(mapCountriesToEntity);
};

export { mapCountriesToEntity, mapCountriesToEntities };
