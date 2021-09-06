import React from "react";
// 預設全域
const  ImgContext = React.createContext({
    items: [],
    number: 0,
    imgPath: [],
    addItem: (item) =>{},
    removeItem :(id) =>{},
    getItem :(itme) =>{},
    getImgPath: (item) =>{}
});

export default ImgContext;