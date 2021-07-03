import HeadFile from '../components/head-file'
import React, { FC, useState, useContext, useEffect, Fragment } from 'react'
import { toast } from 'react-toastify'
import API from '../lib/api'
import { navigate } from '../lib'
import Layout from '../components/layout'
import { Footer } from '../components/footer'

export const Login: FC = () => {
  return (
    <Layout pagename="home">
      <HeadFile title="Drifan" />

      {/* PAGE CONTENT HERE... */}
      <div className="w-full" style={{ paddingTop: '80px' }}>
        {/* Hero section */}
        <div className="grid justify-items-center pt-20 md:pt-24 bg-white px-4 lg:px-0">
          <div className="text-center">
            <h1 className="text-5xl font-semibold text-dark-900">
              What if your post could save a life?
            </h1>
            <p className="text-lg text-gray-600">
              Drifan is a community that shows and allows you to post road alerts and events near
              you in real time
            </p>
          </div>

          <div className="mt-28">
            <img className="md:px-96" src="/img/illustration_01.svg" alt="Illustration" />
          </div>

          <div className="mt-20 mb-28 space-x-4 text-center">
            <button
              type="button"
              className="mx-auto rounded-md shadow-sm py-3 px-8 bg-blue text-base text-white focus:outline-none focus:ring-2 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
            >
              Explore
            </button>
            <button
              type="button"
              className="mx-auto rounded-md shadow-sm py-3 px-8 bg-white border border-blue text-base text-blue focus:outline-none focus:ring-2 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
            >
              Sign up
            </button>
          </div>
        </div>

        {/* how it works section */}
        <div className="grid justify-items-center px-4 lg:px-0">
          <div className="mt-10 mb-24">
            <h2 className="text-4xl font-semibold text-center text-dark-900">How it works</h2>
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 mt-10">
              <div className="relative mx-auto mr-0 my-auto">
                <img
                  className="my-auto rounded-xl w-full"
                  src="/img/preview.jpg"
                  alt="Preview for how it works"
                />
              </div>

              <div className="w-full lg:w-3/4 rounded-xl bg-white">
                <div className="flex flex-row px-6 md:px-12 py-6 hover:bg-blue hover:text-white rounded-t-xl space-x-6 md:space-x-10">
                  <div className="w-2/7">
                    <div
                      className="flex flex-wrap content-center"
                      style={{
                        position: 'static',
                        width: '96px',
                        height: '96px',
                        left: '48px',
                        top: '24px',
                        background: '#F4F5F7',
                        borderRadius: '100px',
                        flex: 'none',
                        order: 0,
                        flexGrow: 0,
                        margin: '0px auto'
                      }}
                      id="box_btn"
                    >
                      <img
                        className="w-8 h-8 m-auto items-center"
                        src="/icons/eye.svg"
                        alt="Message Us"
                      />
                    </div>
                  </div>
                  <div className="w-5/7 my-auto">
                    <p className="text-sm md:text-base">
                      Post or view local road alerts and events in real time for timely intervention
                      and accident prevention
                    </p>
                  </div>
                </div>

                <div className="flex flex-row px-6 md:px-12 py-6 hover:bg-blue hover:text-white space-x-6 md:space-x-10">
                  <div className="w-2/7">
                    <div
                      className="flex flex-wrap content-center"
                      style={{
                        position: 'static',
                        width: '96px',
                        height: '96px',
                        left: '48px',
                        top: '24px',
                        background: '#F4F5F7',
                        borderRadius: '100px',
                        flex: 'none',
                        order: 0,
                        flexGrow: 0,
                        margin: '0px auto'
                      }}
                      id="box_btn"
                    >
                      <img
                        className="w-8 h-8 m-auto items-center"
                        src="/icons/phone.svg"
                        alt="Message Us"
                      />
                    </div>
                  </div>
                  <div className="w-5/7 my-auto">
                    <p className="text-sm md:text-base">
                      Access to emergency numbers on or off line
                    </p>
                  </div>
                </div>

                <div className="flex flex-row px-6 md:px-12 py-6 hover:bg-blue hover:text-white space-x-6 md:space-x-10">
                  <div className="w-2/7">
                    <div
                      className="flex flex-wrap content-center"
                      style={{
                        position: 'static',
                        width: '96px',
                        height: '96px',
                        left: '48px',
                        top: '24px',
                        background: '#F4F5F7',
                        borderRadius: '100px',
                        flex: 'none',
                        order: 0,
                        flexGrow: 0,
                        margin: '0px auto'
                      }}
                      id="box_btn"
                    >
                      <img
                        className="w-8 h-8 m-auto items-center"
                        src="/icons/meter.svg"
                        alt="Message Us"
                      />
                    </div>
                  </div>
                  <div className="w-5/7 my-auto">
                    <p className="text-sm md:text-base">
                      Self pace road safety trainings, car maintenance hacks for newbies and
                      existing drivers to make them safe and up to date with new trends and
                      regulations in a drivers world.
                    </p>
                  </div>
                </div>

                <div className="flex flex-row px-6 md:px-12 py-6 hover:bg-blue hover:text-white rounded-b-xl space-x-6 md:space-x-10">
                  <div className="w-2/7">
                    <div
                      className="flex flex-wrap content-center"
                      style={{
                        position: 'static',
                        width: '96px',
                        height: '96px',
                        left: '48px',
                        top: '24px',
                        background: '#F4F5F7',
                        borderRadius: '100px',
                        flex: 'none',
                        order: 0,
                        flexGrow: 0,
                        margin: '0px auto'
                      }}
                      id="box_btn"
                    >
                      <img
                        className="w-8 h-8 m-auto items-center"
                        src="/icons/star.svg"
                        alt="Message Us"
                      />
                    </div>
                  </div>
                  <div className="w-5/7 my-auto">
                    <p className="text-sm md:text-base">
                      Earn points for inviting friends or by answering pop quizes and reedem them
                      for amazing prices
                    </p>
                  </div>
                </div>
              </div>
            </dl>
          </div>
        </div>

        {/* newsletter section */}
        <div className="grid justify-items-center px-4 lg:px-0 bg-gradient-to-b from-green-100 to-green-200">
          <div className="w-full py-16 md:px-40">
            <div className="md:px-48 py-16 md:flex">
              <img
                className="w-1/2 mx-auto md:mx-0 md:w-44 justify-start mb-14 md:mb-0"
                src="/icons/email-us.svg"
                alt=""
              />
              <div className="md:pl-32 text-center">
                <h2 className="text-5xl font-extrabold text-white mb-4 md:mb-8">Email Us</h2>

                <div className="flex items-center">
                  <input
                    className="appearance-none bg-white border-none w-full text-gray-700 py-3.5 px-2 leading-tight focus:outline-none rounded-l-md"
                    type="text"
                    placeholder="Your email address"
                    aria-label="Your email address"
                  />
                  <button
                    className="flex-shrink-0 bg-dark-900 text-sm text-white py-3.5 px-6 rounded-r-md"
                    type="button"
                  >
                    Email us
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* footer section */}
        <Footer />
      </div>
    </Layout>
  )
}

export default Login
