"use client"
import { useRouter } from "next/navigation"
import { useState } from "react"
export default function CreateForm() {
    const [data, setData] = useState({
        title: "",
        body: "",
        priority: 'low',
    })

    const [isLoading, setIsLoading] = useState(false)
    const router = useRouter()
    const handelSubmit = async (e) => {
        e.preventDefault()
        setIsLoading(false)
        const newTicket = { ...data, user_email: "test@gmail.com"}
        console.log(newTicket);
       
        try {
            const res = await fetch("http://localhost:4000/tickets", 
            { method: "POST",
             headers: { "Content-Type": "application/json" },
              body: JSON.stringify(newTicket) 
            })
            if (res.status === 201) {
                router.refresh()
                router.push('/tickets')
    
            }
        } catch (error) {
            console.log(error);
        }

    }
    return (
        <form onSubmit={handelSubmit} className="w-1/2">
            <label><span> Title: </span>
                <input type="text" required onChange={(e) => {
                    setData((prev) => ({ ...prev, title: e.target.value }))
                }} />

            </label>
            <label><span> Body: </span></label>
            <textarea type="text" required onChange={(e) => {
                setData((prev) => ({ ...prev, body: e.target.value }))
            }} />
            <label>priority:</label>
            <select onChange={(e) => {
                setData((prev) => ({ ...prev, priority: e.target.value }))
            }}>
                <option value="low">Low priority</option>
                <option value="medium">medium priority</option>
                <option value="high">high priority</option>

            </select>
            <button className="btn-primary" disabled={isLoading}>
                {isLoading && <span>Adding ....</span>}
                {!isLoading && <span>Add Ticket</span>}
            </button>

        </form>
    )
}
