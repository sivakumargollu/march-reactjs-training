'use client'
import { useProducts } from '@/hooks/useProducts';
import { Product } from '@/models/Product';
import { AppDispatch } from '@/redux/store';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';


function GadgetStore(){

    const {products, setProducts} = useProducts();
    const dispatch = useDispatch<AppDispatch>()
    
    
    function addToCart(product: Product): void {
    }

    function renderProducts() {

        const productsView =  products.map((item:Product) => {
           

            return (
                <div className="col" key={item.id} >
                    <div className="card border-warning" >
                        <div className="card-body text-success">
                            <h5 className="card-title">{item.name}</h5>
                            <p className="card-text">{item.description}</p>
                            <p className="card-text text-primary">INR {item.price}</p>
                            <button className="btn btn-primary" onClick={() => addToCart(item)}>Add To Cart</button>
                        </div>
                    </div>
    
                </div>
            );
        })
        return (
            <div className="row row-cols-1 row-cols-md-2 g-4">
                {productsView}
            </div>
        )
    }


    return (
        <div>
            <h1>Gadget Store</h1>

            <div>
                {renderProducts()}
            </div>
        </div>

    );
}

export default GadgetStore;