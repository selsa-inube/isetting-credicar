import { INav } from "@ptypes/home/INav";
import { ICardData } from "@ptypes/home/ICardData";
import { MdOutlineStart } from "react-icons/md";

const createNavLink = (option: ICardData, defaultIcon: JSX.Element) => ({
  id: option?.id || "",
  label: option?.publicCode || "",
  icon: option?.icon || defaultIcon,
  path: option?.url || "",
});

const mainNavigation = (optionsCards: ICardData[]): INav => {
  const linkNav = optionsCards.reduce<
    Record<string, ReturnType<typeof createNavLink>>
  >((acc, option) => {
    const navLink = createNavLink(option, <MdOutlineStart />);
    acc[navLink.id] = navLink;
    return acc;
  }, {});

  return {
    items: {
      title: "MENU",
      sections: {
        administrate: {
          name: "",
          links: linkNav,
        },
      },
    },
    breakpoint: "848px",
  };
};

export { mainNavigation };
