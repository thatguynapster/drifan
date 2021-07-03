import React, { FC } from 'react'
import { Navbar } from '../components/navbar'
import { ILayoutProps } from '../types'

const Layout: FC<ILayoutProps> = ({ pagename, children, userDetails }) => {
  // console.log(userDetails)
  // console.log("data in layout")

  return (
    <>
      <Navbar variant="blu" pagename={pagename} />
      <div
        className="container-fluid min-h-screen overflow-y-auto"
        style={{ backgroundColor: '#F9F9F9' }}
      >
        <div className="flex flex-row justify-start">
          {children}
          <div
            className="fixed bottom-0 right-0 mr-11 mb-11 cursor-pointer bg-gray-100 rounded-full p-3"
            id="box_btn"
          >
            <img className="w-8 h-8 mx-auto" src="/icons/messages.svg" alt="Message Us" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Layout
