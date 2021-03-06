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

// This default export is required in a new `pages/_app.js` file.
export const Main = ({ Component, pageProps }: AppProps) => {
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
