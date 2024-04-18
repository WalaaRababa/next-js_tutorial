
import Link from "next/link";
async function getData() {
  await new Promise (resolve=>setTimeout(resolve,3000))
    const result=await fetch('http://localhost:4000/tickets',{
        next:{
            revalidate:30
        }
    })
    console.log(result);
    return result.json()
}
async function TicketList() {
    const tickets=await getData()
console.log(tickets);
  return (
    <>
    {tickets.map((ticket) => (
        <div key={ticket.id} className="card my-5">
    <Link href={`/tickets/${ticket.id}`}> <h3>{ticket.title}</h3></Link>
          <p>{ticket.body.slice(0, 200)}...</p>
          <div className={`pill ${ticket.priority}`}>
            {ticket.priority} priority
          </div>
        </div>
      ))}
      </>
  )
}

export default TicketList