import '../styles/tailwindcss/tailwind.css'
import {AppWrapper} from "../components/UseContext"
import { SessionProvider } from "next-auth/react"
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import {DefaultSeo} from 'next-seo';

function MyApp({ Component, pageProps }) {
  const router=useRouter()
  
  return(
    <AppWrapper>
      <SessionProvider session={pageProps.session}>
      <DefaultSeo
                title="Periodic Table and Games"
                description="Interactive periodic table showing properties and tale trends. It has Game section which helps to know element and symbol,Electronic Configuration, Table trend, Family and Block with scoreboard o measyre progress with peers"
                openGraph={{
                    type: 'website',
                    locale: 'en_IE',
                    url: 'https://atableslive.com/',
                    siteName: 'Atableslive',
                }}
            />
      <Component {...pageProps} />
      </SessionProvider>
    
    </AppWrapper>
  )
 
  
}

export default MyApp
