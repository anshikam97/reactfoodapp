import { ActionTypes } from '../contants/action-types';

const initialState = {
    foods: [],
};

export const foodReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_FOODS:
            return { ...state, foods: payload };
        default:
            return state;
    }
};

export const selectedfoodReducer = (state = [], { type, payload }) => {
    switch (type) {
        case ActionTypes.SELECTED_FOODS:
            return [...state, payload]
        case ActionTypes.REMOVE_SELECTED_FOOD:
            const index = state.findIndex(food => food.name === payload.name)
            return state.filter((_, i) => i !== index);
        default:
            return state;
    }
};
