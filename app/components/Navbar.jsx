import Link from 'next/link'
import Image from 'next/image'
import Logo from './dojo-logo.png'
export default function Navbar() {
  return (
<nav>
<Image
  src={Logo}
  width={70}
   quality={100}
   alt='logo'
/>
  <h1>Profile HelpDesk</h1>
  <Link href='/'>Dashboard</Link>
  <Link href='/tickets'>Tickets</Link>

</nav>

  )
}