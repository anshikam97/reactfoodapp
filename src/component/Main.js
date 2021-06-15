import React from 'react'
import {Link} from 'react-router-dom';
import Nav from './Nav';


function Main() {
    return (
        <div>
            <Nav/>
            <div className="main">
                <p>
                    Welcome to Food's Kitchen
                </p>
                <Link to='/login'>
                    <button type="button" className="btn btn-primary">Go To Menu</button>
                </Link>
            </div>
        </div>
    )
}

export default Main
 