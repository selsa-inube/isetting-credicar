import { Text } from "@inubekit/inubekit";
import { StyledNoResults } from "./styles";

const NoResultsMessage = ({ search }: { search: string }) => {
  return (
    <StyledNoResults>
      <Text size="medium">
        No se encontraron resultados para &quot;{search}&quot;.
      </Text>
      <Text size="medium">
        Por favor, intenta modificando los parámetros de búsqueda.
      </Text>
    </StyledNoResults>
  );
};

export { NoResultsMessage };
