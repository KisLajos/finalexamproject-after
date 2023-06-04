import NonHomeHeader from "@/components/NonhomeHeader";
import ProductGrid from "@/components/Webshop/ProductGrid";
import { getAllProducts } from "@/utils/woocommercefunctions";
import { getPageDataBySlug } from "@/utils/wordpressfunctions";

export default async function Termekek() {
    const page = await getPageDataBySlug("termekek")
    const products = await getAllProducts().catch((error) =>
        console.error(error)
    );

    return (
        <div>
            <NonHomeHeader content={"Webshop"}/>
            <ProductGrid title={page.title.rendered} products={products.data} />
        </div>
    );
}