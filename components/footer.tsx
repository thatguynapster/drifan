/* This example requires Tailwind CSS v2.0+ */
import { FC } from 'react'
import { navigate } from '../utils/functions'

export const Footer: FC = () => {
  return (
    <div className="grid justify-items-center px-4 lg:px-0 bg-blue">
      <div className="mt-10 mb-24 text-center">
        <h2
          className="w-full text-white font-bold text-4xl mb-8 cursor-pointer"
          onClick={() => {
            navigate('./')
          }}
        >
          Drifan
        </h2>
        {/* <p className="w-full text-white md:mx-auto md:w-96 mb-12">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
        </p> */}
        <div className="flex flex-col md:flex-row items-center justify-center space-y-14 md:space-y-0 md:space-x-14 text-white mb-14">
          <a href="/how-it-works" className="text-base">
            How it works
          </a>
          <a href="/about" className="text-base">
            About Us
          </a>
          <a href="/contact" className="text-base">
            Contact Us
          </a>
          <a href="/team" className="text-base">
            Our team &amp; Partners
          </a>
          <a href={process.env.NEXT_PUBLIC_PRIVACY_POLICY_LINK} className="text-base">
            Privacy Policy
          </a>
          <a href="#" className="text-base">
            Explore
          </a>
        </div>
        <div className="w-full flex items-center justify-center space-x-14 text-white">
          <a href={process.env.NEXT_PUBLIC_FACEBOOK} target="_blank" className="text-base">
            <img src="/icons/facebook.svg" alt="Facebook" />
          </a>
          <a href={process.env.NEXT_PUBLIC_TWITTER} target="_blank" className="text-base">
            <img src="/icons/twitter.svg" alt="Twitter" />
          </a>
          <a href={process.env.NEXT_PUBLIC_INSTAGRAM} target="_blank" className="text-base">
            <img src="/icons/instagram.svg" alt="Instagram" />
          </a>
        </div>
      </div>
    </div>
  )
}
