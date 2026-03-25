import { publicDecrypt } from "crypto"

//class or interface or type
export class Product {
    public id?:number;
    public name?:string;
    public price?:number;
    public description?:string;
    public imageUrl?:string

    constructor(id:number, name:string,price:number,descriptin:string,imageUrl:string){
        this.id = id;
        this.name = name;
        this.description = descriptin;
        this.imageUrl =  imageUrl;
        this.price = price

    }
}