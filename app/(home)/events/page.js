"use client";
import EventCard from "@/components/EventCard";
import { useState, useEffect } from "react"; 


export default function Events() {
    const [events, setEvents] = useState([]);

    useEffect(()=>{
        const fetchEvents = async () => {
            const response = await fetch("https://qevent-backend.labs.crio.do/events");
            const data = await response.json(); 
            console.log(data);
            setEvents(data);
        };
        fetchEvents();
    }, []);

    return (
        <>
            <div className="flex flex-wrap justify-center mt-8 mb-32">
                {events.length > 0 && events.map((event) => (
                    <EventCard key={event.id} eventData={event} />
                ))}
            </div>
        </>
    );
}