"use client";
import ArtistCard from "@/components/ArtistCard"; 
import { useState, useEffect } from "react"; 


export default function Artists() {
    const [artists, setArtists] = useState([]);

    useEffect(()=>{
        const fetchArtists = async () => {
            const response = await fetch("https://qevent-backend.labs.crio.do/artists");
            const data = await response.json(); 
            console.log(data);
            setArtists(data);
        };
        fetchArtists();
    }, []);

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