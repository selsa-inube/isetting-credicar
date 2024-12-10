import { useState, useEffect } from "react";
import { Tab, ITab } from "../index";

const TabController = (props: ITab) => {
  const { disabled = false } = props;
  const [tabSelected, setTabSelected] = useState(false);

  useEffect(() => {
    if (disabled) {
      setTabSelected(false);
    }
  }, [disabled]);

  const onClickTab = () => {
    if (!disabled) {
      setTabSelected(!tabSelected);
    }
  };

  return (
    <div onClick={onClickTab} tabIndex={0}>
      <Tab {...props} selected={tabSelected} />
    </div>
  );
};

export { TabController };
