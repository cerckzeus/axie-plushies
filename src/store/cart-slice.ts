import { createSlice } from "@reduxjs/toolkit";
import AxieCartItem from "../models/AxieCartItem";

interface cartSliceState {
  axieItems: AxieCartItem[];
  totalPieces: number;
  totalAmount: number;
  changed: boolean;
}

const initialState: cartSliceState = {
  axieItems: [],
  totalPieces: 0,
  totalAmount: 0,
  changed: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart(state) {
      state.axieItems = [];
      state.changed = false;
      state.totalPieces = 0;
      state.totalAmount = 0;
    },
    replaceCart(state, action) {
      if (!action.payload.axieItems) {
        state.axieItems = [];
      } else {
        state.axieItems = action.payload.axieItems;
      }
      state.changed = false;
      state.totalPieces += action.payload.totalPieces;
      state.totalAmount = action.payload.totalAmount;
    },
    checkoutCart(state) {
      state.axieItems = [];
      state.changed = true;
      state.totalPieces = 0;
      state.totalAmount = 0;
    },
    addItemToCart(state, action) {
      state.changed = true;
      const newItem = action.payload;
      const existingItem = state.axieItems.find(
        (item) => item.axieId === newItem.axieId
      );
      if (!existingItem) {
        state.axieItems.push({
          axieId: newItem.axieId,
          axieClass: newItem.axieClass,
          axieClassIcon: newItem.axieClassIcon,
          axieImage: newItem.axieImage,
          axiePrice: newItem.axiePrice,
          quantity: newItem.quantity,
          totalPrice: newItem.axiePrice * newItem.quantity,
        });
      } else {
        existingItem.quantity += newItem.quantity;
        existingItem.totalPrice += newItem.axiePrice * newItem.quantity;
      }
      state.totalPieces += newItem.quantity;
      state.totalAmount += newItem.axiePrice * newItem.quantity;
    },
    removeItemFromCart(state, action) {
      state.changed = true;
      const newItemId = action.payload;
      const existingItem = state.axieItems.find(
        (item) => item.axieId === newItemId
      )!;
      if (existingItem.quantity === 1) {
        state.axieItems = state.axieItems.filter(
          (item) => item.axieId !== newItemId
        );
      } else {
        existingItem.quantity--;
        existingItem.totalPrice =
          existingItem.totalPrice - existingItem.axiePrice;
      }
      state.totalPieces--;
      state.totalAmount -= existingItem.axiePrice;
    },
  },
});

export const fetchCartAction = () => {
  return async (dispatch: any) => {
    const id = localStorage.getItem("localId");
    const fetchDataRequest = async () => {
      const res = await fetch(
        "https://axie-plushies-default-rtdb.firebaseio.com/users/" +
          id +
          "/cart.json"
      );

      if (!res.ok) {
        //throw error
      }

      const data = await res.json();

      console.log("RESPONSE DATA OF CART:");
      console.log(data);

      return data;
    };

    try {
      const cartData = await fetchDataRequest();
      dispatch(cartActions.replaceCart(cartData));
    } catch (error) {}
  };
};

export const sendCartAction = (cart: cartSliceState) => {
  return async (dispatch: any) => {
    const id = localStorage.getItem("localId");
    const sendDataRequest = async () => {
      const res = await fetch(
        "https://axie-plushies-default-rtdb.firebaseio.com/users/" +
          id +
          "/cart.json",
        {
          method: "PUT",
          body: JSON.stringify({
            axieItems: cart.axieItems,
            totalPieces: cart.totalPieces,
            totalAmount: cart.totalAmount,
          }),
          headers: { "Content-type": "application/json" },
        }
      );

      if (!res.ok) {
        //throw error
      }

      const data = await res.json();

      console.log("RESPONSE DATA OF SENT CART:");
      console.log(data);
    };

    try {
      await sendDataRequest();
    } catch (error) {}
  };
};

export const cartActions = cartSlice.actions;

export default cartSlice;
