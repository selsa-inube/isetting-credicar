import {
  MdOutlineBeachAccess,
  MdDirectionsCar,
  MdHandyman,
  MdCreditCard,
  MdAndroid,
} from "react-icons/md";
import { IconWithText } from "@components/data/IconWithText";

const dataMoneyDestination = [
  {
    id: "1",
    name: (
      <IconWithText
        icon={<MdOutlineBeachAccess size={16} />}
        text="Vacaciones"
      />
    ),
    description:
      "lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  },
  {
    id: "2",
    name: <IconWithText icon={<MdDirectionsCar size={16} />} text="Vehículo" />,
    description:
      "lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  },
  {
    id: "3",
    name: (
      <IconWithText icon={<MdCreditCard size={16} />} text="Credito personal" />
    ),
    description:
      "lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  },
  {
    id: "4",
    name: (
      <IconWithText icon={<MdAndroid size={16} />} text="Libre inversión" />
    ),
    description:
      "lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  },
  {
    id: "5",
    name: (
      <IconWithText icon={<MdHandyman size={16} />} text="Lorem ipsum sopdm" />
    ),
    description:
      "lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  },
];

export { dataMoneyDestination };
