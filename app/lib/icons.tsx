import {
  Home,
  Settings,
  User,
  AlertCircle,
  LucideIcon,
  Bot,
  Map,
  PieChart,
  Frame,
  Settings2,
  BookOpen,
  SquareTerminal,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  home: Home,
  settings: Settings,
  settings2: Settings2,
  user: User,
  alert: AlertCircle,
  bot: Bot,
  map: Map,
  piechart: PieChart,
  frame: Frame,
  bookopen: BookOpen,
  squareterminal: SquareTerminal,
};

type IconName = keyof typeof iconMap;

export const getLucideIcon = (iconName: IconName) => {
  const IconComponent = iconMap[iconName.toLowerCase()];
  return IconComponent ? <IconComponent /> : <Bot />;
};
