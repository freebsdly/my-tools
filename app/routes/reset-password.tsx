import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Reset Password"},
    { name: "description", content: "Reset Password" },
  ];
};

export default function Index() {
  return (
    <h1>Reset Password</h1>
  );
}
