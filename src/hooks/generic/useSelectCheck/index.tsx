import { useEffect, useRef, useState } from "react";

const useSelectCheck = (
  onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void,
  onFocus?: (event: FocusEvent) => void,
  onBlur?: (event: FocusEvent) => void,
  readonly?: boolean,
) => {
  const [focused, setFocused] = useState(false);
  const [displayList, setDisplayList] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      selectRef.current &&
      !selectRef.current.contains(event.target as Node)
    ) {
      setDisplayList(false);
    }
  };
  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleFocus = (e: FocusEvent) => {
    setFocused(true);
    if (onFocus) {
      onFocus(e);
    }
  };

  const handleBlur = (e: FocusEvent) => {
    setFocused(false);
    if (onBlur) {
      onBlur(e);
    }
  };

  const handleClick = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (readonly) return;
    if (onClick) {
      onClick(e);
    }
    setDisplayList(!displayList);
  };

  return {
    displayList,
    focused,
    selectRef,
    handleBlur,
    handleClick,
    handleFocus,
  };
};

export { useSelectCheck };
