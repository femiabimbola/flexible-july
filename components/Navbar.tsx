import Link from 'next/link';
import Image from 'next/image';
import { NavLinks } from '@/constant';
import AuthProviders from './AuthProviders';
import { getCurrentUser } from '@/lib/session';
import ProfileMenu from './ProfileMenu';
import { signOut } from 'next-auth/react';


const Navbar = async () => {
  const session = await getCurrentUser();

  return (
    <nav className='flexBetween navbar'>
      <div className='flex-1 flexStart gap-10'>
        <Link href={'/'}>
          <Image width={115} alt='flexible' height={43} src='/logo.svg' />
        </Link>
        {/* Desktop mode */}
        <ul className='xl:flex hidden text-small gap-7'>
          {NavLinks.map((link) => (
            <Link href={link.href} key={link.key}> {link.text} </Link>
          ))}
        </ul>
      </div>
      <div className='flexCenter gap-4'>
        {/* show login or how to log in  */}
        {/* The session alone means it will always exist */}
        {session?.user ? (
          <>
            <ProfileMenu session={session} />
            <Link href={"/create-project"}>
              Share Work
            </Link>
          </>
        ) : (<AuthProviders />)}
      </div>
    </nav>
  )
}

export default Navbar