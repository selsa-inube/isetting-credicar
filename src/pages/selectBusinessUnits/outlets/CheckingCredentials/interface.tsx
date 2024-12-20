import { Spinner } from "@inubekit/spinner";
import { Stack } from "@inubekit/stack";
import { Text } from "@inubekit/text";

const CheckingCredentialsUI = () => {
  return (
    <Stack gap="16px" direction="column">
      <Stack direction="column">
        <Text type="title" size="large" textAlign="center">
          Validando credenciales
        </Text>
        <Text type="title" size="small" textAlign="center">
          Espere un momento, por favor.
        </Text>
      </Stack>
      <Stack alignItems="center" direction="column">
        <Spinner size="large" />
      </Stack>
    </Stack>
  );
};

export { CheckingCredentialsUI };
