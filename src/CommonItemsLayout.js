import React from "react";

const cardBtnSec = {
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  marginTop: "2rem",
};

function CommonItemsLayout({ totalItems }) {
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {totalItems.map((itemDetails) => {
        return (
          <div
            className="card commonCard"
            style={{
              width: "200px",
              border: "2px solid #000",
              padding: "1rem",
            }}
          >
            <img style={{ width: "100%" }} src={itemDetails.imagePath} alt="" />
            {/* <h4>Gold Flake Kings Red Cigarette</h4> */}
            <h4>{itemDetails.itemName}</h4>
            {/* <p>20 piece</p> */}
            <p>{itemDetails.noOfItems}</p>
            <div className="cardBtnSec d-flex" style={cardBtnSec}>
              <p>
                {/* price */}
                {/* <b>₹340</b> */}
                <b>{itemDetails.price}</b>
              </p>
              <button className="btn-product">Add</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default CommonItemsLayout;