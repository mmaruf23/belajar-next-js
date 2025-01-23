import CardProduct from "@/components/molecules/CardProduct";
import React from "react";


const ProductPage = () => {

  const data = [
    {
      id: 1,
      image: "/images/image.png",
      title: "Odeng 1",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus, impedit.",
      price: "1000"
    },
    {
      id: 1,
      image: "/images/image.png",
      title: "Odeng 1",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus, impedit.",
      price: "1000"
    },
    {
      id: 1,
      image: "/images/image.png",
      title: "Odeng 1",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus, impedit.",
      price: "1000"
    },
    {
      id: 1,
      image: "/images/image.png",
      title: "Odeng 1",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus, impedit.",
      price: "1000"
    },
    {
      id: 1,
      image: "/images/image.png",
      title: "Odeng 1",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus, impedit.",
      price: "1000"
    },
  ];

  return (
    // nested component
    <div className="flex justify-center items-center min-h-screen gap-2">
      <CardProduct>
        <CardProduct.Header image={"/images/image.png"} />
        <CardProduct.Body title={"Odeng"} desc="Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum" />
        <CardProduct.Footer price={"2000"} />
      </CardProduct>

    {/* rendering list : teknik menampilkan beberapa element ui tertentu berdasarkan data dinamis yang didimpan dedalam sebuah json / api*/}
      {data.map(item => (
        <CardProduct key={item.id}>
          <CardProduct.Header image={item.image} />
          <CardProduct.Body title={item.title} desc={item.description} />
          <CardProduct.Footer price={item.price} />
        </CardProduct>
      ))}
    </div>
  );
};

export default ProductPage;