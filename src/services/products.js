// import librari axios untuk membuar request HTTP
import axios from 'axios'; 


// fungsi untuk mengambil semua data product dari fakeapi
export const getProducts = async () => {
  // jalanin didalam blok try-catch
  try {
    // request GET ke url API pake axios.get
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API}/products`);

    // kembalikan data produk yang disimpan didalam response.
    return response.data;
  } catch (error) {
    // error handling
    throw new Error("Failed to fetch data :", error);
  }
};