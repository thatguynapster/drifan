/* This example requires Tailwind CSS v2.0+ */
import { Fragment, FC } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { INavbarProps } from '../types'

// export default function Navbar() {
export const Navbar: FC<INavbarProps> = ({ variant, pagename }) => {
  console.log(pagename)

  let navType: string = '',
    textColor: string = '',
    logo: string = ''
  switch (variant) {
    case 'blue':
      navType = 'bg-blue text-white'
      textColor = 'text-white'
      logo = '/img/logo-white.png'
      break
    default:
      navType = 'bg-white text-gray-900'
      textColor = 'text-gray-900'
      logo = '/icons/logo.svg'
  }

  return (
    // <div className="fixed">
    <Popover className={`fixed inset-x-0 z-50 ${navType}`}>
      {({ open }) => (
        <>
          <div className="max-w-screen-lg mx-auto px-4 sm:px-6">
            <div className="flex justify-between items-center h-20 md:justify-start md:space-x-10">
              <div className="flex justify-start lg:w-0 lg:flex-1">
                <span className="sr-only">Drifan</span>
                <img className="h-auto md:w-1/5 cursor-pointer" src={logo} alt="" />
              </div>
              <div className="-mr-2 -my-2 md:hidden">
                <Popover.Button
                  className={`${navType} rounded-md p-2 inline-flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500`}
                >
                  <span className="sr-only">Open menu</span>
                  <MenuIcon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>

              <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                <Popover.Group as="nav" className="hidden md:flex space-x-5">
                  {pagename !== 'home' && (
                    <a href="#" className="text-base font-semibold capitalize">
                      how it works
                    </a>
                  )}
                  <a href="#" className="text-base font-semibold">
                    About Us
                  </a>
                  <a href="#" className="text-base font-semibold">
                    Contact Us
                  </a>
                  <a href="#" className="text-base font-semibold">
                    Our team &amp; Partners
                  </a>
                </Popover.Group>
              </div>
            </div>
          </div>

          <Transition
            show={open}
            as={Fragment}
            enter="duration-200 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Popover.Panel
              focus
              static
              className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
            >
              <div
                className={`rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 ${navType} divide-y-2 divide-gray-50`}
              >
                <div className="pt-5 pb-6 px-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <img className="h-auto w-1/4" src={logo} alt="Workflow" />
                    </div>
                    <div className="-mr-2">
                      <Popover.Button
                        className={`${navType} rounded-md p-2 inline-flex items-center justify-center  focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500`}
                      >
                        <span className="sr-only">Close menu</span>
                        <XIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                  <div className="mt-6">
                    <nav className="grid gap-y-8">
                      {pagename !== 'home' && (
                        <a
                          href="#"
                          className={`-m-3 p-3 flex items-center rounded-md hover:bg-gray-50`}
                        >
                          <span className={`ml-3 text-base font-medium capitalize ${textColor}`}>
                            how it works
                          </span>
                        </a>
                      )}
                      <a
                        href="#"
                        className={`-m-3 p-3 flex items-center rounded-md hover:bg-gray-50`}
                      >
                        <span className={`ml-3 text-base font-medium capitalize ${textColor}`}>
                          about us
                        </span>
                      </a>
                      <a
                        href="#"
                        className={`-m-3 p-3 flex items-center rounded-md hover:bg-gray-50`}
                      >
                        <span className={`ml-3 text-base font-medium capitalize ${textColor}`}>
                          contact us
                        </span>
                      </a>
                      <a
                        href="#"
                        className={`-m-3 p-3 flex items-center rounded-md hover:bg-gray-50`}
                      >
                        <span className={`ml-3 text-base font-medium capitalize ${textColor}`}>
                          our team &amp; partners
                        </span>
                      </a>
                    </nav>
                  </div>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
    // </div>
  )
}
