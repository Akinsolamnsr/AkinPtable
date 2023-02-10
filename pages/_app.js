import '../styles/tailwindcss/tailwind.css'

import {AppWrapper} from "../components/UseContext"
import { SessionProvider } from "next-auth/react"


function MyApp({ Component, pageProps }) {
  
  return(
    <AppWrapper>
      <SessionProvider session={pageProps.session}>
      <Component {...pageProps} />
      </SessionProvider>
    
    </AppWrapper>
  )
 
  
}

export default MyApp
