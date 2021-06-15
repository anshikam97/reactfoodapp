import React, { useEffect, useState } from 'react'
import { Redirect, useHistory } from 'react-router'
import Nav from './Nav'

function Login() {

    const log = localStorage.getItem('log')

    const [user, setUser] = useState({
        username :"",
        password : ""
    })


    let history = useHistory()

    const handleSubmit = e =>{
        fetch('data/user.json'
            , {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }
        )
            .then((response) => response.json())
            .then((data) => {
                if(user.username === data[0].username){
                    if(user.password === data[0].password){
                   localStorage.setItem('log',true);
                }  }
            }
            );
    }

    useEffect(()=>{
        if(log === "true"){
            history.push('/menu')
        }
    },[log])


    return (
        console.log(user),
        <div>
            <Nav />
            <div className='login'>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label for="exampleInputEmail1">UserName</label>
                        <input type="text" className="form-control" 
                        id="exampleInputEmail1" aria-describedby="emailHelp" 
                        placeholder="Enter username" 
                        onChange={e => setUser({...user, username: e.target.value})}></input>
                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"
                        onChange={e => setUser({...user, password: e.target.value})}></input>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Login;
