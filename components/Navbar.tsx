import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
  return (
    <nav className='flexBetween navbar'>
      <div className='flex-1 flexStart gap-10'>
        <Link href={'/'}> 
          <Image width={115} alt='flexible' height={43} src='/logo.svg' />
        </Link>
      <ul className=''>

      </ul>
      </div>
    </nav>
  )
}

export default Navbar