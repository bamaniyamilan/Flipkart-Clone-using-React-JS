import React from 'react'
import LoginPopup from './LoginPopup';


export default function NavBar() {
    return (
        <>
            <nav fixed="top" className="navbar navbar-expand-lg navbar-dark bg-primary p-3">
                <div className="container my-2">
                    {/* This is our main logo */}
                    <img width={110} src="assest/flipkart_logo.png" alt="flipkartLogo" /></div>

                {/* below both lines for search first we take input then another press for search */}
                <input className="form-control me-2 mx-2" type="search" placeholder="Search" aria-label="Search" />
                <button type="button" className="btn btn-light mx-3">Search</button>

                {/* By clicking on this button this will open below model */}
                <button type="button" className="btn btn-warning mx-5 p-2" data-bs-toggle="modal" data-bs-target="#exampleModal">Login</button>
                {/* this will show user name  */}
                <button type="button" class="btn btn-success position-relative p-2">
                Sonia
                    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                        99+
                        <span class="visually-hidden">unread messages</span>
                    </span>
                </button>

                {/* below line will show cart icon and cart name */}
                <img width={40} className="mx-3" src="assest/trolley.png" alt="cart" />
                <div className="mx-3"><h5><b>Cart</b></h5></div>

                {/* This box is open when we click on Login button */}
                <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered modal-lg">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="exampleModalLabel">Login into Flipkart</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                        <input type="password" className="form-control" id="exampleInputPassword1" />
                                    </div>
                                    <div className="mb-3 form-check">
                                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                                    </div>
                                    <button type="submit" className="btn btn-primary">Submit</button>

                                    
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}
