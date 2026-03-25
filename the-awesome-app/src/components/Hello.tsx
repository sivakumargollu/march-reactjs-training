"use client"
type HelloProps = {
    message:String;
    color?:string
}
export default function Hello(props:HelloProps) {
    console.log("rednering the Hello..." + props)
    return ( 
        <div>
            <h3>THis customized based on properties</h3>
            <p>This is a simple functional component</p>
            <p> Generated at {new Date().toLocaleString()}</p>
        </div>

    )
}