/* This example requires Tailwind CSS v2.0+ */
import { Fragment, FC } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { INavbarProps } from '../types'
import { useGlobalScroll } from '../utils/window-events'
import { useState } from 'react'
import { useEffect } from 'react'

// export default function Navbar() {
export const Navbar: FC<INavbarProps> = ({ variant, pagename }) => {
  console.log(pagename)
  const [navScroll, setNavScroll] = useState<boolean>(false)
  const [navVariant, setNavVariant] = useState<string | undefined>(variant)
  const [navType, setNavType] = useState<string>('')
  const [textColor, setTextColor] = useState<string>('')
  const [logo, setLogo] = useState<string>('')
  const [linkActive, setLinkActive] = useState<string>('')

  useEffect(() => {
    console.log(navVariant)
    switch (navVariant) {
      case 'blue':
        setNavType('bg-blue text-white')
        setTextColor('text-white')
        setLinkActive('font-bold')
        setLogo('/icons/logo-white.svg')
        break
      default:
        setNavType('bg-white text-gray-900')
        setTextColor('text-gray-900')
        setLinkActive('text-blue font-semibold')
        setLogo('/icons/logo.svg')
    }
  }, [navVariant])

  useGlobalScroll((ev: any) => {
    // console.log(ev.currentTarget)
    if (ev.currentTarget.pageYOffset > 60) {
      setNavScroll(true)
      // if (pagename !== 'contact') {
      setNavVariant('blue')
      setLinkActive('font-bold')
      //   console.log('nav is blue')
      // } else {
      //   // setNavVariant('white')
      //   console.log('nav is white')
      // }
    } else {
      setNavScroll(false)
      if (pagename !== 'contact') {
        setNavVariant('white')
        setLinkActive('text-blue font-semibold')
        console.log('nav is white')
      } else {
        setNavVariant('blue')
        console.log('nav is blue')
      }
    }
  })

  return (
    // <div className="fixed">
    <Popover className={`fixed inset-x-0 z-50 ${navScroll ? 'shadow-md' : ''} ${navType}`}>
      {({ open }) => (
        <>
          <div className="max-w-screen-lg mx-auto px-4 sm:px-6">
            <div className="flex justify-between items-center h-20 md:justify-start md:space-x-10">
              <div className="flex justify-start lg:w-0 lg:flex-1">
                <a href="/">
                  <span className="sr-only">Drifan</span>
                  <img className="cursor-pointer" src={logo} alt="" />
                </a>
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
                  <a href="/how-it-works" className={`text-base capitalize ${linkActive}`}>
                    how it works
                  </a>
                  <a href="/about" className="text-base capitalize">
                    About Us
                  </a>
                  <a href="/contact" className="text-base capitalize">
                    Contact Us
                  </a>
                  <a href="/team" className="text-base capitalize">
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
                    <a href="/">
                      <span className="sr-only">Drifan</span>
                      <img className="h-auto w-full" src={logo} alt="Workflow" />
                    </a>
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
                      <a
                        href="/how-it-works"
                        className={`-m-3 p-3 flex items-center rounded-md hover:bg-gray-50`}
                      >
                        <span className={`ml-3 text-base font-medium capitalize ${textColor}`}>
                          how it works
                        </span>
                      </a>
                      <a
                        href="/about"
                        className={`-m-3 p-3 flex items-center rounded-md hover:bg-gray-50`}
                      >
                        <span className={`ml-3 text-base font-medium capitalize ${textColor}`}>
                          about us
                        </span>
                      </a>
                      <a
                        href="/contact"
                        className={`-m-3 p-3 flex items-center rounded-md hover:bg-gray-50`}
                      >
                        <span className={`ml-3 text-base font-medium capitalize ${textColor}`}>
                          contact us
                        </span>
                      </a>
                      <a
                        href="/team"
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
