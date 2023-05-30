import NonHomeHeader from "@/components/NonhomeHeader";
import { getPageDataBySlug } from "@/utils/wordpressfunctions";
import parse from "html-react-parser";

export default async function Kolcsonzes() {
    const page = await getPageDataBySlug("kolcsonzes")
    //console.log(page)

    return (
        <div>
            <NonHomeHeader content={page.title.rendered}/>
            {parse(page.content.rendered)}
        </div>
    );
}

//export default Kolcsonzes;