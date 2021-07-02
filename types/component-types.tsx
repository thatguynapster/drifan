import { ReactNode, Dispatch, SetStateAction } from 'react'

export interface ILayoutProps {
  pagename: string
  children: ReactNode
  userDetails?: any
}

export interface IHeaderProps {
  title: string
  canonical?: string
}

export interface INavbarProps {
  variant?: string
  pagename: string
}
