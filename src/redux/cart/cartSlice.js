import { createSlice } from '@reduxjs/toolkit';


/**Create Slice : fungsi untuk bikin slice dari reduc store yang berisi reducer dan action
 * yang merupakan bagian dari state.
 */
const cartSlice = createSlice({
  name: 'cart', // nama slice

  // initialState : nilai awal state
  initialState: {
    data:
      [],
  },
  // reducer dan action untuk memperbarui nilai state.data yang dikirim dari action.payload
  reducers: {
    addToCart: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { addToCart } = cartSlice.actions; // export action biar bisa dipake

export default cartSlice.reducer; // export reducer biar isa disimpen kedalam store.
