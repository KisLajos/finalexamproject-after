'use client'
import { useShoppingCart } from "@/context/ShoppingCartContext";
import { Offcanvas, Stack } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"
import { CartItem } from "../CartItem";
import storeItems from "../../data/items.json"

type ShoppingCartProps = {
    isOpen: boolean
}

export function ShoppingCart({ isOpen } : ShoppingCartProps) {
    const { closeCart, cartItems } = useShoppingCart();

    return (
        <Offcanvas show={isOpen} onHide={closeCart} placement="end">
            <Offcanvas.Header className="custom_offcanvas_header" closeButton>
                <Offcanvas.Title className="custom_offcanvas_title">Kosár</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className="custom_offcanvas">
                <Stack gap={3} className="custom_offcanvas_title">
                    {cartItems.map(item => (
                        <CartItem key={item.id} {...item} />
                    ))}
                    <div className="ms-auto fw-bold fs-5">
                    Összesen: {" "}
                        {
                        cartItems.reduce((total, cartItem) => {
                            const item = storeItems.find(i => i.id === cartItem.id)
                            const price = parseFloat(item?.price!)
                            return total + (price || 0) * cartItem.quantity
                        }, 0)
                        }
                    </div>
                </Stack>
            </Offcanvas.Body>
        </Offcanvas>
    )
}