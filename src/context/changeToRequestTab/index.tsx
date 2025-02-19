import { createContext, useState, ReactNode, useMemo } from "react";

interface IChangeToRequestTab {
  changeTab: boolean;
  setChangeTab: React.Dispatch<React.SetStateAction<boolean>>;
}

const ChangeToRequestTab = createContext<IChangeToRequestTab>(
  {} as IChangeToRequestTab,
);

interface ChangeToRequestTabProviderProps {
  children: ReactNode;
}

const ChangeToRequestTabProvider = (props: ChangeToRequestTabProviderProps) => {
  const { children } = props;
  const [changeTab, setChangeTab] = useState<boolean>(false);

  const changeToRequestContainer = useMemo(
    () => ({
      changeTab,
      setChangeTab,
    }),
    [changeTab, setChangeTab],
  );

  return (
    <ChangeToRequestTab.Provider value={changeToRequestContainer}>
      {children}
    </ChangeToRequestTab.Provider>
  );
};

export { ChangeToRequestTabProvider, ChangeToRequestTab };
