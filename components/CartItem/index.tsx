'use client'
import { useShoppingCart } from "@/context/ShoppingCartContext"
import { Stack, Button } from "react-bootstrap";
import storeItems from "../../data/items.json"
import Image from "next/image";

type CartItemProps = {
    id: number,
    quantity: number,
}

export function CartItem({id, quantity} : CartItemProps) {
    const { removeFromCart } = useShoppingCart();
    const item = storeItems.find(i => i.id === id)
    const price = parseFloat(item?.price!)

    if (item === null) return null

    return (
        <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
            {/* <img src={item?.images[0]} style={{ width: "125px", height: "125px", objectFit: "cover"}}/> */}
            <Image src={"https://finalexamprojectafter-wp.lajoskis.dk/wp-content/uploads/woocommerce-placeholder.png"} alt={item?.name!} width={125} height={125}/>

            <div className="me-auto">
                <div>
                    {item?.name} {quantity > 1 && <span style={{fontSize: ".65rem"}}>x{quantity}</span>}
                </div>
                <div style={{fontSize: ".75rem"}}>
                    {price}
                </div>
            </div>
            <div>
                {price * quantity}
            </div>
            <Button variant="outline-danger" size="sm" onClick={() => removeFromCart(item?.id!)}>&times;</Button>
        </Stack>
    )
}