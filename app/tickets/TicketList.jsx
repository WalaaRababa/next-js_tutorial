

async function getData() {
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
          <h3>{ticket.title}</h3>
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