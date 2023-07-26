import AboutUs from "@/components/AboutUs";
import NonHomeHeader from "@/components/NonhomeHeader";

export default async function Rolunk() {
    
    //console.log(page)

    return (
        <div>
            {/* @ts-expect-error Server Component */}
            <AboutUs useAlign={true}/>
        </div>
    );
}

//export default Rolunk;