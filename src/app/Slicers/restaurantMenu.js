import { createSlice } from "@reduxjs/toolkit";
import { dummyMenu } from "../../data/apartment-owner/restaurant-menu";

const initialState = {
  menu: dummyMenu,
  categories: dummyMenu,
  card: [],
};

const restaurantMenuSlicer = createSlice({
  name: "restaurantMenu",
  initialState,
  reducers: {
    getAllMenu: (state) => {
      state.menu = dummyMenu;
    },
    filterMenu: (state, action) => {
      state.menu = dummyMenu.filter((item) => {
        return item.category === action.payload;
      });
    },
    addToCard: (state, action) => {
      state.card = [action.payload, ...state.card];
    },
    incrementAmount: (state, action) => {
      state.card = state.card.map((item) => {
        if (item.id === action.payload) {
          return {
            ...item,
            count: item.count + 1,
            amount: (item.count + 1) * item.price,
          };
        }

        return item;
      });
    },
    decrementAmount: (state, action) => {
      state.card = state.card.map((item) => {
        if (item.id === action.payload) {
          return {
            ...item,
            count: item.count <= 1 ? 1 : item.count - 1,
            amount: (item.count - 1) * item.price,
          };
        }

        return item;
      });
    },
    deleteCardItems: (state, action) => {
      state.card = state.card.filter((item) => item.id !== action.payload);
    },
  },
});

export const {
  getAllMenu,
  filterMenu,
  addToCard,
  decrementAmount,
  incrementAmount,
  deleteCardItems,
} = restaurantMenuSlicer.actions;
export default restaurantMenuSlicer.reducer;
