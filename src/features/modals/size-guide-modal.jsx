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
    width: "50%",
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
              width="100%"
              height="100%"
              effect="blur"
              key={"sizeGuideBrandImage"}
            />
          </div>
          <div className="sizeGuideBrandDescription">
            <h4> Gucci the fashion house</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde,
              iure perspiciatis aspernatur accusamus labore mollitia culpa est
              nihil suscipit dolorum ullam! Minima doloribus facilis aperiam
              fugit nam cum illum. Quidem.
            </p>
          </div>
        </div>

        <SizeGuideTab />
      </Modal>
    </div>
  );
}

export default SizeGuideModal;
