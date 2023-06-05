import DecorPackagesContainer from "@/components/DecorPage/DecorPackagesContainer";
import { getPageDataBySlug } from "@/utils/wordpressfunctions";
import parse from "html-react-parser";
import NonHomeHeader from "@/components/NonhomeHeader";
import textpagestyles from "../informaciok/textpagestyles.module.scss"

export default async function Dekorcsomagok() {
    const page = await getPageDataBySlug("dekorcsomagok")
    //console.log(page)

    return (
        <div>
            <NonHomeHeader content={page.title.rendered}/>
            <div className={textpagestyles.textPageContent}>
                {parse(page.content.rendered)}
            </div>
            <DecorPackagesContainer/>
        </div>
    );
}

//export default Dekorcsomagok;