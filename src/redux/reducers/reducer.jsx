const INIT_STATE = {
  carts: [],
};

export const cartreducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "ADD_CART":
      // return {
      //   ...state,
      //   carts: [...state.carts, action.payload],
      // };

      const itemIndex = state.carts.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.carts[itemIndex].qnty += 1;
      } else {
        const temp = { ...action.payload, qnty: 1 };
        return {
          ...state,
          carts: [...state.carts, temp],
        };
      }
    // to remove from cart
    case "RMV_CART":
      const data = state.carts.filter((el) => el.id !== action.payload);
      return {
        ...state,
        carts: data,
      };
    case "RMV_ONE":
      const itemIndex_Dec = state.carts.findIndex(
        (item) => item.id === action.payload.id
      );
      if (state.carts[itemIndex_Dec].qnty >= 1) {
        const dltitem = (state.carts[itemIndex_Dec].qnty -= 1);
        return {
          ...state,
          carts: [...state.carts],
        };
      } else if (state.carts[itemIndex_Dec].qnty === 1) {
        const data = state.carts.filter((el) => el.id !== action.payload.id);
        return {
          ...state,
          carts: data,
        };
      }

    default:
      return state;
  }
};
