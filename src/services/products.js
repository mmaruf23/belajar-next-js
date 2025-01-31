// import librari axios untuk membuar request HTTP
import axios from 'axios'; 
const api = process.env.NEXT_PUBLIC_API;

// fungsi untuk mengambil semua data product dari fakeapi
export const getProducts = async () => {
  // jalanin didalam blok try-catch
  try {
    // request GET ke url API pake axios.get
    const response = await axios.get(`${api}/products`);

    // kembalikan data produk yang disimpan didalam response.
    return response.data;
  } catch (error) {
    // error handling
    throw new Error("Failed to fetch data :", error);
  }
};

export const getProductById = async (id) => {
  try {
    const res = await axios.get(`${api}/products/${id}`)
    return res.data;
  } catch (error) {
    throw new Error("Failed to fetch : ", error);
  }
}