import ImgContext from "./image-context";
import { useReducer } from "react"

const defaultState = {
    items: [],
    number:0
}

const cartreducer = (state, action) => {
    switch (action.type) {
        case "ADD":
            let updateItems
            updateItems = state.number + action.number
            return {
                ...state,
                number: updateItems,
            }
        case "minus":
            let minusUpdateItems
            minusUpdateItems = state.number - action.number
            console.log("minus",{
                ...state,
                number: minusUpdateItems,
            })
            return {
                ...state,
                number: minusUpdateItems,
            }
        case "getItemAPI":
            return {
                ...state,
                items: action.item
            }
        default:
            return defaultState
    }
}


const CartProvider = props => {
    const [imgState, dispatchCartAction] = useReducer(cartreducer, defaultState)
    const addCartItemHandler = (item) => {
        dispatchCartAction({ type: "ADD", number: 1 })
    }
    const removeCartItemHandler = (id) => {
        dispatchCartAction({ type: "minus", number: 1 })
    }
    const getItemHandler = (item) => {
        dispatchCartAction({ type: "getItemAPI", item: item })
    }
    const imgContext = {
        items: imgState.items,
        number:imgState.number,
        addItem: addCartItemHandler,
        removeItem: removeCartItemHandler,
        getItem: getItemHandler
    }
    return <ImgContext.Provider value={imgContext}>
        {props.children}
    </ImgContext.Provider>
}

export default CartProvider;