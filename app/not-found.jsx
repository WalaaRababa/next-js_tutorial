import Link from "next/link"
export default function NotFound() {

  return (
<main className='text-center'>
    <h2>there are a problem </h2>
    <p>we could not find the page you were looking for</p>
    <p>go to back  <Link href='/'>Dashboard </Link></p>
   
</main>
)
}

