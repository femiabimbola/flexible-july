 // This code contain typescript
 
 import {getServerSession} from 'next-auth/next';
 import { NextAuthOptions, User} from 'next-auth';
 import { AdapterUser } from 'next-auth/adapters';
 import GoogleProvider from 'next-auth/providers/google';
 import { SessionInterface, UserProfile } from '@/common.types';
 import jsonwebtoken from 'jsonwebtoken';
 import { JWT } from 'next-auth/jwt';
import { createUser, getUser } from './actions';

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
      // async session({ session }){ return session},


      // The return for signIn as to be true or false
      async signIn({ user } : { user: AdapterUser | User })
      {
        try {
          const userExist = await getUser(user?.email as string) as {user?: UserProfile}
          // If they don't exist, create them
          if (!userExist.user) await createUser( user?.name as string, user?.email as string, user.image as string)
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