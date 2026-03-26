import { Suppliers } from "../api/suppliers/route";

export default  function SuppliersPage() {

async function fetchSuppliers() : Promise<Suppliers[]> {
        console.log("inside fetch suppliers...")
        const response = await fetch("http://localhost:3000/api/suppliers")
        const suppliers = await response.json() as Suppliers[]
        return suppliers;
}
const suppliersPromise = fetchSuppliers();
suppliersPromise.then((suppliers) =>{
    console.log("Promose resolved....", suppliers)
    suppliers.map(s => {
       return console.log("supplier",s)
    })
})



return <div>
    <h4> Supplier listings </h4>
    <div>
        <table>
            <thead>
                <td>Id</td>
                <td>Name</td>
                <td>Contact Person</td>
                <td>Email</td>
                <td>Location</td>
            </thead>
            <tbody>
               
            </tbody>
        </table>
    </div>
</div>
}