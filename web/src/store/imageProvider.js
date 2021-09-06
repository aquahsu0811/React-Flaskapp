import ImgContext from "./image-context";
import { useReducer } from "react"

const defaultState = {
    items: [],
    imgPath: [],
    number:0
}

const cartreducer = (state = defaultState, action) => {
    switch (action.type) {
        case "ADD":
            let updateItems
            updateItems = state.number + action.number
            console.log("number:",updateItems);
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
        case "getImgPathAPI":
            console.log("test image path 2:", action.imgPath);
            return {
                ...state,
                imgPath: action.imgPath
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
    const getImgPathHandler = (imgPath) => {
        
        dispatchCartAction({type: "getImgPathAPI", imgPath: imgPath });
        console.log("test image path0:", imgPath);
    }
    const imgContext = {
        items: imgState.items,
        number:imgState.number,
        imgPath: imgState.imgPath,
        addItem: addCartItemHandler,
        removeItem: removeCartItemHandler,
        getItem: getItemHandler,
        getImgPath: getImgPathHandler
    }
    return <ImgContext.Provider value={imgContext}>
        {props.children}
    </ImgContext.Provider>
}

export default CartProvider;
