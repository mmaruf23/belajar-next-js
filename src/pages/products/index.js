import Button from '@/components/atoms/Button';
import CardProduct from '@/components/molecules/CardProduct';
import Image from 'next/image';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { data } from '@/constant/products';
// import { BackToTopButton } from "@/components/atoms/Icons/BackToTopButton";
import Icons from '@/components/atoms/Icons';

const ProductPage = () => {
  const [username, setUsername] = useState('');
  const [cart, setCart] = useState([]);
  // const [total, setTotal] = useState(0);
  const footerRef = useRef();
  const [showBackToTop, setShowBackToTop] = useState(false);
  /**
   * useRef hook untuk membuat referensi ke element DOM
   * / fungsi untuk mengakses element DOM
   */

  // useState sebutan variabel di react.
  // useEffect untuk menangani side effect dari perubahan suatu data, yang dijalankan tiap kali halaman di load/refresh/render.
  useEffect(() => {
    const getUsername = localStorage.getItem('username');
    if (getUsername) {
      setUsername(getUsername);
    }

    setCart(JSON.parse(localStorage.getItem('cart')) || []);
  }, []); // [] : dependensi array, kalau kurung kosong buat mastiin useEffect hanya dijalankan sekali saat halaman dirender. // kalau ada state didalam dapendensi array maka fungsi untuk memantau perubahan di state tersebut.

  // fungsi untuk menambahkan produk ke cart
  const handleAddToCart = (id) => {
    // logic untuk mengecek kalau produk dengan id yang sama akan menambahkan qty saja jika tidak akan menambahkan item baru
    if (cart.find((item) => item.id === id)) {
      setCart(
        cart.map((item) =>
          item.id === id ? { ...item, qty: item.qty + 1 } : item
        )
      );
    } else {
      setCart([...cart, { id, qty: 1 }]);
    }
  };

  /**
   * useMemo : hooks untuk menyimpan hasil komputasi/perhitungan yang kompleks ke dalam cache , 
   * tujuannya agar fungsi tersebut tidak perlu dijalankan/dihitung ulang ketika tidak ada perubahan pada state.
   */
  const cartTotal = useMemo(() => {
      return cart.reduce((total, item) => {
      const product = data.find((product) => product.id === item.id);
      return total + product.price * item.qty;
    }, 0);
  }, [cart]);

  useEffect(() => {
    if (cart.length > 0) {
      // const sumTotal = cart.reduce((total, item) => {
      //   const product = data.find((product) => product.id === item.id);
      //   return total + product.price * item.qty;
      // }, 0);
      // setTotal(sumTotal);
      localStorage.setItem('cart', JSON.stringify(cart));
    }
  }, [cart]);

  useEffect(() => {
    function handleScroll() {
      console.log(footerRef);

      //nambil nilai offsetTop (posisi vertikal dari element footer yang ddi referensikan oleh footerRef)
      const footerTop = footerRef.current.offsetTop; // mengambil batas atas komponen.
      const viewportHeight = window.innerHeight; // mengambil tinggi innerHeight dari object window  (tinggi viewport tanpa toolbar & scrllbar)
      const scrollPosition = window.scrollY; //mengambil nilai scrollY dari object window (posisi scroll vertikal - sumbuY di layar)

      // logic untuk mengecek apakah posisi scroll dilayar telah mencapai element footer
      if (scrollPosition + viewportHeight >= footerTop) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }

      //event listener untuk jalanin fungsi handleScroll setiap even scroll terjadi
    }
    window.addEventListener('scroll', handleScroll);

    // unmount;
    return () => removeEventListener('scroll', handleScroll);
  }, [footerRef]);

  // e,h handler untuk menjalankan fungsi logout dan menghapus data username & password dari localstorage.
  function handleLogout() {
    localStorage.removeItem('username');
    localStorage.removeItem('password');
    localStorage.removeItem('cart');
    window.location.href = '/login';
  }

  function handleBackToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    // nested component
    <>
      <div className="flex justify-between items-center bg-black text-white font-bold px-5 py-4">
        <h1>Hi, {username}</h1>
        <Button
          onClick={handleLogout}
          buttonClassname="bg-red-500 hover:bg-red-800"
        >
          Logout
        </Button>
      </div>

      <div className="flex px-5 py-8">
        {/* Product */}
        <div className="flex flex-col">
          <h1 className="text-3xl font-bold text-blue-500 uppercase mb-4">
            Products
          </h1>
          <div className="flex flex-wrap gap-4">
            {data.map((item) => (
              <CardProduct key={item.id}>
                <CardProduct.Header image={item.image} />
                <CardProduct.Body title={item.title} desc={item.description} />
                <CardProduct.Footer
                  price={item.price}
                  handleAddToCart={handleAddToCart}
                  id={item.id}
                />
              </CardProduct>
            ))}
          </div>
        </div>
        {/* cart */}
        {cart.length > 0 && (
          <div className="w-2/6">
            <h1 className="text-3xl font-bold text-blue-500 mb-4 uppercase">
              Cart
            </h1>
            <div className="flex flex-col gap-2">
              {cart.map((item) => {
                const datas = data.find((data) => data.id === item.id);
                return (
                  <div className="flex p-4 border rounded-lg" key={item.id}>
                    <Image
                      className="rounded"
                      width={100}
                      height={100}
                      src={datas.image}
                      alt="cart image"
                    />
                    <div className="flex justify-between w-full">
                      <div className="flex flex-col justify-between ml-3">
                        <span className="font-bold text-xl">{datas.title}</span>
                        <span className="font-semibold">{datas.price}</span>
                      </div>
                      <div className="flex flex-col justify-center items-center">
                        <span className="mb-1">Qty</span>
                        <span className="flex justify-center items-center font-semibold p-2 border rounded-sm text-center w-10 h-10">
                          {item.qty}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}

              <div className="flex justify-between px-4 py-2 border mt-2 font-semibold rounded-lg">
                <span>Total</span>
                <span>{cartTotal}</span>
              </div>
            </div>
          </div>
        )}
      </div>
      {/* Footer */}
      {showBackToTop && (
        <div
          onClick={handleBackToTop}
          className="fixed bottom-20 right-5 bg-gradient-hover p-2 rounded-full"
        >
          <Icons.DoubleArrowUp />
        </div>
      )}
      <footer
        ref={footerRef}
        className="text-center p-5 bg-black text-white w-full"
      >
        All right reserved &copy; || by Maruf
      </footer>
    </>
  );
};

export default ProductPage;
