import path from "path";
import fs  from "fs";
import { NextResponse } from "next/server";

export type Suppliers = {
    id: number,
    name: string,
    contactPerson: string,
    email: string,
    location: string
}
export async function GET() {
    //connect to the DB, invoke endpoint, any server code
    const filepath = path.join(process.cwd(),"data","suppliers.json");
    const fileContent = await fs.readFileSync(filepath,"utf-8")
    const suppliers = JSON.parse(fileContent)  as Suppliers[]
    return NextResponse.json({suppliers})
}