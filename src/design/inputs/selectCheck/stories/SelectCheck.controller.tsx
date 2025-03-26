import { useEffect, useState } from "react";
import { ISelectCheck, SelectCheck } from "..";

const ControllerSelectCheck = (props: ISelectCheck) => {
  const { options } = props;

  const [data, setData] = useState(options);
  const [values, setValues] = useState<string>("");

  const handleToggleEntry = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;

    const updatedData = data.map((entry) =>
      entry.id === name ? { ...entry, checked } : entry,
    );

    setData(updatedData);
  };

  useEffect(() => {
    setValues(
      data
        ?.filter((item) => item.checked)
        .map((option) => option.label)
        .join(", "),
    );
  }, [data]);

  return (
    <SelectCheck
      {...props}
      options={data}
      onChangeCheck={handleToggleEntry}
      value={values}
    />
  );
};

export { ControllerSelectCheck };
