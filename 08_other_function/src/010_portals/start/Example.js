import { useState } from "react";
import { createPortal } from "react-dom";
import Modal from "./components/Modal";

const ModalPortal = ({ children }) => {
  const target = document.querySelector(".container.end");
  return createPortal(children, target);
};

const Example = () => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    
    <div onClick={() => console.log('空のdiv')}>
      <div className="container end" onClick={() => console.log('container')} />

      <button
        type="button"
        onClick={() => setModalOpen(true)}
        disabled={modalOpen}
      >
        モーダルを表示する
      </button>
      
      {modalOpen && (
        
        <ModalPortal>
          <Modal handleCloseClick={() => setModalOpen(false)} />
        </ModalPortal>
      )}
      
    </div>
  );
};

export default Example;