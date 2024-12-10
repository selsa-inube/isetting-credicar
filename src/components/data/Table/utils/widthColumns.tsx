import { Col } from "@inubekit/table";
import { ITitle } from "../types";

const widthColmnsData = (
  titleColumns: ITitle[],
  widthPercentageTotalColumns?: number,
  widthFirstColumn?: number,
  widthPercentageOtherColumns?: number,
) => {
  const calculateSize = (totalWidth: number, length: number) =>
    totalWidth / length;

  const sizeWithFirstColumn = calculateSize(
    widthPercentageTotalColumns ?? 80,
    titleColumns.length,
  );
  const sizeWithoutFirstColumn = calculateSize(
    widthPercentageTotalColumns ?? widthPercentageOtherColumns ?? 80,
    titleColumns.length - 1,
  );

  const copyTitleColumns = [...titleColumns];
  copyTitleColumns.shift();

  return widthFirstColumn ? (
    <>
      <Col width={`${widthFirstColumn}%`} />
      {copyTitleColumns.map((title) => (
        <Col key={title.id} width={`${sizeWithoutFirstColumn}%`} />
      ))}
    </>
  ) : (
    <>
      {titleColumns.map((title) => (
        <Col key={title.id} width={`${sizeWithFirstColumn}%`} />
      ))}
    </>
  );
};

export { widthColmnsData };
