import HeadFile from '../components/head-file'
import React, { FC, useState, useContext, useEffect, Fragment } from 'react'
import { toast } from 'react-toastify'
import API from '../lib/api'
import { navigate } from '../lib'
import Layout from '../components/layout'
import { Footer } from '../components/footer'

export const Login: FC = () => {
  return (
    <Layout pagename="home" navVariant="blue">
      <HeadFile title="Drifan" />

      {/* PAGE CONTENT HERE... */}
      <div className="pt-24 pb-32 px-52 bg-blue">
        <h1 className="text-4xl text-white text-center font-semibold">Get in touch</h1>
        <div className="mt-24 mx-56 rounded-xl py-12 px-10 bg-white">
          <div className="mb-8">
            <label htmlFor="price" className="block text-base font-semibold text-blue">
              Your name
            </label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <input
                type="text"
                name="name"
                id="name"
                className="w-full p-4 sm:text-sm md:text-base text-gray-600 bg-gray-100 border-gray-100 rounded-lg focus:outline-none"
                placeholder="Your Name"
              />
            </div>
          </div>

          <div className="mb-8">
            <label htmlFor="price" className="block text-base font-semibold text-blue">
              Your email
            </label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <input
                type="email"
                name="email"
                id="email"
                className="w-full p-4 sm:text-sm md:text-base text-gray-600 bg-gray-100 border-gray-100 rounded-lg focus:outline-none"
                placeholder="Your Email"
              />
            </div>
          </div>

          <div className="mb-8">
            <label htmlFor="price" className="block text-base font-semibold text-blue">
              Message
            </label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <textarea
                name="name"
                id="name"
                rows={2}
                className="w-full p-4 sm:text-sm md:text-base text-gray-600 bg-gray-100 border-gray-100 rounded-lg focus:outline-none"
                placeholder="Your Message"
              />
            </div>
          </div>
        </div>
      </div>

      {/* footer section */}
      <Footer />
    </Layout>
  )
}

export default Login
