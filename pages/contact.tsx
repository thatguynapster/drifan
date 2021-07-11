import HeadFile from '../components/head-file'
import React, { FC } from 'react'
import Layout from '../components/layout'
import { Footer } from '../components/footer'
import { useState } from 'react'
import { mkPostReq, validateEmail } from '../lib'
import { sendEmail } from '../utils/api-requests'
import { toast } from 'react-toastify'

const Contact: FC = () => {
  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [message, setMessage] = useState<string>('')

  async function _handleEmail() {
    if (name === '') {
      toast.error('Please provide your name')
      return
    }
    if (!validateEmail(email)) {
      toast.error('Invalid Email Provided')
      return
    }
    let email_data = {
      name,
      email,
      message
    }
    console.log(email_data)

    let email_response = await sendEmail(email_data)
    console.log(email_response)
    if (email_response.code === 200) {
      toast.success('Message submitted')
    } else {
      toast.error('Failed to send message')
    }
    return
  }

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
                value={name}
                className="w-full p-4 sm:text-sm md:text-base text-gray-600 bg-gray-100 border-gray-100 rounded-lg focus:outline-none"
                placeholder="Your Name"
                onChange={(ev) => {
                  setName(ev.target.value)
                }}
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
              value={email}
              className="w-full mt-1 shadow-sm p-4 sm:text-sm md:text-base text-gray-600 bg-gray-100 border-gray-100 rounded-lg focus:outline-none"
              placeholder="Your Email"
              onChange={(ev) => {
                setEmail(ev.target.value)
              }}
            />
          </div>

          <div className="mb-8">
            <label htmlFor="price" className="block text-base font-semibold text-blue">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              value={message}
              rows={2}
              className="w-full mt-1 shadow-sm p-4 sm:text-sm md:text-base text-gray-600 bg-gray-100 border-gray-100 rounded-lg focus:outline-none"
              placeholder="Your Message"
              onChange={(ev) => {
                setMessage(ev.target.value)
              }}
            />
          </div>

          <div>
            <a
              href="#"
              className="w-full whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-lg shadow-sm text-base font-medium text-white bg-blue"
              onClick={(ev) => {
                ev.preventDefault()
                _handleEmail()
              }}
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
