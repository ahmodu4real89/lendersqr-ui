import {
  Building2,
  GraduationCap,
  Package,
  type LucideIcon,
  Users,
  BanknoteArrowDown,
  Handshake,
  PiggyBank,
  HandCoins,
  UserCheck,
  UserX,
  Package2,
  DatabaseZap,
  Wallet,
  Settings,
  ScrollText,
  ChartColumn,
  SlidersHorizontal,
  
} from "lucide-react";
export interface SideNavItem {
  label: string;
  path?: string;
  icon?: LucideIcon;
  children?: SideNavItem[];
}


export const sideNavItems: SideNavItem[] = [
  {
    label: "Switch Organization",
    icon: Package2 ,
    path: "#",
  },
  {
    label: "Dashboard",
    icon: Building2,
    path: "/dashboard",
  },
  {
    label: "Customers",
    children: [
      { label: "Users", icon: Users, path: "#" },
      { label: "Guarantors", icon: GraduationCap, path: "#" },
      { label: "Loans", icon: BanknoteArrowDown, path: "#" },
      { label: "Decision Models", icon: Handshake, path: "#" },
      { label: "Savings", icon: PiggyBank, path: "#" },
      { label: "Loan Requests", icon: HandCoins, path: "#" },
      { label: "Whitelists", icon: UserCheck, path: "#" },
      { label: "Karma", icon: UserX, path: "#" },
    ],
  },
  {
    label: "Business",
    children: [
      { label: "Organization", icon: Package2, path: "#" },
      { label: "Loan Products", icon: HandCoins, path: "#" },
       { label: "Savings Products", icon: Package, path: "#" },
      { label: "Fees and Charges", icon: DatabaseZap, path: "#" },
      { label: "Transactions", icon: Wallet, path: "#" },
      { label: "Services", icon: Settings, path: "#" },
     { label: "Services Account", icon: Users, path: "#" },
      { label: "Settlements", icon: ScrollText, path: "#" },
        { label: "Reports", icon: ChartColumn, path: "#" },
    ],
  },
  {
    label: "Settings",
    children: [
      { label: "Preferences", icon: SlidersHorizontal, path: "#" },
      { label: "Fees and Pricing", icon: Settings, path: "#" },
      { label: "Audit Logs", icon: Package, path: "#" },
  
    ],
  },
];
