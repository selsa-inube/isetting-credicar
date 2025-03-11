import { INav } from "@ptypes/home/INav";
import { ICardData } from "@ptypes/home/ICardData";
import { MdOutlineStart } from "react-icons/md";
import { Location } from "react-router-dom";

const createNavLink = (
  option: ICardData,
  defaultIcon: JSX.Element,
  location?: Location,
) => ({
  id: option?.id ?? "",
  label: option?.publicCode ?? "",
  icon: option?.icon ?? defaultIcon,
  path: option?.url ?? "",
  isActive: location ? location.pathname === option?.url : false,
});

const mainNavigation = (
  optionsCards: ICardData[],
  location?: Location,
): INav => {
  const linkNav = optionsCards.reduce<
    Record<string, ReturnType<typeof createNavLink>>
  >((acc, option) => {
    const navLink = createNavLink(option, <MdOutlineStart />, location);
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
