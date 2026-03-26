'use client'
import { useTitle } from "@/hooks/useTitle";
import { Product } from "@/models/Product";
import axios from "axios";  
import { useParams } from "next/navigation";
import { ChangeEvent, useEffect, useState } from "react";

export default function EditProducts() {
    const params = useParams();
    const [product,setProduct] = useState<Product>();
    async function readProdctInfo(){
        const url = "http://localhost:9000/products/";
        let prodUrl = url + params.id;
        let response = await axios.get(prodUrl);
        console.log("product info " + response)
        setProduct(response.data)
    }
        useTitle("Edit  Products")
    useEffect(()=>{
        readProdctInfo()
    },[product?.id])
    function saveProductEdit(product?: Product) {
       //Implement axios call
    }
    function cancelProductEdit(product?:Product) {
        //route backt o list products
    }

    return (
        <div>
            <div>
                <h3>Edit produc : {params.id}</h3>
                <form>
                    <div className="form group">
                        <label htmlFor="name">Name</label>
                        <input className="form-control" type="text" value={product?.name} id="name"  onChange={(evt) => {setProduct({...product,name:evt.target.value})}}>
                        </input>
                    </div>
                     <div className="form group">
                        <label htmlFor="price">Name</label>
                        <input className="form-control" type="text" value={product?.price} id="price" onChange={(evt) => {setProduct({...product,price:evt.target.valueAsNumber})}} />
                    </div>
                     <div className="form group">
                        <label htmlFor="name">Name</label>
                        <input className="form-control" type="text" value={product?.description} id="description" onChange={(evt) => {setProduct({...product,description:evt.target.value})}}>
                        </input>
                    </div>
                    <button className="btn btn-success" onClick={()=>{saveProductEdit(product)}}>Save Edit</button>
                    <button className="bnt btn-alert" onClick={()=>{cancelProductEdit(product)}}>Cancel Edit</button>
                </form>
            </div>
        </div>
    )
}