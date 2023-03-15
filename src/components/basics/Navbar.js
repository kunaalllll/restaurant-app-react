import React from 'react'

const Navbar = ({filterItem, menuList}) => {
  return (
    <>
    <nav className="navbar">
        <div className="btn-group">

            {
                menuList.map((curELem) => {
                    return <button
                    className="btn-group__item"
                    onClick={() => filterItem(curELem)}
                  >
                    {curELem}
                  </button>
                })
            }
          
          {/* <button className="btn-group__item" onClick={() => setmenuData(Menu)}>
            All
          </button> */}
        </div>
      </nav>
    </>
  )
}

export default Navbar