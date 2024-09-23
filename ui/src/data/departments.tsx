import {
  IconBatteryAutomotive,
  IconBleachChlorine,
  IconBuildingBridge,
  IconDeviceDesktop,
  IconManualGearbox,
  IconProps,
  IconRocket,
  IconTopologyStarRing3,
  IconTrees,
  IconVolcano,
} from "@tabler/icons-react";
import React from "react";

export const DEPARTMENTS = [
  {
    id: 1,
    name: "Computer Science",
    icon: (props: IconProps) => <IconDeviceDesktop {...props} />,
    colours: ["", "", "", "#8B0A1A", "", "", "", "#FF0033", "", ""],
  },
  {
    id: 2,
    name: "Electrical Engineering",
    icon: (props: IconProps) => <IconBatteryAutomotive {...props} />,
    colours: ["", "", "", "#FF9900", "", "", "", "#FFA07A", "", ""],
  },
  {
    id: 3,
    name: "Mechanical Engineering",
    icon: (props: IconProps) => <IconManualGearbox {...props} />,
    colours: ["", "", "", "#F7DC6F", "", "", "", "#FFFFC2", "", ""],
  },
  {
    id: 4,
    name: "Civil Engineering",
    icon: (props: IconProps) => <IconBuildingBridge {...props} />,
    colours: ["", "", "", "#4E5338", "", "", "", "#C6F4C6", "", ""],
  },
  {
    id: 5,
    name: "Aerospace Engineering",
    icon: (props: IconProps) => <IconRocket {...props} />,
    colours: ["", "", "", "#2E865F", "", "", "", "#34C759", "", ""],
  },
  {
    id: 6,
    name: "Chemical Engineering",
    icon: (props: IconProps) => <IconBleachChlorine {...props} />,
    colours: ["", "", "", "#3498DB", "", "", "", "#00BFFF", "", ""],
  },
  {
    id: 7,
    name: "Biomedical Engineering",
    icon: (props: IconProps) => <IconDeviceDesktop {...props} />,
    colours: ["", "", "", "#3B3F54", "", "", "", "#6666CC", "", ""],
  },
  {
    id: 8,
    name: "Environmental Engineering",
    icon: (props: IconProps) => <IconTrees {...props} />,
    colours: ["", "", "", "#7A288A", "", "", "", "#B300B3", "", ""],
  },
  {
    id: 9,
    name: "Geological Engineering",
    icon: (props: IconProps) => <IconVolcano {...props} />,
    colours: ["", "", "", "#C51077", "", "", "", "#FF66CC", "", ""],
  },
  {
    id: 10,
    name: "Nanotechnology",
    icon: (props: IconProps) => <IconTopologyStarRing3 {...props} />,
    colours: ["", "", "", "#FF6700", "", "", "", "#FF9900", "", ""],
  },
];
