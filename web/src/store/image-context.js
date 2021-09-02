import React from "react";
// 預設全域
const  ImgContext = React.createContext({
    items: [],
    number: 0,
    addItem: (item) =>{},
    removeItem :(id) =>{},
    getItem :(itme) =>{}
});

export default ImgContext;