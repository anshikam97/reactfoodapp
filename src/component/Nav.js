import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


function Nav() {

    const carts = useSelector((state) => state.allCart);

    return (
        <div className='Nav'>
            <nav className="navbar navbar-dark ">
                <div className="container-fluid">
                    <span className="navbar-brand mb-0 h1"><img src='../assests/restaurant_24px.svg'></img>Food's Restaurant</span>
                    {localStorage.getItem('log') === 'true' ?
                        <div style={{ display: 'flex' }}>
                            <button type="button" className="btn .dropdown-toggle" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                <FontAwesomeIcon icon={faShoppingCart} /> <span className="badge bg-secondary">{carts.length}</span>
                            </button>
                        </div>
                        :
                        <p></p>
                    }
                </div>
            </nav>
            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Order Summary</h5>
                        </div>
                        <div className="modal-body">
                            {

                            }
                        </div>
                        <div className="modal-footer">
                            <Link to='/checkout'>
                                <button type="submit" className="btn btn-primary" id="save"> SAVE AND CHECKOUT</button>
                            </Link>
                            <button type="button" className="btn btn-secondary" >CANCEL</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Nav
