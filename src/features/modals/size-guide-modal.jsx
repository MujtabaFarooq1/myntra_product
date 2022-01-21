import React, { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Modal from "react-modal";
import SizeGuideTab from "../../partials/product/tabs/size-guide-tab";

// Setting root element for modal
Modal.setAppElement("#root");

//
const modalStyles = {
  overlay: {
    backgroundColor: "#80808080",
  },
  content: {
    height: "100vh",
    backgroundColor: "#fff",
    width: "58.8%",
    marginLeft: "auto",
    top: "0",
    right: "0",
    padding: "1rem",
    minWidth: "300px",
  },
};

function SizeGuideModal() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <div>
      <a
        href="/"
        className="customBtn"
        onClick={(e) => {
          e.preventDefault();
          setModalIsOpen(true);
        }}
      >
        Show size guide
      </a>

      <Modal
        className={"customSizeGuideModal"}
        isOpen={modalIsOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={() => {
          setModalIsOpen(false);
        }}
        style={modalStyles}
        contentLabel="Example Modal"
      >
        <button
          className="sizeGuideCloseButton"
          onClick={() => {
            setModalIsOpen(false);
          }}
        >
          &#10005;
        </button>

        <div className="sizeGuideBrandContainer">
          <div className="sizeGuideBrand__imgContainer">
            <LazyLoadImage
              alt="size guide brand image"
              src={"/images/blog/author.jpg"}
              threshold={500}
              width="50%"
              height="50%"
              effect="blur"
              key={"sizeGuideBrandImage"}
            />
          </div>
          <div className="sizeGuideBrandDescription">
            <h4 className="size-modal-title">Gucci the fashion house</h4>
            <p>
              HRX by Hrithik Roshan Men Grey Solid Hooded Bomber Jacket<br />
              this gucci fashion house in the form of the brands
            </p>
            <p>₹ 1399 <span className="modal-dell-tag"><del> ₹ 3999</del></span> <span className="modal-size-price"> (65% OFF)</span></p>
          </div>
        </div>

        <SizeGuideTab />
      </Modal>
    </div>
  );
}

export default SizeGuideModal;
