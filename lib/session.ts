 // This code contain typescript
 
 import {getServerSession} from 'next-auth/next';
 import { NextAuthOptions, User} from 'next-auth';
 import { AdapterUser } from 'next-auth/adapters';
 import GoogleProvider from 'next-auth/providers/google';
 import { SessionInterface } from '@/common.types';
 import jsonwebtoken from 'jsonwebtoken';
 import { JWT } from 'next-auth/jwt';

//   This is ab object
 export const authOptions: NextAuthOptions =  {
    providers: [
      // The ! beside the google is saying it could be undefined
       GoogleProvider({
        clientId:process.env.GOOGLE_CLIENT_ID!, 
        clientSecret:process.env.GOOGLE_CLIENT_SECRET!
      })],
    // jwt:{ 
    //   encode:({secret, token}) => { },
    //   decode: async ({secret, token}) => { }
    // },
    // theme:{
    //   colorScheme: 'light',
    //   logo:'/logo.png'
    // },
    callbacks: {
      async session({ session }){ return session},
      async signIn({ user } : { user: AdapterUser | User })
      {
        try {
          // get the user if they exist
          // If they don't exist, create them
          return true;
        } catch(error:any){
          console.log(error);
          return false;
        }
      }
    }
 }

 export async function getCurrentUser () {
  const session = await getServerSession(authOptions) as SessionInterface;
  // Treat the getServerSession as a type of sessioninterface
  return session;
 }