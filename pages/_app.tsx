import type { AppProps } from 'next/app'

/** Global css */
import '../styles/globals.css'

/** dependency styles */
import 'react-toastify/dist/ReactToastify.css'
import '../public/css/style.css'
import 'cropperjs/dist/cropper.css'
import 'react-phone-input-2/lib/style.css'
import '../public/css/scrollbar.css'

/** Global components */
import { ToastContainer } from 'react-toastify'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

import * as gtag from '../utils/gtag';

// This default export is required in a new `pages/_app.js` file.
export const Main = ({ Component, pageProps }: AppProps) => {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url: URL) => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <>
      <Component {...pageProps} />
      <ToastContainer
        autoClose={2000}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={false}
        limit={1}
      />
    </>
  )
}

export default Main
