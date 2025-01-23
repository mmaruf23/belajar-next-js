import Button from "@/components/atoms/Button";
import CardProduct from "@/components/molecules/CardProduct";
import React, { useEffect, useState } from "react";
const data = [
  {
    id: 1,
    image: "/images/image.png",
    title: "Odeng 1",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus, impedit.",
    price: 2000
  },
  {
    id: 2,
    image: "/images/image.png",
    title: "Odeng 1",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus, impedit.",
    price: 4000
  },
  {
    id: 3,
    image: "/images/image.png",
    title: "Odeng 1",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus, impedit.",
    price: 2500
  },
  {
    id: 4,
    image: "/images/image.png",
    title: "Odeng 1",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus, impedit.",
    price: 2300
  },
  {
    id: 5,
    image: "/images/image.png",
    title: "Odeng 1",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus, impedit.",
    price: 3000
  },
];


const ProductPage = () => {


  const [username, setUsername] = useState("");
  // useState sebutan variabel di react. 

  // useEffect untuk menangani side effect dari perubahan suatu data, yang dijalankan tiap kali halaman di load/refresh/render.
  useEffect(() => {
    const getUsername = localStorage.getItem("username");
    if (getUsername) {
      setUsername(getUsername);
    }
  }, []); // [] : dependensi array, kalau kurung kosong buat mastiin useEffect hanya dijalankan sekali saat halaman dirender. // kalau ada state didalam dapendensi array maka fungsi untuk memantau perubahan di state tersebut.

  // e,h handler untuk menjalankan fungsi logout dan menghapus data username & password dari localstorage.
  function handleLogout() {
    localStorage.removeItem('username');
    localStorage.removeItem('password');
    window.location.href = "/login";
  }

  return (
    // nested component
    <>
      <div className="flex justify-between items-center bg-black text-white font-bold px-5 py-4">
        <h1>Hi, {username}</h1>
        <Button onClick={handleLogout} buttonClassname="bg-red-500 hover:bg-red-800">Logout</Button>
      </div>
      <div className="flex justify-center items-center min-h-screen gap-2">
        <CardProduct>
          <CardProduct.Header image={'/images/image.png'} />
          <CardProduct.Body
            title={'Odeng'}
            desc="Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum"
          />
          <CardProduct.Footer price={'2000'} />
        </CardProduct>

        {/* rendering list : teknik menampilkan beberapa element ui tertentu berdasarkan data dinamis yang didimpan dedalam sebuah json / api*/}
        {data.map((item) => (
          <CardProduct key={item.id}>
            <CardProduct.Header image={item.image} />
            <CardProduct.Body title={item.title} desc={item.description} />
            <CardProduct.Footer price={item.price} />
          </CardProduct>
        ))}
      </div>
    </>
  );
};

export default ProductPage;