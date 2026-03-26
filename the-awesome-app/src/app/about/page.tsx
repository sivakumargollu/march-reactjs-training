export default async function About() {
    await new Promise(resolve => setTimeout(resolve,3000));
    console.log("Rendering about....")
    return (
        <div className="alert alert-info">
            <h4>Nex.js Training Application</h4>
            <p>Application to demonistrate feature of react and nextjs</p>
        </div>
    )
}