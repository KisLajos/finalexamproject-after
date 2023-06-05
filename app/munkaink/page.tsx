import FeaturedGallery from "@/components/FeaturedGallery";
import NonHomeHeader from "@/components/NonhomeHeader";
import { getMediaFromWordPress, getPageDataBySlug } from "@/utils/wordpressfunctions";
import parse from "html-react-parser";
import textpagestyles from "../informaciok/textpagestyles.module.scss"

export default async function Munkaink() {
    const page = await getPageDataBySlug("munkaink")
    const images = await getMediaFromWordPress();

    return (
        <div>
            <NonHomeHeader content={page.title.rendered}/>
            <div className={textpagestyles.textPageContent}>
                {parse(page.content.rendered)}
            </div>
            <FeaturedGallery images={images}/>
        </div>
    );
}