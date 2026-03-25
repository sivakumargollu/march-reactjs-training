'use client'

import { SubmitEventHandler, useEffect, useRef, useState } from "react"
import axios  from 'axios'
import { useRouter } from "next/navigation";
import { useTitle } from "@/hooks/useTitle";
import { useDispatch } from "react-redux";

export default function Login() {
    
    const [username,setUserName] = useState("");
    const [password,setPassword] = useState("");
    const [message, setMessage] = useState("");
    const router = useRouter();
    const userNameRef = useRef<HTMLInputElement>(null)
    useTitle("Login")
    const dispatch = useDispatch()
    //console.log("Loging rendered" 
    //useEffect invoked once on component mount.
    useEffect(() => {
        console.log("Loging mounted")
        userNameRef.current?.focus
        //callback invoked on umount.
        return () => {
            console.log("login unmounted")
        }
    },[])

    useEffect(()=>{
        document.title = document.title + " Login "
    },[])

    async function handleLogin(event:SubmitEvent<HTMLFormElement>) {
        event.preventDefault()
        if(username && password){
        let url = "http://localhost:9000/login";
        try {
                let response = await axios.post(url,{name:username,password});
                console.log("response", response)
                setMessage("Login success")
                dispatch({type:"login", "payload": {
                    isAuthenticated:true,
                    username,
                    accessToken: response.data.accessToken,
                    refereshToken: response.data.refreshToken
                }})
                router.push("/")
            } catch(error){
                console.log("Error reponse",error)
                setMessage("Invalid credentials")
                 dispatch({type:"logout"})
            }
        
        } else {
            setMessage("Enter the credentai  ls");
        }
    }
    return (
        <div>
            <h4>Login</h4>

            {message ? <div className="alert alert-warning"> {message}</div> : null}

            <form onSubmit={handleLogin}>
                <div className="form-group">
                    <label htmlFor="username">UserName</label>
                    <input 
                    ref = {userNameRef}
                    autoFocus 
                    type="text" 
                    className="form-control" 
                    placeholder="User ID" 
                    value={username} onChange={evt => setUserName(evt.target.value)}/>

                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" placeholder="Password"
                    value={password} onChange={evt => setPassword(evt.target.value)}/> 
                </div>
                <hr/>
                <button className="btn btn-success">Login</button>
            </form>
        </div>
    )
}