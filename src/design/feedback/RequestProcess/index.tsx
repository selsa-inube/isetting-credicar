import { ISpinnerAppearance, Stack, useMediaQuery } from "@inubekit/inubekit";

import { IRequestSteps } from "@design/modals/requestProcessModal/types";
import { ComponentAppearance } from "@enum/appearances";
import { ISaveDataResponse } from "@ptypes/saveData/ISaveDataResponse";
import { RequestStatusModal } from "@design/modals/requestStatusModal";
import { statusFlowAutomatic } from "@config/status/statusFlowAutomatic";
import { tokens } from "@design/tokens";
import { RequestProcessModal } from "@design/modals/requestProcessModal";

interface IRequestProcess {
  descriptionRequestProcess: {
    title: string;
    description: string;
  };
  portalId: string;
  requestProcessSteps: IRequestSteps[];
  descriptionRequestStatus: (responsible: string) => {
    actionText: string;
    description: string;
    title: string;
  };
  onCloseRequestStatus: () => void;
  saveData?: ISaveDataResponse;
  appearance?: ISpinnerAppearance;
}

const RequestProcess = (props: IRequestProcess) => {
  const {
    descriptionRequestProcess,
    portalId,
    requestProcessSteps,
    saveData,
    descriptionRequestStatus,
    onCloseRequestStatus,
  } = props;

  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <Stack
      direction="column"
      gap={tokens.spacing.s300}
      justifyContent="center"
      alignContent="center"
    >
      {saveData &&
        saveData.requestStatus !== "" &&
        (statusFlowAutomatic.includes(saveData.requestStatus) ? (
          <RequestProcessModal
            portalId={portalId}
            title={descriptionRequestProcess.title}
            description={descriptionRequestProcess.description}
            appearance={ComponentAppearance.SUCCESS}
            requestSteps={requestProcessSteps}
            isMobile={isMobile}
            sizeIcon="28px"
          />
        ) : (
          <RequestStatusModal
            portalId={portalId}
            title={
              descriptionRequestStatus(
                saveData.responsible ?? "uno de nuestros funcionarios",
              ).title
            }
            description={
              descriptionRequestStatus(
                saveData.responsible ?? "uno de nuestros funcionarios",
              ).description
            }
            requestNumber={saveData.requestNumber}
            onClick={onCloseRequestStatus}
            onCloseModal={onCloseRequestStatus}
            isLoading={false}
            actionText={
              descriptionRequestStatus(
                saveData.responsible ?? "uno de nuestros funcionarios",
              ).actionText
            }
            appearance={ComponentAppearance.PRIMARY}
          />
        ))}
    </Stack>
  );
};

export { RequestProcess };
export type { IRequestProcess };
