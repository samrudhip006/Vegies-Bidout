import axios from "axios";
import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { getAllAuctionItems } from "./auctionSlice";

const superAdminSlice = createSlice({
  name: "superAdmin",
  initialState: {
    loading: false,
    monthlyRevenue: [],
    totalAuctioneers: [],
    totalBidders: [],
    paymentProofs: [],
    singlePaymentProof: {},
  },
  reducers: {
    requestForAllUsers(state, action) {
      state.loading = true;
      state.totalAuctioneers = [];
      state.totalBidders = [];
    },
    successForAllUsers(state, action) {
      state.loading = false;
      state.totalAuctioneers = action.payload.auctioneersArray;
      state.totalBidders = action.payload.biddersArray;
    },
    failureForAllUsers(state, action) {
      state.loading = false;
      state.totalAuctioneers = [];
      state.totalBidders = [];
    },
    requestForAuctionItemDelete(state, action) {
      state.loading = true;
    },
    successForAuctionItemDelete(state, action) {
      state.loading = false;
    },
    failureForAuctionItemDelete(state, action) {
      state.loading = false;
    },
    clearAllErrors(state, action) {
      state.loading = false;
      state.monthlyRevenue = state.monthlyRevenue;
      state.paymentProofs = state.paymentProofs;
      state.totalAuctioneers = state.totalAuctioneers;
      state.totalBidders = state.totalBidders;
      state.singlePaymentProof = {};
    },
  },
});



export const getAllUsers = () => async (dispatch) => {
  dispatch(superAdminSlice.actions.requestForAllUsers());
  try {
    const response = await axios.get(
      "http://localhost:5001/api/v1/superadmin/users/getall",
      { withCredentials: true }
    );
    dispatch(superAdminSlice.actions.successForAllUsers(response.data));
  } catch (error) {
    dispatch(superAdminSlice.actions.failureForAllUsers());
    console.error(error.response.data.message);
  }
};

export const deleteAuctionItem = (id) => async (dispatch) => {
  dispatch(superAdminSlice.actions.requestForAuctionItemDelete());
  try {
    const response = await axios.delete(
      `http://localhost:5001/api/v1/superadmin/auctionitem/delete/${id}`,
      { withCredentials: true }
    );
    dispatch(superAdminSlice.actions.successForAuctionItemDelete());
    toast.success(response.data.message);
    dispatch(getAllAuctionItems());
  } catch (error) {
    dispatch(superAdminSlice.actions.failureForAuctionItemDelete());
    console.error(error.response.data.message);
    toast.error(error.response.data.message);
  }
};

export const clearAllSuperAdminSliceErrors = () => (dispatch) => {
  dispatch(superAdminSlice.actions.clearAllErrors());
};

export default superAdminSlice.reducer;