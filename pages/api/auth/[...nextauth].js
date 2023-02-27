import nextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import { MongoDBAdapter } from "@next-auth/mongodb-adapter"
import clientPromise from "../../..//pages/api//lib/mongodb"
  export const authOptions = {
    adapter: MongoDBAdapter(clientPromise),
    // Configure one or more authentication providers
    providers: [
        GoogleProvider({
            clientId:process.env.NEXT_PUBLIC_client_ID, 
            clientSecret:process.env.NEXT_PUBLIC_clientSecret,
          }),
          
    ], 
    callbacks:{
        async signIn({ user, account, profile, email, credentials }) {
            return true
          },
          async session({ session, user, token }) {
            console.log(user)

            return session
          },
      },
    NEXTAUTH_URL:"http://localhost",
    secret:"hbuhyfytcdytfk"
  }
  export default nextAuth(authOptions)