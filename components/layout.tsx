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
        <div className="flex flex-row justify-start"> {children} </div>
      </div>
    </>
  )
}

export default Layout
