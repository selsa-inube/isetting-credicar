interface ITitle {
  id: string;
  titleName: string;
  priority: number;
}

interface IEntry {
  id: string | number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

interface IAction {
  id: string;
  content: (entry: IEntry) => React.ReactNode;
  mobilePriority?: boolean;
  actionName?: string;
  onClick?: (entry: IEntry) => void;
}

interface IBreakpoint {
  breakpoint: string;
  totalColumns: number;
}

export type { ITitle, IAction, IEntry, IBreakpoint };
