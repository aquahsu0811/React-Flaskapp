import ImgContext from "./image-context";
import { useReducer } from "react"

const defaultState = {
    items: [],
    bImgDir: [],
    fImgDir: [],
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
        case "getbImgDirAPI":
            console.log("test image path 2:", action.bImgDir);
            return {
                ...state,
                bImgDir: action.bImgDir
            }
        case "getfImgDirAPI":
            console.log("test image path fore:", action.fImgDir);
            return {
                ...state,
                fImgDir: action.fImgDir
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
    const getbImgDirHandler = (item) => {
        
        dispatchCartAction({type: "getbImgDirAPI", bImgDir: item });
        console.log("test back image:", item);
    }
    const getfImgDirHandler = (item) => {
        
        dispatchCartAction({type: "getfImgDirAPI", fImgDir: item });
        console.log("test fore image:", item);
    }
    const imgContext = {
        items: imgState.items,
        number:imgState.number,
        bImgDir: imgState.bImgDir,
        addItem: addCartItemHandler,
        removeItem: removeCartItemHandler,
        getItem: getItemHandler,
        getbImgDir: getbImgDirHandler,
        getFImgDir: getfImgDirHandler,
    }
    return <ImgContext.Provider value={imgContext}>
        {props.children}
    </ImgContext.Provider>
}

export default CartProvider;
