import React, { useState } from 'react'
import "./style.css"
import MenuCard from "./MenuCard"
import Menu from './MenuApi'

const Restaurant = () => {
    const [menuData, setmenuData] = useState(Menu)

    const filterItem = (category) => {
        const updatedList =  Menu.filter((curELem) => {  
          return curELem.category === category;
        });

        setmenuData(updatedList);
    }


  return (
    <>
    <nav className='navbar'>
    <div className="btn-group">
        <button className="btn-group__item" onClick={() => filterItem("breakfast")}>Breakfast</button>
        <button className="btn-group__item" onClick={() => filterItem("lunch")}>Lunch</button>
        <button className="btn-group__item" onClick={() => filterItem("evening")}>Evening Snacks</button>
        <button className="btn-group__item" onClick={() => filterItem("dinner")}>Dinner</button>
        <button className="btn-group__item" onClick={() => (setmenuData(Menu))}>All</button>

    </div>
    </nav>
   <MenuCard menuData = { menuData }/>
    </>
  )
}

export default Restaurant