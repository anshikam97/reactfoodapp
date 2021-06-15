import { ActionTypes } from "../contants/action-types"


export const setFoods = (foods) => {
    return{
        type : ActionTypes.SET_FOODS,
        payload : foods,
    };
};

export const selectedFood = (carts) =>{
    return{
        type : ActionTypes.SELECTED_FOODS,
        payload : carts,
    };
};

export const removeFood = (carts) =>{
    return{
        type : ActionTypes.REMOVE_SELECTED_FOOD,
        payload : carts,
    };
};