import React from 'react';
import Nav from './Nav';
import 'bootstrap';
import $ from 'jquery'

function checkout() {

    $('div').removeClass('modal-backdrop fade show')

    return (
        <div>
            <Nav />
            {localStorage.setItem('log',false)}
            <div className='checkout'>
                <h5>Checkout</h5>
                <p>Thank you for your order.</p>
            </div>
        </div>
    )
}

export default checkout
