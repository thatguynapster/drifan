import HeadFile from '../components/head-file'
import React, { FC } from 'react'
import Layout from '../components/layout'
import { Footer } from '../components/footer'
import { ITeamMemberProps } from '../types'

const Team: FC = () => {
  const teamMembers: ITeamMemberProps[] = []

  return (
    <Layout pagename="team">
      <HeadFile title="Drifan" />

      <div className="py-20 md:py-24 bg-white px-4 lg:px-52">
        <div className="text-center">
          <h1 className="text-4xl font-semibold text-gray-900">Our Team</h1>
          <p className="mt-8 md:mx-44 text-gray-600 text-justify">
            We are one happy diverse family, committed to ensuring we get the right things done
            through innovation, technology and open mindedness. We love to make an impact where ever
            we are in the world.
          </p>
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-semibold text-gray-900">Want to join the Drifan team?</h2>

          <button
            type="button"
            className="mt-8 mx-auto rounded-md shadow-sm py-3 px-8 bg-blue text-base text-white focus:outline-none focus:ring-2 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
          >
            Join us
          </button>
          <div className="grid md:grid-cols-2 gap-16">
            {teamMembers.map((_member, i) => {
              return (
                <div className="rounded-xl">
                  <div className="flex justify-start">
                    <img
                      className="w-44 h-44 mr-8 rounded-full"
                      src={_member.image}
                      alt={_member.name}
                    />
                    <div className="flex flex-col text-left">
                      <p className="text-lg font-semibold mt-4">{_member.name}</p>
                      <p className="text-gray-600">{_member.extra}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      <div className="pt-20 md:pt-24 pb-20 md:pb-24 px-4 lg:px-60 text-center">
        <h1 className="text-4xl font-semibold text-gray-900">Partners</h1>
        <p className="text-gray-600">
          Our Partners have invested greatly in us because they believe in what we are doing.
        </p>

        <div className="flex flex-wrap md:justify-between mt-14">
          <img
            className="mb-12 md:mb-0 mx-auto"
            src="/img/partners/transport-ministry.png"
            alt="TRANSPORT MINISTRY"
          />
          <img
            className="mb-12 md:mb-0 mx-auto"
            src="/img/partners/enterprise-insurance.png"
            alt="ENTERPRISE INSURANCE"
          />
          <img
            className="mb-12 md:mb-0 mx-auto"
            src="/img/partners/road-safety.png"
            alt="GHANA ROAD SATEFY COMMISSION"
          />
          <img className="mb-12 md:mb-0 mx-auto" src="/img/partners/goil.png" alt="GOIL" />
          <img
            className="mb-12 md:mb-0 mx-auto"
            src="/img/partners/gcb.png"
            alt="GHANA COMMERCIAL BANK"
          />
          <img className="mb-12 md:mb-0 mx-auto" src="/img/partners/dvla.png" alt="DVLA" />
          <img
            className="mb-12 md:mb-0 mx-auto"
            src="/img/partners/ghana-police-service.png"
            alt="GHANA POLICE SERVICE"
          />
          <img className="mb-12 md:mb-0 mx-auto" src="/img/partners/gnpc.png" alt="GNPC" />
        </div>

        <div className="mt-28">
          <p className="text-center text-gray-600">
            Become a partner and let's save lives on our roads.
          </p>

          <div className="mt-10 space-x-4 text-center">
            <button
              type="button"
              className="mx-auto rounded-md shadow-sm py-3 px-8 bg-blue text-base text-white focus:outline-none focus:ring-2 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
            >
              Donate to Drifan
            </button>
            <button
              type="button"
              className="mx-auto rounded-md shadow-sm py-3 px-8 bg-white border border-blue text-base text-blue focus:outline-none focus:ring-2 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
            >
              Email us
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </Layout>
  )
}

export default Team
