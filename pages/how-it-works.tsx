import HeadFile from '../components/head-file'
import React, { FC, useState, useContext, useEffect, Fragment } from 'react'
import { toast } from 'react-toastify'
import API from '../lib/api'
import { navigate } from '../lib'
import Layout from '../components/layout'
import { Footer } from '../components/footer'

const HowItWorks: FC = () => {
  return (
    <Layout pagename="how-it-works">
      <HeadFile title="Drifan" />

      {/* PAGE CONTENT HERE... */}
      {/* <div className="pt-24 pb-32 px-52 bg-blue"> */}
      {/* <div className="pt-24 md:pt-20 pb-44 md:pb-32 bg-white px-4 lg:px-52"> */}
      <div className="pt-24 md:pt-20 pb-44 md:pb-32 bg-white px-4 lg:px-96">
        <h1 className="text-4xl text-dark-900 text-center font-semibold">How it works</h1>
        <div className="mt-20">
          <div className="grid md:grid-cols-2 gap-x-20 gap-y-20">
            <div className="bg-gray-100 rounded-xl">
              <div className="mx-6 my-10">
                <img className="w-full mb-14" src="/icons/share-content.svg" alt="Share Content" />
                <p className="text-2xl font-semibold mb-6">Share content</p>
                <p className="text-gray-600">
                  Post or view local road alerts and events in real time for timely intervention and
                  accident prevention
                </p>
              </div>
            </div>
            <div className="bg-gray-100 rounded-xl">
              <div className="mx-6 my-10">
                <img className="w-full mb-14" src="/icons/emergency.svg" alt="Share Content" />
                <p className="text-2xl font-semibold mb-6">Emergency</p>
                <p className="text-gray-600">Access to emergency numbers on or off line</p>
              </div>
            </div>
            <div className="bg-gray-100 rounded-xl">
              <div className="mx-6 my-10">
                <img className="w-full mb-14" src="/icons/share-content-2.svg" alt="Share Content" />
                <p className="text-2xl font-semibold mb-6">Share content</p>
                <p className="text-gray-600">
                  Post or view local road alerts and events in real time for timely intervention and
                  accident prevention
                </p>
              </div>
            </div>
            <div className="bg-gray-100 rounded-xl">
              <div className="mx-6 my-10">
                <img
                  className="w-full mb-14"
                  src="/icons/rewards.svg"
                  alt="Share Content"
                />
                <p className="text-2xl font-semibold mb-6">Rewards</p>
                <p className="text-gray-600">
                Earn points for inviting friends or by answering pop quizes and reedem them for amazing prices
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}

      {/* footer section */}
      <Footer />
    </Layout>
  )
}

export default HowItWorks
