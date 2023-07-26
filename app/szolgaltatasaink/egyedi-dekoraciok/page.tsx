import NonHomeHeader from "@/components/NonhomeHeader";
import { getPageDataBySlug } from "@/utils/wordpressfunctions";
import parse from "html-react-parser";
import textpagestyles from "../../informaciok/textpagestyles.module.scss"

export default async function Konzultacio() {
    const page = await getPageDataBySlug("egyedi-dekoraciok")

    return (
        <div>
            <NonHomeHeader content={page.title.rendered}/>
            <div className={textpagestyles.textPageContent}>
                {parse(page.content.rendered)}
            </div>
        </div>
    );
}