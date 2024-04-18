import Link from "next/link"
export default function NotFound() {

  return (
<main className='text-center'>
    <h2>WE HIT A PROBLEM </h2>
    <p>we could not find the page you were looking for</p>
    <p>go to back  <Link href='/tickets'>tickets </Link></p>
   
</main>
)
}

