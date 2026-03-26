import { AppThemeContext } from "@/context/AppThemeContext";
import Link from "next/link";
import { useContext } from "react";

export default function AppBar() {
  const theme = useContext(AppThemeContext)
  console.log("Theme passed to context ", theme.mode)
    return (
          <div className="navbar navbar-light bg-light ">
              <div className="container fluid">
               <ul className="nav">
                  <ul className="nav-item">
                    <Link className="nav-link" href="/">NextJs</Link>
                  </ul>
                  <li>
                      <ul className="nav-item">
                    <Link className="nav-link" href="/Home">Home</Link>
                  </ul>
                  </li>
                  <li>
                      <ul className="nav-item">
                    <Link className="nav-link" href="/about">About</Link>
                  </ul>
                  </li>
                  <li>
                    <ul className="nav-item">
                    <Link className="nav-link" href="/login">Login</Link>
                  </ul>
                  </li>
                  <li>
                    <ul className="nav-item">
                    <Link className="nav-link" href="/products">Products</Link>
                  </ul>
                  </li>
                  <li>
                    <ul className="nav-item">
                    <Link className="nav-link" href="/gadgets">Gadgets</Link>
                  </ul>
                  </li>
                  <li>
                    <ul className="nav-item">
                    <Link className="nav-link" href="/customers">Customers</Link>
                  </ul>
                  </li>
                    <li>
                    <ul className="nav-item">
                    <Link className="nav-link" href="/suppliers">Suppliers</Link>
                  </ul>
                  </li>
               </ul>
              </div>
          </div>
    );
}