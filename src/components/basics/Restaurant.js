import React, { useState } from "react";
import "./style.css";
import MenuCard from "./MenuCard";
import Menu from "./MenuApi";
import Navbar from "./Navbar";

const uniqueList = [
  ...new Set(
    Menu.map((curELem) => {
      return curELem.category;
    })
  ),
  "All",
];

const Restaurant = () => {
  const [menuData, setmenuData] = useState(Menu);
  const [menuList, setmenuList] = useState(uniqueList)
  const filterItem = (category) => {

    if(category === "All") {
      setmenuData(Menu)
      return;
    }

    const updatedList = Menu.filter((curELem) => {
      return curELem.category === category;
    });

    setmenuData(updatedList);
  };

  return (
    <>
      <Navbar filterItem={filterItem} menuList={menuList} />
      <MenuCard menuData={menuData} />
    </>
  );
};

export default Restaurant;
