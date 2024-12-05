import React from "react";

type OnChangeType = (id: string) => void;

const smoothScrollToPosition = (
  container: HTMLElement,
  position: number,
): void => {
  container.scrollTo({
    left: position,
    behavior: "smooth",
  });
};

const handleChevronClick = (
  direction: "left" | "right",
  tabsContainerRef: React.RefObject<HTMLDivElement>,
): void => {
  if (tabsContainerRef.current) {
    const container = tabsContainerRef.current;
    const scrollAmount = direction === "right" ? 150 : -150;
    const newScrollPosition = container.scrollLeft + scrollAmount;
    smoothScrollToPosition(container, newScrollPosition);
  }
};

const interceptOnChange = (onChange: OnChangeType, e: string) => {
  try {
    onChange(e);
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error("An unknown error occurred");
    }
  }
};

const handleInsideClick = (
  e: React.ChangeEvent<HTMLInputElement>,
  onChange: OnChangeType,
  setDisplayList: React.Dispatch<React.SetStateAction<boolean>>,
) => {
  const id = e.target.closest("li")?.getAttribute("id");
  if (id) {
    interceptOnChange(onChange, id);
    setDisplayList(false);
  }
};

const handleTabClick = (onChange: OnChangeType) => (e: React.MouseEvent) => {
  const targetElement = e.target;
  if (targetElement instanceof HTMLElement) {
    const tabElement = targetElement.closest("[id]");
    if (tabElement && tabElement.tagName.toLowerCase() === "li") {
      const id = tabElement.getAttribute("id");
      if (id && tabElement.getAttribute("disabled") === null) {
        interceptOnChange(onChange, id);
      }
    }
  }
};

export {
  handleChevronClick,
  interceptOnChange,
  handleInsideClick,
  handleTabClick,
};
