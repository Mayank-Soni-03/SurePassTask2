import React, { useState } from "react";
import Mymodal from "./ShowModal";

const Modal = () => {
    const [showModal, setShowModal] = useState(false);
    const closeModal = () => setShowModal(false)


    return (
        <>
        <button className="modal-btn" onClick={() => setShowModal(true) } > Add New Row </button>
        {showModal &&<Mymodal closeModal = {closeModal} /> }
        </>
    )
}

export default Modal;