import HeadFile from '../components/head-file'
import React, { FC } from 'react'
import Layout from '../components/layout'
import { Footer } from '../components/footer'
import { useState } from 'react'

const Login: FC = () => {
  const [selectedFeature, setSelectedFeature] = useState<string>('share')
  const [selectedFeatureImage, setSelectedFeatureImage] = useState<string>('/img/share-content.svg')

  return (
    <Layout pagename="home">
      <HeadFile title="Drifan" />

      {/* Hero section */}
      <div className="bg-white">
        <div className="grid justify-items-center pt-4 lg:pt-16 bg-hero-pattern px-4 lg:px-0">
          <div className="text-center">
            <h1 className="text-5xl font-semibold text-dark-900">
              What if your post could save a life?
            </h1>
            <p className="text-lg text-gray-600">
              Difan is a community platform for posts and views of road alerts and events in real
              time
            </p>
          </div>

          <div className="mt-16 lg:mt-28">
            <img
              className="w-full h-auto xl:px-96"
              src="/img/illustration_01.svg"
              alt="Illustration"
              width={694}
              height={394}
            />
          </div>

          <div className="mt-8 lg:mt-20 mb-12 lg:mb-28 space-x-2 sm:space-x-4 text-center">
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
      </div>

      {/* how it works section */}
      <div className="mt-10 mb-24">
        <div className="grid justify-items-center px-4 lg:px-0">
          <h2 className="text-4xl font-semibold text-center text-dark-900">How it works</h2>
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 mt-10">
            <div className="relative mx-auto mr-0 my-auto bg-white rounded-xl w-full lg:w-4/5 xl:w-2/3 px-6 py-10">
              <img
                className="my-auto rounded-xl w-full"
                src={selectedFeatureImage}
                alt="Preview for how it works"
              />
            </div>

            <div className="w-full lg:w-3/4 rounded-xl bg-white cursor-pointer">
              <div
                className={`flex flex-row px-6 md:px-12 py-6 ${
                  selectedFeature === 'share' ? 'bg-blue text-white ' : ''
                }hover:bg-blue hover:text-white rounded-t-xl space-x-6 md:space-x-10`}
                onClick={() => {
                  setSelectedFeature('share')
                  setSelectedFeatureImage('/img/share-content.svg')
                }}
              >
                <div
                  className="flex flex-wrap content-center w-20 lg:w-24 h-20 lg:h-24 my-auto"
                  style={{
                    position: 'static',
                    left: '48px',
                    top: '24px',
                    background: '#F4F5F7',
                    borderRadius: '100px',
                    flex: 'none',
                    order: 0,
                    flexGrow: 0
                  }}
                >
                  <img
                    className="w-8 h-8 m-auto items-center"
                    src="/icons/eye.svg"
                    alt="Message Us"
                  />
                </div>
                <div className="my-auto">
                  <p className="text-sm md:text-base">
                    Post or view local road alerts and events in real time for timely intervention
                    and accident prevention
                  </p>
                </div>
              </div>

              <div
                className={`flex flex-row px-6 md:px-12 py-6 ${
                  selectedFeature === 'emergency' ? 'bg-blue text-white ' : ''
                }hover:bg-blue hover:text-white space-x-6 md:space-x-10`}
                onClick={() => {
                  setSelectedFeature('emergency')
                  setSelectedFeatureImage('/img/emergency.svg')
                }}
              >
                <div
                  className="flex flex-wrap content-center w-20 lg:w-24 h-20 lg:h-24 my-auto"
                  style={{
                    position: 'static',
                    left: '48px',
                    top: '24px',
                    background: '#F4F5F7',
                    borderRadius: '100px',
                    flex: 'none',
                    order: 0,
                    flexGrow: 0
                  }}
                >
                  <img
                    className="w-8 h-8 m-auto items-center"
                    src="/icons/phone.svg"
                    alt="Message Us"
                  />
                </div>
                <div className="my-auto">
                  <p className="text-sm md:text-base">Access to emergency numbers on or off line</p>
                </div>
              </div>

              <div
                className={`flex flex-row px-6 md:px-12 py-6 ${
                  selectedFeature === 'share-2' ? 'bg-blue text-white ' : ''
                }hover:bg-blue hover:text-white space-x-6 md:space-x-10`}
                onClick={() => {
                  setSelectedFeature('share-2')
                  setSelectedFeatureImage('/img/share-content-2.svg')
                }}
              >
                <div
                  className="flex flex-wrap content-center w-20 lg:w-24 h-20 lg:h-24 my-auto"
                  style={{
                    position: 'static',
                    left: '48px',
                    top: '24px',
                    background: '#F4F5F7',
                    borderRadius: '100px',
                    flex: 'none',
                    order: 0,
                    flexGrow: 0
                  }}
                >
                  <img
                    className="w-8 h-8 m-auto items-center"
                    src="/icons/meter.svg"
                    alt="Message Us"
                  />
                </div>
                <div className="my-auto">
                  <p className="text-sm md:text-base">
                    Self pace road safety trainings, car maintenance hacks for newbies and existing
                    drivers to make them safe and up to date with new trends and regulations in a
                    drivers world.
                  </p>
                </div>
              </div>

              <div
                className={`flex flex-row px-6 md:px-12 py-6 ${
                  selectedFeature === 'rewards' ? 'bg-blue text-white ' : ''
                }hover:bg-blue hover:text-white rounded-b-xl space-x-6 md:space-x-10`}
                onClick={() => {
                  setSelectedFeature('rewards')
                  setSelectedFeatureImage('/img/rewards.svg')
                }}
              >
                <div
                  className="flex flex-wrap content-center w-20 lg:w-24 h-20 lg:h-24 my-auto"
                  style={{
                    position: 'static',
                    left: '48px',
                    top: '24px',
                    background: '#F4F5F7',
                    borderRadius: '100px',
                    flex: 'none',
                    order: 0,
                    flexGrow: 0
                  }}
                >
                  <img
                    className="w-8 h-8 m-auto items-center"
                    src="/icons/star.svg"
                    alt="Message Us"
                  />
                </div>
                <div className="my-auto">
                  <p className="text-sm md:text-base">
                    Earn points for inviting friends or by answering pop quizes and reedem them for
                    amazing prices
                  </p>
                </div>
              </div>
            </div>
          </dl>
        </div>
      </div>

      {/* newsletter section */}
      <div className="grid justify-items-center px-4 lg:px-0 bg-gradient-to-b from-green-100 to-green-200">
        <div className="w-full lg:py-16 md:px-16 md:px-40">
          <div className="xl:pl-48 xl:pr-11 py-16 lg:flex justify-center">
            <img
              className="w-1/2 mx-auto lg:mx-0 lg:w-44 justify-start mb-14 lg:mb-0"
              src="/img/developer.svg"
              alt=""
            />
            <div className="lg:pl-12 text-center lg:text-left">
              <h2 className="text-5xl font-extrabold text-white">Become a road safety partner</h2>
              <p className="text-white">
                Connect our Api to your website and join the millions to save lives on our roads.
              </p>
              <button
                type="button"
                className="mt-8 mx-auto rounded-md shadow-sm py-3 px-8 bg-dark-900 text-base text-white focus:outline-none sm:w-auto sm:text-sm"
              >
                API Integration
              </button>

              {/* <div className="flex items-center">
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
              </div> */}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </Layout>
  )
}

export default Login
