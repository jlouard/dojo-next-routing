import Link from "next/link";
import { Ticket } from "../_types/Ticket";

export const Tickets = () => {
    const tickets: Ticket[] = [
        {id: 1, sport: "Swimming", price: 30}, 
        {id: 2, sport: "Athletics", price: 100}, 
        {id: 3, sport: "Volleyball", price: 50}
    ];
    return (
    <div className="flex justify-between w-full h-full items-center">
        
        {tickets.map((ticket) => 
        <Link href={`tickets/${ticket.sport.toLowerCase()}`} key={ticket.id}>
            {ticket.sport} {ticket.price}€
        </Link>
        )}
    </div>
    );

}