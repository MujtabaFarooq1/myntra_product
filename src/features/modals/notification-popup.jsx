import React from "react";

function NotificationPopup(props) {
  const { message } = props;

  return (
    <div className="minipopup-area">
      <div className="minipopup-box" style={{ top: "0" }}>
        <div className="product-action">
          <p style={{ color: "#000", fontSize: "15px" }}> {message} </p>
        </div>
        <button className="mfp-close"></button>
      </div>
    </div>
  );
}

export default React.memo(NotificationPopup);
