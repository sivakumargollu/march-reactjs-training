'use client'

import axios from "axios";
import { useCallback, useEffect, useMemo, useState } from "react"
import { Product } from "@/models/Product";
import  styles  from "./products.module.css"
import { useParams, useRouter } from "next/navigation";
import { ProductView } from "./ProductView";
import { useTitle } from "@/hooks/useTitle";
import { useProducts } from "@/hooks/useProducts";


const url = "http://localhost:9000/products";

export default function ListProducts(){

    const router = useRouter()
    let [isMessageAvailable,setIsMessageAvailable] = useState("")
    useTitle("List products")
    const {products,setProducts} = useProducts()
    const deleteProduct = useCallback(function deleteProduct(product:Product){
        try{
             let id = product.id
             console.log("Deleting product with, Id " + id )               
             let deleteUrl = url+"/"+id
             axios.delete(deleteUrl);
             let copy_of_products = {...products}
             setProducts(copy_of_products)
            console.log("Product deleted, Id " + id )               
        } catch(error){
            console.log("Product not available to deleted", error)
        }
    },[])
    const editProduct = useCallback( async function editProduct(product:Product){        
        router.push("/products/"+product.id)
    },[products])

    const totalPrice = useMemo(function calcuateTotalPrice(){
        console.log("Calculate total price invoked...")
        let total = 0;
        products.forEach(p => {
            if(p.price){
                total = total+p.price;
            }
        })
        return total;
    },[products])
 
    return (
        <div>
            <h4>List Products</h4>
            <div> Total price of product is {totalPrice}</div>
            {isMessageAvailable? <div> This is page to demo data fetching </div> : null}
            <button onClick={(evt)=>{{isMessageAvailable ? setIsMessageAvailable(""):setIsMessageAvailable("This is page to demo data fetching ")}}}>{isMessageAvailable ? "Hide" : "Show"}</button>
            <div style={{display:"flex", flexFlow:"row wrap", alignContent:"center"}}>
            {products.map(product => {
                return (
                    <ProductView key={product.id} product={product} onDelete={deleteProduct} onEdit={editProduct}/>
                )
            })}
            </div>
        </div>
    )
}