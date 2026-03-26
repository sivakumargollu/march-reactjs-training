import { Product } from "@/models/Product";
import { AppState } from "@/redux/store";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export  function useProducts()  {
        const [products,setProducts] = useState<Product[]>([])
        const url = "http://localhost:9000/secure_products";
        const controller = new AbortController();
        const authr = useSelector((state: AppState) => state.auth)
        const router = useRouter();
        async function fetchProducts() {
            if(!authr.isAuthenticated){
                    router.push("/login")
            }
            try {
                    const headers = {"Authorization":`Bearer ${authr.accessToken}`}
                    let productsRes = await axios.get(url,{signal:controller.signal,headers:headers});
                    setProducts(productsRes.data);
                } catch(error){

                    }
                }
          useEffect(()=>{
                fetchProducts()
                return () => {
                    controller.abort()
                }
            },[])
        return {products,setProducts}
}