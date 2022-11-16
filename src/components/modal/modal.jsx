import AOS from "aos";
import "aos/dist/aos.css";
import React from "react";
import ModalBlock from "./modal-block";

import { useEffect } from "react";
import "./modal.css";

function Modal({ showHideModal, itemData }) {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      <div className="modal_wrapper">
        <div
          data-aos="zoom-in"
          data-aos-duration="600"
          className="modal_background"
          onClick={showHideModal}
        ></div>

        <ModalBlock showHideModal={showHideModal} itemData={itemData} />
      </div>
    </>
  );
}

export default Modal;
