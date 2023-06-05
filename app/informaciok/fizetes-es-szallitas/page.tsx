import NonHomeHeader from "@/components/NonhomeHeader";
import { getPageDataBySlug } from "@/utils/wordpressfunctions";
import parse from "html-react-parser";
import textpagestyles from "../textpagestyles.module.scss"

export default async function FizetesSzallitas() {
    const page = await getPageDataBySlug("fizetes-szallitas")
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

//export default FizetesSzallitas;