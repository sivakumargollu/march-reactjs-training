//Key is inbuild attribute

import { Product } from "@/models/Product"
import  styles from './products.module.css'
import React from 'react'

type ProductViewProps = {
    product: Product;
    onDelete:(product:Product) => void;
    onEdit:(product:Product) => void;
}

//export default function ProductView({product}:) {

//}
//same can be written as follows.
export const ProductView:React.FC<ProductViewProps> = React.memo( function ProductView({product,onDelete,onEdit})  {
    console.log("Rendering product view : " + product.id)
    return (
        <div className="products">
                <div key={product.id} className={styles.products}>
                        <p>{product.name}</p>
                        <p>{product.price}</p>
                        <p>{product.description}</p>
                        <p><img src={product.imageUrl}/></p>
                        <button className="btn btn-warning" onClick={() => {onDelete(product)}}>Delete</button>
                        <button className="btn btn-success" onClick={() => {onEdit(product)}}>Edit</button>
                    </div>
        </div>
        
    )
})