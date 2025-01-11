import Tag from "@/components/Tag"; 
 
export default async function Tags() { 

    const response = await fetch("https://qevent-backend.labs.crio.do/tags", { cache: "force-cache" });
    const tags = await response.json();  
           
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