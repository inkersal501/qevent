import ArtistCard from "@/components/ArtistCard";  

export default async function Artists() { 
 
    const response = await fetch("https://qevent-backend.labs.crio.do/artists", { cache: "force-cache" });
    const artists = await response.json();  

    return (
        <>
            <div className="flex flex-wrap justify-center mt-8 mb-32">
                {artists.length > 0 && artists.map((artist) => (
                    <ArtistCard key={artist.id} artistData={artist} />
                ))}
            </div>
        </>
    );
}