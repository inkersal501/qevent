"use client";
import EventCard from "@/components/EventCard";
import { useState, useEffect } from "react"; 
import { useSearchParams } from "next/navigation"; 

export default function Events() {
    const [events, setEvents] = useState([]);

    const searchParams = useSearchParams();
    const artist = searchParams.get("artist"); 
    const tag = searchParams.get("tag"); 
 
    useEffect(()=>{
        const fetchEvents = async () => {
            const response = await fetch("https://qevent-backend.labs.crio.do/events");
            const data = await response.json();
            let filteredEvents = data;

            if (artist) { 
                filteredEvents = data.filter((event) => event.artist === artist);
            } else if (!artist && tag) { 
                filteredEvents = data.filter(
                    (event) => Array.isArray(event.tags) && event.tags.includes(tag)
                );
            } 
            setEvents(filteredEvents);
        };
        fetchEvents();        
    }, [artist, tag]);
  

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