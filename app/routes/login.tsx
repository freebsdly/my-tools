import type { MetaFunction } from "@remix-run/node";
import LoginPage from "~/login/page";

export const meta: MetaFunction = () => {
  return [
    { title: "Login to My Tools" },
    { name: "description", content: "Login to my tools" },
  ];
};

export default function Index() {
  return (
    <LoginPage></LoginPage>
  );
}
