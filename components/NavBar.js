import React from 'react'
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/router";

function NavBar() {
    const router = useRouter()
    const isActive = ( r ) => {
        if (r === router.pathname ) {
            return " active"
        } else {
            return ""
        }
    }

    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link href="/">
          <a className="navbar-brand">
            <Image
              src="/icon-adidas-logo.svg"
              alt="Adidas"
              width={60}
              height={60}
              className="d-inline-block align-top"
            />
          </a>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNavDropdown"
        >
          <ul className="navbar-nav">
            <Link href="/cart">
              <li className="nav-item ">
                <a className={"nav-link" + isActive("/cart")}>
                  <i className="fas fa-cart-arrow-down" aria-hidden></i>
                  CART
                </a>
              </li>
            </Link>
            <Link href="/signin">
              <li className="nav-item ">
                <a className={"nav-link" + isActive("/signin")}>
                  <i className="far fa-user" aria-hidden></i>
                  Sing in
                </a>
              </li>
            </Link>
            {/* <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                User Name
              </a>
              <div
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <a className="dropdown-item" href="#">
                  Profile
                </a>
                <a className="dropdown-item" href="#">
                  LogOut
                </a>
              </div>
             </li> */}
          </ul>
        </div>
      </nav>
    );
}

export default NavBar
