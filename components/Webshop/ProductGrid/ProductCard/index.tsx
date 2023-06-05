import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from './styles.module.scss'
import { useShoppingCart } from '@/context/ShoppingCartContext'

export interface Product {
  name: string,
  price: number,
  slug: string,
  status: string,
  quantity: number
  id: number,
  imgURL: string
}

export interface ProductCardProps {
  product: Product
}

export default function ProductCard({product}: ProductCardProps) {
  //const id = 1;

  const { getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart } = useShoppingCart()
  const quantity:number = getItemQuantity(product.id);

  return (
    <div className={styles.productcardContainer}>
      <div className={styles.productcardImageContainer}>
        <Image src='https://finalexamprojectafter-wp.lajoskis.dk/wp-content/uploads/woocommerce-placeholder.png' alt={product.name} width={250} height={250}/>
      </div>
      <Link href={`/webshop/termekek/${product.slug}`}>{product.name}</Link>
      <span>{product.price} Ft</span>
      {quantity === 0 ?
        (<button className={styles.toBasketButton} onClick={() => increaseCartQuantity(product.id)}>Kosárba</button>)

        : 

        <div className={styles.actionsBox}>
          <div className={styles.quantityRow}>
            <button className={styles.creaseButtons} onClick={() => decreaseCartQuantity(product.id)}>-</button>
            
            <div>
              <span>{quantity}</span> db a kosárban
            </div>

            <button className={styles.creaseButtons} onClick={() => increaseCartQuantity(product.id)}>+</button>
          </div>

          <button className={styles.removeButton} onClick={() => removeFromCart(product.id)}>Törlés</button>
        </div>
      }

      {/* <button className={styles.toBasketButton}>Kosárba</button> */}
    </div>
  )
}
