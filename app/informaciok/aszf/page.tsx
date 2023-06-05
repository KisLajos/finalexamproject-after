import NonHomeHeader from "@/components/NonhomeHeader";
import { getPageDataBySlug } from "@/utils/wordpressfunctions";
import parse from "html-react-parser";
import textpagestyles from "../textpagestyles.module.scss"

export default async function ASZF() {
    const page = await getPageDataBySlug("aszf")
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

//export default ASZF;