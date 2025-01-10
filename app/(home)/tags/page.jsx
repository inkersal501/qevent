"use client";
import Tag from "@/components/Tag";
import { useState, useEffect } from "react"; 
 

export default function Tags() {

    const [tags, setTags] = useState([]);

    useEffect(()=>{
        const fetchTags = async () => {
            const response = await fetch("https://qevent-backend.labs.crio.do/tags");
            const data = await response.json();  
            setTags(data);
        };
        fetchTags();
    }, []);

    return (
        <>  
            <div className="flex h-screen">
                <div className="m-auto">
                    <div className="flex gap-2 flex-wrap justify-center items-center">
                        {tags.length > 0 && tags.map((tag) => (
                            <Tag key={tag.id} text={tag.name}/>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}