import React from "react";

function cardComponent({ img_src }) {
  return (
    <div className="card">
      <figure className="card__head">
        <img src={img_src} alt="product" />
        <span className="card__condition">NEW</span>

        <span className="card__views">565</span>
      </figure>

      <div className="card__body">
        <div className="card__pre__name">
          <div className="card__tag">
            <div className="dot" />
            Live Auction
          </div>

          <div className="card__time__left">3 days left</div>
        </div>

        <h3 className="card__name">
          Original Iphone Boxes by Apple Liquidation Lot
        </h3>

        <ul className="card__specs">
          <li>
            <div>$200</div>
            <span>Current Bid</span>
          </li>

          <li>
            <div>$200</div>
            <span>Current Bid</span>
          </li>

          <li>
            <div>$200</div>
            <span>Current Bid</span>
          </li>
        </ul>
      </div>

      <div className="card__footer">
        <button className="btn green">View Auction</button>
        <button className="btn white">Watch</button>
      </div>
    </div>
  );
}

export default cardComponent;
