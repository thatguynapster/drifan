import HeadFile from '../components/head-file'
import React, { FC } from 'react'
import Layout from '../components/layout'
import { Footer } from '../components/footer'

const Contact: FC = () => {
  return (
    <Layout pagename="contact" navVariant="blue">
      <HeadFile title="Drifan" />

      <div className="pt-20 md:pt-24 pb-44 md:pb-32 bg-blue px-4 lg:px-52">
        <h1 className="text-4xl text-white text-center font-semibold">Get in touch</h1>
        <div
          className="mt-14 md:mt-24 md:mx-auto rounded-xl py-12 px-10 bg-white"
          style={{ maxWidth: '580px' }}
        >
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
            <input
              type="email"
              name="email"
              id="email"
              className="w-full mt-1 shadow-sm p-4 sm:text-sm md:text-base text-gray-600 bg-gray-100 border-gray-100 rounded-lg focus:outline-none"
              placeholder="Your Email"
            />
          </div>

          <div className="mb-8">
            <label htmlFor="price" className="block text-base font-semibold text-blue">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              rows={2}
              className="w-full mt-1 shadow-sm p-4 sm:text-sm md:text-base text-gray-600 bg-gray-100 border-gray-100 rounded-lg focus:outline-none"
              placeholder="Your Message"
            />
          </div>

          <div>
            <a
              href="#"
              className="w-full whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-lg shadow-sm text-base font-medium text-white bg-blue"
            >
              Send Message
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </Layout>
  )
}

export default Contact
