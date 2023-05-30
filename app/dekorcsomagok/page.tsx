import DecorPackagesContainer from "@/components/DecorPage/DecorPackagesContainer";
import { getPageDataBySlug } from "@/utils/wordpressfunctions";
import parse from "html-react-parser";
import NonHomeHeader from "@/components/NonhomeHeader";
import styles from "./styles.module.scss"

export default async function Dekorcsomagok() {
    const page = await getPageDataBySlug("dekorcsomagok")
    //console.log(page)

    return (
        <div>
            <NonHomeHeader content={page.title.rendered}/>
            {parse(page.content.rendered)}

            <DecorPackagesContainer/>
        </div>
    );
}

//export default Dekorcsomagok;