import {
  IStackAlignContent,
  IStackAlignItem,
  IStackDirectionAlignment,
  IStackJustifyContent,
  IStackWrapControl,
} from "@inubekit/inubekit";

import { StyledFlex } from "./styles";

interface IBoxContainer {
  children: React.ReactNode;
  backgroundColor: string;
  boxSizing: string;
  borderColor?: string;
  borderRadius?: string;
  wrap?: IStackWrapControl;
  direction?: IStackDirectionAlignment;
  justifyContent?: IStackJustifyContent;
  alignItems?: IStackAlignItem;
  alignContent?: IStackAlignContent;
  height?: string;
  width?: string;
  gap?: string;
  margin?: string;
  padding?: string;
  overflowY?: string;
  overflowX?: string;
  boxShadow?: string;
}

const BoxContainer = (props: IBoxContainer) => {
  const {
    children,
    wrap,
    direction,
    justifyContent,
    alignItems,
    alignContent,
    height,
    width,
    borderRadius,
    gap,
    margin = "0px",
    padding = "0px",
    backgroundColor,
    boxSizing,
    borderColor,
    overflowY,
    overflowX,
    boxShadow,
  } = props;

  return (
    <StyledFlex
      $direction={direction}
      $justifyContent={justifyContent}
      $alignItems={alignItems}
      $alignContent={alignContent}
      $height={height}
      $width={width}
      $wrap={wrap}
      $gap={gap}
      $margin={margin}
      $padding={padding}
      $backgroundColor={backgroundColor}
      $boxSizing={boxSizing}
      $borderColor={borderColor}
      $borderRadius={borderRadius}
      $overflowY={overflowY}
      $overflowX={overflowX}
      $boxShadow={boxShadow}
    >
      {children}
    </StyledFlex>
  );
};

export { BoxContainer };
export type { IBoxContainer };
