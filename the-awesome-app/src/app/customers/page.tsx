import { Customer } from "@/models/Customer";
import Link from "next/link";
import { Suspense } from "react";

export default async function CustomerListing() {
    await new Promise(resolve => setTimeout(resolve,3000));
    return (
        <div>
            <h4>Customer Listing</h4>
            <Suspense fallback={<div className="alert alert-warning ">Loading Customer #1</div>}>
                <CustomersPage timeout={7000}/>
            </Suspense>
            <Suspense fallback={<div className="alert alert-danger">Loading Customer #2</div>}>
                <CustomersPage timeout={7000}/>
            </Suspense>
        </div>
    )
}
export  async function CustomersPage({timeout}:{timeout:number}){
    //api/db call
    //let url = "http://localhost:9000/customers"
    await new Promise(resolve => setTimeout(resolve,timeout));
    const url = `${process.env.BASE_URL}/customers`;

    const response = await fetch(url,{method:"GET"});
    const customers =await response.json() as Customer[]

    return (
        <div>
            <h3> Customers</h3>
            <table className="table">
                <thead>
                    <tr>
                        <th>  ID </th>
                        <th> Name </th>
                        <th> Image </th>
                    </tr>
                </thead>
                <tbody>
                    {customers.map(c => {return (
                            <tr key={c.id}>
                                <td>{c.id}</td>
                                <td><Link href={"/customers/"+c.id}>{c.name}</Link></td>
                                <td>{c.location}</td>
                            </tr>
                    )
                    })}
                </tbody>
            </table>
        </div>
    )
}