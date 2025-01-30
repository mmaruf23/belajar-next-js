import { createSlice } from "@reduxjs/toolkit";

/**Create Slice : fungsi untuk bikin slice dari reduc store yang berisi reducer dan action
 * yang merupakan bagian dari state.
 */
const screenSlice = createSlice({
  name: 'screen', // nama slice ini
  initialState: {
    isMobileScreen: false,
    isLargeScreen: false,
    username: "",
  },
  // reducers: object yang berisi kumpulan reduces yang akan dipake buat ngubah state slice
  reducers: {
    // setIsMobileScreen : nama reducer
    setIsMobileScreen: (state, action) => {
      // untuk mengubah/perbarui nilai state isMobileScreen menjadi nilai yang dikirim dari action.payload
      state.isMobileScreen = action.payload;
    },
    setIsLargeScreen: (state, action) => {
      state.isLargeScreen = action.payload;
    },
    setUsername: (state, action) => {
      state.username = action.payload;
    }
  },
});

//exoprt action creator yang bernama setIsMobileScreen dari sclice screenSlice untuk mengirim action ke store redux dan memicu perubahan state.

export const { setIsMobileScreen, setIsLargeScreen, setUsername } = screenSlice.actions;

export default screenSlice.reducer; // export reducer biar bisa disimpan kedalam store.

