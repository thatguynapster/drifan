import { ReactNode } from 'react'

export interface ILayoutProps {
  pagename: string
  children: ReactNode
  navVariant?: string
}

export interface IHeaderProps {
  title: string
  canonical?: string
}

export interface INavbarProps {
  variant?: string
  pagename: string
}

export interface ITeamMemberProps {
  name: string
  image: string
  extra: string
}

export interface IChatUsProps {
  name: string
  icon: string
  link: string
}
