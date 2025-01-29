import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState(true);
  const [isMobile, setIsMobile] = useState({
    width: 0,
    height: 0,
    mobile: false,
  });

  /**
   * useState : hooks react untuk membuat state ke functional component
   * state : variabel yang dipakai untuk menyimpan data
   * data : state yang menyimpan nilai awal data
   * setData : fungsi untuk memperbarui nilai data
   * true : data dengan tipe boolean yang menjadi nilai awal state data
   * ketika state data dipanggil dengan nilai baru , react akan merender ulang komponen dengan nilai state yang baru
   */

  // fungsi yang memperbarui nilai state : didalamnya memanggil fungsi setData (hooks yang mengubah nilai state)
  const handleChange = () => {

    setData(!data);
    // mengubah nilai awal menjadi false/true (!data) ketika handleChange dipanggil (button diclick).
    /**
     * bisa juga seperti ini
     * setData((prevState) => (!prevState))
     */

  };

  useEffect(() => {
    setIsMobile({
      width: window.innerWidth,
      height: window.innerHeight,
      mobile: false,
    });
    window.addEventListener("resize", (event) => {
      setIsMobile({
        width: event.target.innerWidth,
        height: event.target.innerHeight,
        mobile: window.innerWidth < 450 //? true : false,
      });
    });
    return () => {
      window.removeEventListener("resize", () => { });
    };
  }, [isMobile.mobile]);


  console.log(isMobile.width);
  console.log(isMobile.mobile);


  const [mode, setMode] = useState(false);
  const handleChangeMode = () => {
    setMode(!mode);
  };

  return (
    <div className={`${mode ? 'bg-black text-white' : 'bg-white'} transition delay-150 duration-800 ease-in-out`}>
      <div className="flex flex-col justify-center items-center h-screen gap-4 ">
        {data ? <h1 className="text-6xl font-bold">Data</h1> : <h1 className="text-6xl font-bold">Updated Data</h1>}
        {isMobile.mobile && <p className="text-3xl font-bold">Ini Mobile</p>}
        <button onClick={handleChange} className="mt-10 px-20 py-10 bg-blue-500 hover:bg-blue-900 text-white text-3xl font-bold rounded-xl">Change</button>
        <button onClick={handleChangeMode} className="mt-10 px-20 py-10 bg-blue-500 hover:bg-blue-900 text-white text-3xl font-bold rounded-xl">Change Mode</button>
      </div>
    </div>
  );
}

