import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";
import type { LinksFunction, LoaderFunction } from "@remix-run/node";

import "./tailwind.css";
import AppLayout from "./layout/layout";

export const links: LinksFunction = () => [];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export const loader: LoaderFunction = async () => {
  return {
    data: {
      user: {
        name: "shadcn",
        email: "m@example.com",
        avatar: "/avatars/shadcn.jpg",
      },
      teams: [
        {
          name: "Acme Inc",
          logo: "GalleryVerticalEnd",
          plan: "Enterprise",
        },
        {
          name: "Acme Corp.",
          logo: "AudioWaveform",
          plan: "Startup",
        },
        {
          name: "Evil Corp.",
          logo: "Command",
          plan: "Free",
        },
      ],
      navMain: [
        {
          title: "Tools",
          url: "#",
          icon: "SquareTerminal",
          isActive: true,
          items: [
            {
              title: "Terminal",
              url: "/tools/terminal",
            },
          ],
        },
        {
          title: "Models",
          url: "#",
          icon: "Bot",
          items: [
            {
              title: "Genesis",
              url: "#",
            },
            {
              title: "Explorer",
              url: "#",
            },
            {
              title: "Quantum",
              url: "#",
            },
          ],
        },
        {
          title: "Documentation",
          url: "#",
          icon: "BookOpen",
          items: [
            {
              title: "Introduction",
              url: "#",
            },
            {
              title: "Get Started",
              url: "#",
            },
            {
              title: "Tutorials",
              url: "#",
            },
            {
              title: "Changelog",
              url: "#",
            },
          ],
        },
        {
          title: "Settings",
          url: "#",
          icon: "Settings2",
          items: [
            {
              title: "General",
              url: "#",
            },
            {
              title: "Team",
              url: "#",
            },
            {
              title: "Billing",
              url: "#",
            },
            {
              title: "Limits",
              url: "#",
            },
          ],
        },
      ],
      projects: [
        {
          name: "Design Engineering",
          url: "#",
          icon: "Frame",
        },
        {
          name: "Sales & Marketing",
          url: "#",
          icon: "PieChart",
        },
        {
          name: "Travel",
          url: "#",
          icon: "Map",
        },
      ],
    },
  };
};

export default function App() {
  const { data } = useLoaderData<typeof loader>();
  return (
    <AppLayout data={data}>
      <Outlet />
    </AppLayout>
  );
}
