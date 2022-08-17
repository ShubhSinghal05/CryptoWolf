import { BUY_NOW, REMOVE, ADD_TO_CART } from "./ActionTypes"

export function buy_now(payload) {
    return {
        type: BUY_NOW,
        payload
    }
}

export function remove(payload) {
    return {
        type: REMOVE,
        payload
    }
}

export function add_to_cart(payload) {
    return {
        type: ADD_TO_CART,
        payload
    }
}