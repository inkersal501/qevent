"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";

export default function CreateEvent () {

    const session = useSession();
    const router = useRouter();
    
    useEffect(()=>{
        if(!session || session.status !== "authenticated"){
            router.push("/events/");
        }
    }, []);
    const handleEventCreate = (e) => {
        const rand = Math.floor(Math.random() * 100);
        const event = {
            id: uuid,
            image : `https://randomuser.me/api/portraits/men/${rand}.jpg`
        }
    };
    // name, location, tags, artist, price, description
    return (
        <>
        <div className="flex justify-center items-center mt-10">
            <div className="w-6/12">        
                <h2 className="text-center text-5xl font-bold max-sm:text-3xl bg-gradient-to-br from-orange-400 to-teal-600 bg-clip-text text-transparent mx-4">Create New Event</h2>
                <form onSubmit={handleEventCreate}>
                    <div className="flex flex-col gap-4 p-4">
                        <input type="text" name="name" id="name" placeholder="Event Name" className="py-2 px-4 border rounded-md border-slate-400"/>
                        <input type="text" name="location" id="location" placeholder="Location" className="py-2 px-4 border rounded-md border-slate-400" />
                        <input type="text" name="artist" id="artist" placeholder="Artist" className="py-2 px-4 border rounded-md border-slate-400" />
                        <input type="text" name="price" id="price" placeholder="Price" className="py-2 px-4 border rounded-md border-slate-400" />
                        <input type="text" name="description" id="description" placeholder="Description" className="py-2 px-4 border rounded-md border-slate-400" />
                        <input type="text" name="tags" id="tags" placeholder="Tags" className="py-2 px-4 border rounded-md border-slate-400" />
                        <button type="submit" className="bg-gradient-to-r from-orange-400 to-teal-600 text-white px-4 py-2 rounded-md font-medium hover:opacity-70">Create Event</button>
                    </div>
                </form>
            </div>
         </div>
        </>
    );
};
