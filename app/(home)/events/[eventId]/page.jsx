import Tag from "@/components/Tag"; 

export default async function EventsById ({params}) {
 
    const { eventId } = params; 
 
    const response = await fetch("https://qevent-backend.labs.crio.do/events/"+eventId, { cache: "force-cache" });
    const eventData = await response.json();           

    return (
        <>  
            <div className="px-12 py-10">
                <div className="flex justify-center items-center">
                    <img src={eventData.image} className=""/> 
                </div>
                <div className="my-4">
                    <h1 className="text-5xl font-bold max-sm:text-3xl bg-gradient-to-br from-orange-400 to-teal-600 bg-clip-text text-transparent">
                    {eventData.name}
                    </h1>
                    <h1 className="text-xl font-bold max-sm:text-3xl bg-gradient-to-br from-orange-400 to-teal-600 bg-clip-text text-transparent">
                    {eventData.location}
                    </h1>
                    <h1 className="text-xl font-bold max-sm:text-3xl bg-gradient-to-br from-orange-400 to-teal-600 bg-clip-text text-transparent">
                    {eventData.artist}
                    </h1>
                </div>

                <div className="mt-20 flex flex-col gap-4">
                    <div className="flex gap-2">
                        {eventData.tags && eventData.tags.map((tag) => (
                            <Tag text={tag} key={tag} />
                        ))}
                    </div>
                    <div>
                        <p>{eventData.description}</p>
                    </div>
                    <div className="flex justify-between">
                        <div>
                            <h1 className="text-4xl font-bold max-sm:text-3xl bg-gradient-to-br from-orange-400 to-teal-600 bg-clip-text text-transparent">
                                ${eventData.price}
                            </h1>
                        </div>
                        <div>
                            <button className="bg-red-500 text-white rounded px-4 py-2">Buy Tickets</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};