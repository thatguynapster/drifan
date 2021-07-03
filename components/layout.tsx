import React, { FC } from 'react'
import { Navbar } from '../components/navbar'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { ILayoutProps } from '../types'
import ChatUs from '../components/chat'

const Layout: FC<ILayoutProps> = ({ pagename, children, navVariant }) => {
  // console.log(userDetails)
  // console.log("data in layout")

  return (
    <>
      <Navbar variant={navVariant} pagename={pagename} />
      <div
        className="container-fluid min-h-screen overflow-y-auto"
        style={{ backgroundColor: '#F9F9F9' }}
      >
        <div className="flex flex-row justify-start">
          <div className="w-full" style={{ paddingTop: '80px' }}>
            {children}
            <ChatUs />
          </div>
        </div>
      </div>
    </>
  )
}

export default Layout
