import '../styles/tailwindcss/tailwind.css'
import {AppWrapper} from "../components/UseContext"
import { SessionProvider } from "next-auth/react"
import { useRouter } from 'next/router'
import { useEffect } from 'react'


function MyApp({ Component, pageProps }) {
  const router=useRouter()
  
  return(
    <AppWrapper>
      <SessionProvider session={pageProps.session}>
      <Component {...pageProps} />
      </SessionProvider>
    
    </AppWrapper>
  )
 
  
}

export default MyApp
