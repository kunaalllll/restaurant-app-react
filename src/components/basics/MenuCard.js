import React from "react";

const MenuCard = ({ menuData }) => {
  return (
    <>
      <div className="bada-container">
        {menuData.map((curELem) => {
          return (
            <div className="card-container" key={curELem.id}>
              <div className="card">
                <div className="card-body">
                  <span className="card-number card-circle subtle">
                    {curELem.id}
                  </span>
                  <span className="card-author subtle">{curELem.category}</span>
                  <h2 className="card-title">{curELem.name}</h2>
                  <span className="card-description subtle">
                    {curELem.description}
                  </span>
                  <div className="card-read">Read</div>
                </div>
                <img src={curELem.image} alt="" className="card-media" />
                <span className="card-tag subtle">Order Now</span>
              </div>
            </div>
          );
        })}{" "}
      </div>
    </>
  );
};

export default MenuCard;
