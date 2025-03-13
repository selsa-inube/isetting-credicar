import { useState, useEffect } from "react";

import { ICity } from "@ptypes/ICity";
import { getCitiesData } from "@services/shared/cities";
import { IServerDomain } from "@ptypes/IServerDomain";

const useCities = () => {
  const [citiesData, setCitiesData] = useState<ICity[]>([] as ICity[]);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const fetchCitiesData = async () => {
      try {
        const data = await getCitiesData();

        setCitiesData(data);
      } catch (error) {
        console.info(error);
        setHasError(true);
      }
    };

    fetchCitiesData();
  }, []);

  const optionsCities: IServerDomain[] = citiesData.map((item) => {
    return {
      id: item.cityCatalogId,
      label: item.descriptionUse,
      value: item.publicCode,
    };
  });

  return { optionsCities, hasError };
};

export { useCities };
