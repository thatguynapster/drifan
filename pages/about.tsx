import HeadFile from '../components/head-file'
import React, { FC } from 'react'
import Layout from '../components/layout'
import { Footer } from '../components/footer'

const Contact: FC = () => {
  return (
    <Layout pagename="about">
      <HeadFile title="Drifan" />

      <div className="pt-20 md:pt-24 pb-36 md:pb-32 bg-white px-4 lg:px-96">
        <div className="md:mx-28">
          <img className="w-full" src="/img/family.svg" alt="" />
        </div>

        <div className="mt-16 md:mt-20 text-center">
          <h1 className="text-4xl font-semibold text-gray-900">Our Vision</h1>
          <p className="mt-8 text-gray-600">
            To create a community that is road safety alert and committed to ensuring everyone stays
            safe as a road user
          </p>

          <button
            type="button"
            className="mt-8 mx-auto rounded-md shadow-sm py-3 px-8 bg-blue text-base text-white focus:outline-none focus:ring-2 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
          >
            Email us
          </button>
        </div>
      </div>

      <div className="pt-20 md:pt-24 pb-32 px-4 lg:px-96 text-center">
        <h1 className="text-4xl font-semibold text-gray-900">Our Story</h1>
        <div className="mt-10">
          <p className="text-justify text-gray-600">
            As a road safety organisation in Africa, we started getting videos and calls from the
            locals on road hazards they encountered on daily basis. We saw the need for a platform
            that will be dedicated to the local community to post or view road alerts in real time
            to warn other road users and get timely intervention of the authorities to help reduce
            road traffic crashes. Difan was born in 2020 to do just that.
          </p>
          <br />
          <p className="text-justify text-gray-600">
            In 2020, Drifan was born to do that and in addition, we added a platform where new and
            exsiting drivers can access self pace driver and road safety trainings to make them
            safer and keep them upto date on new trends and regulations in a drivers world.
          </p>
        </div>
      </div>

      <Footer />
    </Layout>
  )
}

export default Contact
