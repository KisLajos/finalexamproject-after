import NonHomeHeader from "@/components/NonhomeHeader";
import { getPageDataBySlug } from "@/utils/wordpressfunctions";
import parse from "html-react-parser";
import textpagestyles from "../textpagestyles.module.scss"

export default async function GYIK() {
    const page = await getPageDataBySlug("gyik")
    //console.log(page)

    return (
        <div>
            <NonHomeHeader content={page.title.rendered}/>
            <div className={textpagestyles.textPageContent}>
                {parse(page.content.rendered)}
            </div>
        </div>
    );
}

//export default GYIK;