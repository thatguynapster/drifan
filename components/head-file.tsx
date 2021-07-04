import Head from 'next/head'
import { FC } from 'react'
import { NextSeo } from 'next-seo'
import { IHeaderProps } from '../types'

import { SEOConfig } from '../configs/global_variables'

export const HeadFile: FC<IHeaderProps> = ({ title, canonical }) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        {/* <meta name="keywords" content="" /> */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={'true'} />
        <link
          href="https://fonts.googleapis.com/css2?family=Baloo+2:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <link rel="prefetch" href="/icons/logo.svg" />
        <link rel="prefetch" href="/icons/logo-white.svg" />
      </Head>

      <NextSeo
        title={title || SEOConfig.title}
        description={SEOConfig.description}
        canonical={canonical || SEOConfig.canonical}
        openGraph={{
          title: title || SEOConfig.title,
          description: SEOConfig.description,
          url: SEOConfig.canonical || process.env.NEXT_PUBLIC_BASE_URL,
          locale: SEOConfig.locale,
          site_name: SEOConfig.site_name
        }}
      />
    </>
  )
}

export default HeadFile
