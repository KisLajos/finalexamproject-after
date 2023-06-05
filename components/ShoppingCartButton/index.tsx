import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useShoppingCart } from '@/context/ShoppingCartContext'
import styles from './styles.module.scss'

import React from 'react'

export default function ShoppingCartButton() {
    const {openCart, cartQuantity} = useShoppingCart();

    return (
        <>
         {
            cartQuantity > 0 && 
            <button className={styles.shoppingCart} onClick={openCart}>
                <FontAwesomeIcon icon={faShoppingCart}/>
                <div className={styles.cartQuantity}>
                {cartQuantity}
                </div>
            </button>
         }
        </>
    )
}
