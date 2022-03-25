import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { selectAuth, selectCart } from "../../store";
import { cartActions } from "../../store/cart-slice";
import { uiActions } from "../../store/ui-slice";
import Button from "../UI/Button";
import Checkmark from "../UI/Checkmark.styled";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";

const Cart: React.FC = () => {
  const dispatch = useDispatch();
  const { axieItems, totalAmount } = useSelector(selectCart);
  const { email } = useSelector(selectAuth);
  const [isDone, setIsDone] = useState(false);
  const [checkoutClicked, setCheckoutClicked] = useState(false);

  const closeCart = () => {
    dispatch(uiActions.closeModal());
  };

  const checkout = async () => {
    await dispatch(cartActions.checkoutCart());
    setCheckoutClicked(true);
    setIsDone((prevState) => !prevState);
  };

  return (
    <Modal>
      {checkoutClicked && (
        <CheckoutContent>
          <Checkmark done={isDone} />
          <div className="details">
            <h2>Thank you for shopping at Axie Plushies!</h2>
            <div>
              Dear {email} expect your cutest axie plushie within a week.
            </div>
          </div>
        </CheckoutContent>
      )}
      {!checkoutClicked && (
        <CartContainer>
          <div className="items">
            {axieItems &&
              axieItems.map((item) => (
                <CartItem key={item.axieId} item={item} />
              ))}
          </div>
          <div className="footer">
            <h2>Total: ₱ {totalAmount}</h2>
            <div className="actions">
              <Button className="close" onClick={closeCart}>
                Close
              </Button>
              <Button className="checkout" onClick={checkout}>
                Checkout
              </Button>
            </div>
          </div>
        </CartContainer>
      )}
    </Modal>
  );
};

const CheckoutContent = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  & .details {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 2rem;
    & div {
      margin-top: 1rem;
    }
  }
`;

const CartContainer = styled.div`
  & .footer {
    padding-top: 10px;
  }
  & .items {
    max-height: 20rem;
    overflow: auto;
  }
  & .actions {
    display: flex;
    justify-content: flex-end;
    & button {
      margin: 0 10px;
    }
    & .close:hover {
      color: white;
      background-color: red;
    }
    & .checkout:hover {
      color: white;
      background-color: #00c853;
    }
  }
`;

export default Cart;
