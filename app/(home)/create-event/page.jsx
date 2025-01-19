"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function CreateEvent () {

    const session = useSession();
    const router = useRouter();
    
    useEffect(()=>{
        if(!session || session.status !== "authenticated"){
            router.push("/events/");
        }
    }, []);
    
    return (
        <>
        <h1>Create Event</h1>
        </>
    );
};
