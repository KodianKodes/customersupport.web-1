import React from "react";
import { useState } from "react";
import {Modal} from "../components/modal.component"

export function BlankPage () {
const [showModal, setShowModal] = useState(false);
  return (
    <div>
      <button className="upload-button" onClick={() => setShowModal(true)}>
        Upload
      </button>
      {showModal && <Modal closeModal={setShowModal} />}
    </div>
  );
}