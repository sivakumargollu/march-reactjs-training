import { Customer } from "@/models/Customer";
import { Metadata } from "next";

type CustomerDetailsProps = {
    params : Promise<{id:number}>;
}
export async function genericMedataData(props:CustomerDetailsProps): Promise<Metadata>  {
    const id = (await props.params).id
    const url = `${process.env.BASE_URL}/customers/${id}`;
    const response = await fetch(url,{method:"GET"});
    const customer =await response.json() as Customer

        return {
        title:`Aswesome App : ${customer.name}`,
        description: " Listing of customers",
        keywords:[
            "global customers", "tech companies", "Fortune 500"
        ]
    }
}

export default async function CustomerDetails(props:CustomerDetailsProps) {

    const id = (await props.params).id
    const url = `${process.env.BASE_URL}/customers/${id}`;
    const response = await fetch(url,{method:"GET"});
        const customer =await response.json() as Customer

    return (
        <div>
            <h4> Customer details </h4>
            <div>
                <p>ID : {customer.id}</p>
                <p>Name : {customer.name}</p>
                <p>Location : {customer.location}</p>

            </div>
        </div>
    )
}