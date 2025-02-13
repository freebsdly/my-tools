import type { MetaFunction } from "@remix-run/node";
import DashboardPage from "~/dashboard/page";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};


export default function Index() {
  return <DashboardPage></DashboardPage>;
}
