import EventCard from "@/components/EventCard"; 

export default async function Events({searchParams}) {
 
    const {artist, tag} = searchParams.artist;  
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
    const events = filteredEvents;
      
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