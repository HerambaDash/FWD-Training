import { createSlice, configureStore } from "@reduxjs/toolkit";

const departmentsSlice = createSlice({
  name: "departments",
  initialState: {},
  reducers: {
    initializeDepartment(state, action) {
      return { ...action.payload };
    },
    addDepartment(state, action) {
      let oldState = state;
      let keys = Object.keys(action.payload);
      oldState = {
        ...oldState,
        [keys[0]]: {
          ...action.payload[keys[0]],
        },
      };
      return oldState;
    },
    removeDepartment(state, action) {
      let oldState = state;
      delete oldState[action.payload];
      return oldState;
    },
    updateDepartment(state, action) {
      const { id, property, value } = action.payload;
      state[id][property] = value;
    },
  },
});

const accountSlice = createSlice({
  name: "account",
  initialState: {
    name : "",
    email : "",
    phone : "",
    date : ""
  },
  reducers: {
    updateAccountInfo(state, action) {
      const { name, email, phone, date } = action.payload;
      state.name = name.value;
      state.email = email.value;
      state.phone = phone.value;
      state.date = date.value;
    },
  },
});

const store = configureStore({
  reducer: {
    departments: departmentsSlice.reducer,
    accounts : accountSlice.reducer
    // customers : customersSlice.reducer
    // media : mediaSlice.reducer
  },
});

// console.log(store);
// const startingState = store.getState();
// console.log(JSON.stringify(startingState, null, 2));

export { store };
export const {
  initializeDepartment,
  addDepartment,
  removeDepartment,
  updateDepartment,
} = departmentsSlice.actions;
export const { updateAccountInfo } = accountSlice.actions;
