import React from 'react'
async function getData(id) {
    const result = await fetch(`http://localhost:4000/tickets/${id}`)
    return result.json()
}
export default  async function TicketDetail({ params })
 {
    const ticket = await getData(params.id)
    return (
        <main>
      <nav>
        <h2>Ticket Details</h2>
        
      </nav>
      <div className="card">
        <h3>{ticket.title}</h3>
        <small>Created by {ticket.user_email}</small>
        <p>{ticket.body}</p>
        <div className={`pill ${ticket.priority}`}>
          {ticket.priority} priority
        </div>
      </div>
    </main>
    )
}

