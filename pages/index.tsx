import HeadFile from '../components/head-file'
import React, { FC, useState, useContext, useEffect } from 'react'
import { toast } from 'react-toastify'
import API from '../lib/api'
import { navigate } from '../lib'
import Layout from '../components/layout'

export const Login: FC = () => {
  const initialize = () => {}

  useEffect(() => {
    initialize()
  }, [])

  return (
    <Layout pagename="home">
      <HeadFile title="Drifan" />

      {/* PAGE CONTENT HERE... */}
      <p className="text-swooveBlue">Some text</p>
    </Layout>
  )
}

export default Login
