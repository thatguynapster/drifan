import React, { FC } from 'react'
import { Navbar } from '../components/navbar'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { ILayoutProps } from '../types'
import ChatUs from '../components/chat'
import { useEffect } from 'react'

const Layout: FC<ILayoutProps> = ({ pagename, children, navVariant }) => {
  // console.log(userDetails)
  // console.log("data in layout")

  useEffect(() => {
    if (process.browser) {
      console.log('adding g-tag')
      window.dataLayer = window.dataLayer || []
      function gtag() {
        dataLayer.push(arguments)
      }
      gtag('js', new Date())

      gtag('config', 'G-BPXLJF62DP')
      console.log(gtag, 'added g-tag')
    }
  }, [])

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

      {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-BPXLJF62DP"></script>
    </>
  )
}

export default Layout
