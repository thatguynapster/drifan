import { ReactNode, Dispatch, SetStateAction } from 'react'

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
