"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { MultiSelect } from "react-multi-select-component";

export default function CreateEvent () {

    const session = useSession();
    const router = useRouter();
 
    const [formData, setFormData] = useState({name:"", venue:"", artist:"", price:"", description:"",});
    const [tagSelect, setTagSelect] = useState([]);

    const tagOptions = [{ label: "Music", value: "music" }];


    useEffect(()=>{
        if(!session || session.status !== "authenticated"){
            router.push("/events/");
        }
    }, []);

    const handleEventCreate = async (e) => {
        e.preventDefault();
        const rand = Math.floor(Math.random() * 100);
        const tags = tagSelect.map((tag) => tag.value);
        const event = {
            'id': uuidv4(),
            'image' : `https://randomuser.me/api/portraits/men/${rand}.jpg`,
            ...formData, tags
        };
         
        const response = await fetch("https://qevent-backend.labs.crio.do/events", {
            method: "POST",
            body: JSON.stringify(event),
            headers: {
                "Content-Type": "application/json"
            }
        });
        if(response.status === 201) {
            router.push("/events/");
        }else{
            alert("Event creation failed");
        }
    };

    const handleFormData = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    }; 
    return (
        <>
        <div className="flex justify-center items-center mt-10 mb-20">
            <div className="w-4/12">        
                <h2 className="text-center text-3xl font-bold max-sm:text-3xl bg-gradient-to-br from-orange-400 to-teal-600 bg-clip-text text-transparent mx-4">Create New Event</h2>
                <form onSubmit={handleEventCreate}>
                    <div className="flex flex-col gap-4 p-4">
                        <input type="text" name="name" id="name" onChange={handleFormData} value={formData.name} placeholder="Event Name" className="py-2 px-4 border rounded-md border-slate-400"/>
                        <input type="text" name="venue" id="venue" onChange={handleFormData} value={formData.location} placeholder="Venue" className="py-2 px-4 border rounded-md border-slate-400" />
                        <input type="text" name="artist" id="artist" onChange={handleFormData} value={formData.artist} placeholder="Artist" className="py-2 px-4 border rounded-md border-slate-400" />
                        <input type="text" name="price" id="price" onChange={handleFormData} value={formData.price} placeholder="Price" className="py-2 px-4 border rounded-md border-slate-400" />
                        <textarea rows={"4"} name="description" id="description" onChange={handleFormData} value={formData.description} placeholder="Description" className="py-2 px-4 border rounded-md border-slate-400"></textarea>
                        <MultiSelect
                            id="tags"
                            options={tagOptions}
                            value={tagSelect}
                            onChange={setTagSelect}
                            labelledBy={"Select Tags"}
                            isCreatable={true}
                            className="py-2 px-4 border rounded-md border-slate-400"
                        />
                        <div className="text-center">
                            <button type="submit" className="bg-gradient-to-r from-orange-400 to-teal-600 text-white px-4 py-2 rounded-md font-medium hover:opacity-70">Create Event</button>
                        </div>                        
                    </div>
                </form>
            </div>
         </div>
        </>
    );
};
