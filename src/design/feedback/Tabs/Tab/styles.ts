import styled from "styled-components";
import { TextTokens } from "@inubekit/text";
import { inube } from "@inubekit/foundations";

type AppearanceType = keyof typeof TextTokens;

interface IStyledTab {
  appearance: AppearanceType;
  disabled: boolean;
  selected: boolean;
}

const StyledTab = styled.li<IStyledTab>`
  display: flex;
  gap: 4px;
  width: fit-content;
  user-select: none;
  list-style-type: none;
  border-bottom: ${({ appearance, disabled, selected, theme }) =>
    selected &&
    !disabled &&
    `4px solid ${
      theme?.text?.[appearance]?.content.color.regular ||
      TextTokens[appearance].content.color.regular
    }`};
  padding-bottom: 4px;
  & > p {
    cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  }
`;

const StyledNotification = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: ${inube.palette.red.R500};
`;

export { StyledTab, StyledNotification };
