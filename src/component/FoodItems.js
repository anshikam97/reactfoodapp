
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { setFoods, selectedFood, removeFood } from '../redux/actions/foodActions'
import Nav from './Nav'


function FoodItems() {
    const log = localStorage.getItem('log')

    let history = useHistory()

    const [cart, setCart] = useState({})

    const getData = () => {
        fetch('data/feed.json'
            , {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }
        )
            .then((response) => response.json())
            .then((data) => {
                dispatch(setFoods(data));
            }
            );
    }

    useEffect(() => {
        getData()
        if (log === "false") {
            history.push('/')
        }
        if (log === "true") {
            history.push('/menu')
        }
    }, [])

    const addCart = (food, e) => {
        dispatch_one(selectedFood(food))
        let fet = e.target.value;
        let cost = document.getElementById(fet).innerHTML
        if (cart.hasOwnProperty(fet)) {
            setCart({ ...cart, [fet]: { total: cart.[fet].total + 1, price: cart.[fet].price + parseInt(cost) } })
        }
        else {
            setCart({ ...cart, [fet]: { total: 1, price: parseInt(cost) } })
        }
    }


    const subCart = (food, e) => {

        dispatch_two(removeFood(food))

        let fet = e.target.value;
        let cost = document.getElementById(fet).innerHTML
        if (cart.hasOwnProperty(fet)) {
            if (cart.[fet].total !== 0) {
                setCart({ ...cart, [fet]: { total: cart.[fet].total - 1, price: cart.[fet].price - parseInt(cost) } })
            }
        }
    }

    const getDetail = (v) => {
        if (cart.hasOwnProperty(v)) {
            if (cart.[v].total !== 0) {
                return (
                    <div>
                        <p>Total : {cart.[v].total}</p>
                        <p>Cost(INR) : {cart.[v].price}</p>
                    </div>
                )
            }
        }
    }

    const foods = useSelector((state) => state.allFoods.foods);
    const dispatch = useDispatch();
    const renderList = foods.map((food) => {
        const { name, price, image } = food;
        return (
            <div className="card" key={name}>
                <img key={image} src={`../assests/${image}`} className="card-img-top" alt={image}></img>
                <div className="card-body">
                    <h5>{name}</h5>
                    <p>Price : <span id={name}>{price}</span></p>
                    {getDetail(name)}
                    <div>
                        <button className="btn btn-primary" value={name} onClick={(e) => addCart(food, e)}>+</button>
                        <button className="btn btn-secondary sub" value={name} onClick={(e) => subCart(food, e)}>-</button>
                    </div>
                </div>
            </div>

        );
    });



    const food = useSelector((state) => state.food);
    const dispatch_one = useDispatch();
    const dispatch_two = useDispatch();




    return (
        <div>
            <Nav />
            <div className="fooditem">
                <div className="row">
                    {
                        renderList
                    }
                </div>
            </div>
        </div>
    )
}

export default FoodItems
