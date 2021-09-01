import React from "react";
const  ImgContext = React.createContext({
    items: [],
    number: 0,
    // totalAmount: 0,
    addItem: (item) =>{},
    removeItem :(id) =>{},
    getItem :(itme) =>{}
});

export default ImgContext;