import React, { useState } from 'react';
import "./style.css";
import Menu from './MenuApi';
import MenuCard from './MenuCard';
import Navbar from './Navbar';

const uniqueList = [
    ...new Set(Menu.map((curElem) => {
        return curElem.category;
    })), "All",
];

console.log(uniqueList);

const Resturant = () => {

    // it's hook that is useState declare before return
    const [menuData, setMenuData] = useState(Menu);
    const [menuList, setMenuList] = useState(uniqueList)

    const filterItem = (categ) => {
        if (categ === "All") {
            return setMenuData(Menu)
        }
        const updateList = Menu.filter((curElem) => {
            return curElem.category === categ;
        });
        setMenuData(updateList);
    }

    return (
        <>
            <Navbar filterItem={filterItem} menuList={menuList} />
            <MenuCard menuDataCatch={menuData} />
        </>
    )
}

export default Resturant
