import Link from "next/link";

export default function AppBar() {
    return (
          <div className="container fluid">
              <div>
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
               </ul>
              </div>
          </div>
    );
}