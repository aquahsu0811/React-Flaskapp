import React from "react";
// 預設全域
const  ImgContext = React.createContext({
    items: [],
    number: 0,
    bImgDir: [],
    addItem: (item) =>{},
    removeItem :(id) =>{},
    getItem :(itme) =>{},
    getbImgDir: (item) =>{},
    getfImgDir: (item) =>{}
});

export default ImgContext;