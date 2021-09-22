import React from "react";
// 預設全域
const  ImgContext = React.createContext({
    items: [],
    number: 0,
    bImgDir: [],
    fImgDir: [],
    addItem: (item) =>{},
    removeItem :(id) =>{},
    getItem :(itme) =>{},
    getbImgDir: (item) =>{},
    getfImgDir: (item) =>{}
});

export default ImgContext;