import { Col } from "@inubekit/table";
import { ITitle } from "../types";

const widthColmnsData = (
  titleColumns: ITitle[],
  widthPercentageTotalColumns?: number,
  columnWidths?: number[],
) => {
  const calculateSize = (totalWidth: number, length: number) =>
    totalWidth / length;

  const defaultSize = calculateSize(
    widthPercentageTotalColumns ?? 80,
    titleColumns.length,
  );

  return (
    <>
      {titleColumns.map((title, index) => (
        <Col
          key={title.id}
          width={
            columnWidths?.[index] !== undefined
              ? `${columnWidths[index]}%`
              : `${defaultSize}%`
          }
        />
      ))}
    </>
  );
};

export { widthColmnsData };
