import "@/styles/globals.css";
import { Provider } from "react-redux";
import store from "@/pages/store";
import { useEffect } from "react";
import { setIsLargeScreen, setIsMobileScreen } from "./screenSlice/screenSlice";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    function handleResize() {
      // dispatch : untuk mengirim aksi yang memicu pembaruan nilai state.
      store.dispatch(setIsMobileScreen(window.innerWidth < 768))
      store.dispatch(setIsLargeScreen(window.innerWidth >= 1240))
    }
    window.addEventListener("resize", handleResize)
    
    return () => window.removeEventListener("resize", handleResize)
  } ,[])

  return (
    <Provider store={store}>
      <Component {...pageProps}/>
    </Provider>
  )
}

/** File _app.js dibuat otomatis oleh NextJS
 * fungsinya buat menerapkan perilaku/elemen global yang di butuhin semua halaman/aplikasi NextJS
 * 1. Untuk ngatur layout global
 * 2. Untuk mengelola state global
 * 3. Menggunakan CSS Global yang berlaku disemua halaman
 */