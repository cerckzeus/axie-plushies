
import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { uiActions } from "../../store/ui-slice";

const Backdrop: React.FC<{ onClick: () => void }> = (props) => {
  return <div className="backdrop" onClick={props.onClick}></div>;
};

const ModalOverlay: React.FC = (props) => {
  return (
    <div className="modal">
      <div className="content">{props.children}</div>
    </div>
  );
};

const Modal: React.FC = (props) => {
  const dispatch = useDispatch();


  const closeModal = () => {
    dispatch(uiActions.closeModal())
  };


  return (
    <StyledModal>
      <Backdrop onClick={closeModal}></Backdrop>
      <ModalOverlay>{props.children}</ModalOverlay>
    </StyledModal>
  );
};

const StyledModal = styled.div`
  .backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 20;
    background-color: rgba(0, 0, 0, 0.75);
  }

  .modal {
    position: fixed;
    top: 15vh;
    left: 5%;
    width: 90%;
    background-color: white;
    padding: 1rem;
    border-radius: 14px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
    z-index: 30;
    animation: slide-down 300ms ease-out forwards;
  }

  @media (min-width: 768px) {
    .modal {
      width: 40rem;
      left: calc(50% - 20rem);
    }
  }

  @keyframes slide-down {
    from {
      opacity: 0;
      transform: translateY(-3rem);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export default Modal;
