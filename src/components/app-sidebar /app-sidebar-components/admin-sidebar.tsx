'use client'

import {
  BankIcon,
  UserIcon,
  ShieldIcon,
  Users3Icon,
  UserTagIcon,
  UserCogIcon,
  GendersIcon,
  ReportsIcon,
  BuildingIcon,
  SettingsIcon,
  UserListIcon,
  DashboardIcon,
  BriefCaseIcon,
  FootstepsIcon,
  UserClockIcon,
  UserShieldIcon,
  BuildingCogIcon,
  NotificationIcon,
  GraduationCapIcon,
  BuildingBranchIcon,
} from '@/components/icons'
import {
  Sidebar,
  SidebarRail,
  SidebarMenu,
  SidebarGroup,
  SidebarHeader,
  // SidebarFooter,
  SidebarContent,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarGroupLabel,
  SidebarGroupContent,
} from '@/components/ui/sidebar'


import { IBaseComp } from '@/types/component'



import { Link } from 'lucide-react'
import { INavItem } from '@/components/app-sidebar /types'
import AppSidebarItem from '@/components/app-sidebar /app-sidebar-item'

const adminSidebarItem: INavItem[] = [
  {
    title: 'Dashboard',
    icon: DashboardIcon,
    url: '/admin/dashboard',
    type: 'item',
  },
  {
    title: 'Users',
    icon: Users3Icon,
    type: 'dropdown',
    url: '/admin/users',
    items: [
      {
        title: 'Members',
        url: '/members',
        icon: UserIcon,
        type: 'dropdown',
        items: [
          {
            title: 'View Members',
            url: '/view-members',
            type: 'item',
            icon: UserListIcon,
          },
          {
            title: 'Members Activity',
            url: '/members-activity',
            type: 'item',
            icon: UserClockIcon,
          },
          {
            title: 'Member Types',
            url: '/member-types',
            type: 'item',
            icon: UserCogIcon,
          },
          {
            title: 'Educational Attainments',
            url: '/member-educational-attainments',
            type: 'item',
            icon: GraduationCapIcon,
          },
          {
            title: 'Member Classification',
            url: '/member-classification',
            type: 'item',
            icon: UserTagIcon,
          },
          {
            title: 'Member Occupation',
            url: '/member-occupation',
            type: 'item',
            icon: BriefCaseIcon,
          },
          {
            title: 'Genders',
            icon: GendersIcon,
            type: 'item',
            url: '/genders',
          },
        ],
      },
      {
        title: 'Employees',
        url: '/admin/users/employees',
        type: 'dropdown',
        icon: UserShieldIcon,
        items: [
          {
            title: 'View employees',
            url: '/view-employees',
            icon: UserListIcon,
            type: 'item',
          },
          {
            title: 'Employee Footsteps',
            url: '/employee-footsteps',
            icon: FootstepsIcon,
            type: 'item',
          },
        ],
      },
    ],
  },
  {
    title: 'Roles Management',
    icon: ShieldIcon,
    type: 'item',
    url: '/admin/roles-management',
  },
  {
    title: 'Company',
    url: '/admin/company',
    icon: BuildingIcon,
    type: 'dropdown',
    items: [
      {
        title: 'Profile',
        icon: BuildingCogIcon,
        type: 'item',
        url: '/profile',
      },
      {
        title: 'Branches',
        type: 'item',
        icon: BuildingBranchIcon,
        url: '/branches',
      },
    ],
  },
  {
    title: 'Accounting',
    icon: BankIcon,
    url: '/admin/accounting',
    type: 'dropdown',
    items: [
      {
        title: 'Accounts',
        type: 'item',
        url: '/accounts',
        icon: BankIcon,
      },
      {
        icon: BankIcon,
        type: 'item',
        title: 'Computation Type',
        url: '/computation-type',
      },
    ],
  },
  {
    title: 'Footstep Tracking',
    icon: FootstepsIcon,
    type: 'item',
    url: '/admin/footstep-tracking',
  },
  {
    title: 'Reports',
    icon: ReportsIcon,
    type: 'item',
    url: '/admin/reports',
  },
  {
    icon: NotificationIcon,
    title: 'Notifications',
    type: 'item',
    url: '/admin/notifications',
  },
  {
    title: 'Profile',
    icon: UserIcon,
    type: 'item',
    url: '/admin/profile',
  },
  {
    title: 'Settings',
    type: 'item',
    icon: SettingsIcon,
    url: '/admin/settings',
  },
]

const AdminSidebar = (props: IBaseComp) => {
  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link href="/admin">
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">
                    eCOOP
                  </span>
                  <span className="truncate text-xs text-muted-foreground/80">
                    Admin
                  </span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent className="ecoop-scroll">
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {adminSidebarItem.map((navItem, index) => (
                <AppSidebarItem
                  key={index}
                  navItem={{ ...navItem, depth: 1 }}
                />
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      {/* <SidebarFooter> */}
      {/* <AppSidebar /> */}
      {/* </SidebarFooter> */}
      <SidebarRail />
    </Sidebar>
  )
}

export default AdminSidebar