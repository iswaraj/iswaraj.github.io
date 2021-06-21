import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';

const Modal = ({ closeModal }) => {
    return ReactDOM.createPortal(
        <div onClick={closeModal} className="modal-overlay">
            {/* <h1>I am the modal</h1> */}

            <div onClick={(e) => e.stopPropagation()} className="modal-container">
                <div className="upper-section">
                    <h1>Hello</h1>
                    <p onClick={closeModal} className="close">&times;</p>
                </div>
                <div className="middle-section">
                    <h3>This is Swaraj</h3>

                </div>
                <div className="lower-section">
                    <a onClick={closeModal} className="modal-btn btn-green">Continue</a>


                </div>
            </div>

        </div>,
        document.getElementById('modal')
    );
}

export default Modal;