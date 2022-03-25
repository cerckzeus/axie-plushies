import { Paper } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import AxieCartItem from "../../models/AxieCartItem";
import { cartActions } from "../../store/cart-slice";
import Button from "../UI/Button";

const CartItem: React.FC<{ item: AxieCartItem }> = ({ item }) => {

    const dispatch = useDispatch();

    const add = () => {
        dispatch(cartActions.addItemToCart({
            axieId: item.axieId,
            axieClass: item.axieClass,
            axieClassIcon: item.axieClassIcon,
            axieImage: item.axieImage,
            axiePrice: item.axiePrice,
            quantity: 1,
        }));
    };
    const remove = () => {
        dispatch(cartActions.removeItemFromCart(item.axieId));
    };

  return (
    <StyledCartItem classicon={item.axieClassIcon}>
      <div className="item-detail">
        <figure>
          <figcaption>
            #{item.axieId} - {item.axieClass}
          </figcaption>
        </figure>
        <div>
          <img src={item.axieImage} />
        </div>
        <div>
          <p>Price: ₱ {item.axiePrice}</p>
        </div>
        <div>
          <p>
            x{item.quantity} Total: ₱ {item.totalPrice}
          </p>
        </div>
      </div>
      <div className="item-actions">
        <Button onClick={remove}>-</Button>
        <Button onClick={add}>+</Button>
      </div>
    </StyledCartItem>
  );
};

const StyledCartItem = styled(Paper)<{ classicon: string }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
  background-color: rgba(200, 200, 200, 0.65) !important;
  margin: 5px;
  & div {
    margin: 2px;
  }
  & img {
    width: 150px;
  }
  & p {
    font-weight: bold;
  }
  & figcaption {
    font-weight: bold;
    display: flex;
    text-align: center;
    padding: 2px;
    /* background-color: #eee; */
  }
  & figcaption::before {
    height: 22px;
    width: 22px;
    content: url(${(props) => props.classicon});
  }
  & .item-detail {
  }

  & .item-actions {
  }

  & button {
    margin: 2px;
  }
`;

export default CartItem;
