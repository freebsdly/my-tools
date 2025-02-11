import * as React from "react";
import { NavMain, NavMainItem } from "~/components/nav-main";
import { NavProjects, NavProjectsItem } from "~/components/nav-projects";
import { NavUser, NavUserItem } from "~/components/nav-user";
import { TeamData, TeamSwitcher } from "~/components/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "~/components/ui/sidebar";

export type AppSidebarProps = {
  data: {
    teams: TeamData[];
    navMain: NavMainItem[];
    projects: NavProjectsItem[];
    user: NavUserItem;
  };
};

export function AppSidebar({
  data,
  ...props
}: AppSidebarProps & React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
