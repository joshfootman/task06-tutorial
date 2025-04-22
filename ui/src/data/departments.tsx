import {
  IconDna2,
  IconFlask,
  IconPrismLight,
  IconProps
} from "@tabler/icons-react";

export const DEPARTMENTS = [
  {
    id: 1,
    name: "Biological Sciences",
    icon: (props: IconProps) => <IconDna2 {...props} />,
    colours: ["", "", "", "#8B0A1A", "", "", "", "#FF0033", "", ""],
  },
  {
    id: 2,
    name: "Chemistry",
    icon: (props: IconProps) => <IconFlask {...props} />,
    colours: ["", "", "", "#FF9900", "", "", "", "#FFA07A", "", ""],
  },
  {
    id: 3,
    name: "Physics & Astronomy",
    icon: (props: IconProps) => <IconPrismLight {...props} />,
    colours: ["", "", "", "#F7DC6F", "", "", "", "#FFFFC2", "", ""],
  },
];
