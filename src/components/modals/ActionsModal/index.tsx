import { useRef, useEffect } from "react";
import { MdClear } from "react-icons/md";

import { Stack } from "@inubekit/stack";
import { Grid } from "@inubekit/grid";

import { tokens } from "@design/tokens";
import { IAction, IEntry } from "@components/data/Table/types";
import { StyledModal } from "./styles";

interface ActionsModalProps {
  actions: IAction[];
  entry: IEntry;
  onClose: () => void;
}

function ActionsModal(props: ActionsModalProps) {
  const { actions, entry, onClose } = props;
  const modalRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <StyledModal ref={modalRef}>
      <Grid
        templateColumns="auto 0.5fr"
        justifyItems="end"
        justifyContent="space-between"
        gap={tokens.spacing.s100}
      >
        <Stack direction="column" gap={tokens.spacing.s100}>
          {actions.map((action, index) => (
            <Stack key={index} alignItems="center">
              {action.content(entry)}
            </Stack>
          ))}
        </Stack>
        <MdClear cursor="pointer" onClick={onClose} />
      </Grid>
    </StyledModal>
  );
}

export type { ActionsModalProps };
export { ActionsModal };
