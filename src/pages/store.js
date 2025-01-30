import { configureStore } from '@reduxjs/toolkit';
import screenSlice from './screenSlice/screenSlice';


/**
 * Store : object yang menyimpan semua state aplikasi dan menyediakan method yntuk dispatch (mengirim) action dan mengakses state.
 */

export const store = configureStore({
  reducer: {
    // panggil reducer - reducer yang sudah di buat.
    screen: screenSlice,
  },
});

export default store;
