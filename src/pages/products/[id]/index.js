import { formatCurrency } from '@/helpers/util/formatCurrency';
import { getProductById } from '@/services/products';
import axios from 'axios';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import React from 'react';
import useSWR from 'swr';

const ProductDetailPage = ({ detailProducts }) => {
  // console.log(detailProducts);

  /**
   * useSWR (Stale Whale Revalidate) : hooks third party dari tim vercel untuk fetching data , catching dna revalidate disisi client,
   * rumus : const { data, error, isLoading, isValidating } = useSWR(key(endpoint), dataFetcher)
   * swr punya beberapa properti
   * data : data yang diambil dari API
   * error : error handling saat ambil data
   * isLoading : status loading
   * isValidating : status validasi ulang data (perbarui data)
   */
  const api = process.env.NEXT_PUBLIC_API;
  const { data } = useSWR(
    `${api}/products/${detailProducts?.id}`,
    async () => {
      const res = await axios.get(`${api}/products/${detailProducts?.id}`);
      return res.data;
    },
    {
      initialData: detailProducts,
    }
  );

  return (
    <>
      <div className="flex flex-col px-5 py-5 bg-gradient-to-b from-black to-blue-900 min-h-screen">
        <h1 className="text-4xl font-bold text-white">Detail Products</h1>
        <div className="p-4 mt-5 rounded-2xl bg-white bg-opacity-20 max-w-xl">
          <Image className='p-4 rounded-lg w-full aspect-video object-contain' src={data?.image} width={300} height={300} alt='Image' />

          <h2 className='text-2xl font-bold text-white'>{data?.title}</h2>
          <p className="text-white font-semibold mt-5">{data?.description}</p>
          <p className="text-white text-xl font-bold mt-5">{formatCurrency(detailProducts.price * 5, "en-US", "USD")}</p>
        </div>
      </div>
    </>);
};

export async function getServerSideProps(context) {
  const id = context.query.id;
  const { query } = context;
  console.log(query);
  console.log(query.id);


  try {
    const detailProducts = await getProductById(id);

    if (!detailProducts) {
      return {
        notFound: true
      };
    }


    return {
      props: {
        detailProducts,
      },
    };
  } catch (error) {

    // cara kedua 404 handleing ini lebel catch
    // if (error.response.data.status === 404){
    //   return {
    //     notFound: true
    //   }
    // }

    console.log(error);
    return {
      props: {
        error: 'error',
      },
    };
  }
}

export default ProductDetailPage;
