import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Sign up to My Tools" },
    { name: "description", content: "Sign up to My Tools" },
  ];
};

export default function Index() {
  return (
    <h1>Sign Up</h1>
  );
}
