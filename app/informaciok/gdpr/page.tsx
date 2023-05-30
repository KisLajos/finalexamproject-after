import NonHomeHeader from "@/components/NonhomeHeader";
import { getPageDataBySlug } from "@/utils/wordpressfunctions";
import parse from "html-react-parser";

export default async function GDPR() {
    const page = await getPageDataBySlug("gdpr")
    //console.log(page)

    return (
        <div>
            <NonHomeHeader content={page.title.rendered}/>
            {parse(page.content.rendered)}
        </div>
    );
}

//export default GDPR;