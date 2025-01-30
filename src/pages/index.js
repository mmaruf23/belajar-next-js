import { useLogin } from '@/hooks/useLogin';
import { useState } from 'react';
import { useSelector } from 'react-redux';

export default function Home() {
  const [data, setData] = useState(true);
  const username = useLogin();
  const { isMobileScreen } = useSelector((state) => state.screen);
  console.log("mobile : ", isMobileScreen);
   
  
  const handleChange = () => {
    setData(!data);
    // mengubah nilai awal menjadi false/true (!data) ketika handleChange dipanggil (button diclick).
    /**
     * bisa juga seperti ini
     * setData((prevState) => (!prevState))
     */
  };


  const [mode, setMode] = useState(false);
  const handleChangeMode = () => {
    setMode(!mode);
  };

  return (
    <div
      className={`${
        mode ? 'bg-black text-white' : 'bg-white'
      } transition delay-150 duration-800 ease-in-out`}
    >
      <div className="flex flex-col justify-center items-center h-screen gap-4 ">
        {data ? (
          <h1 className="text-6xl font-bold">Data</h1>
        ) : (
          <h1 className="text-6xl font-bold">Updated Data</h1>
        )}
        {isMobileScreen && <p className="text-3xl font-bold">Ini Mobile</p>}
        <button
          onClick={handleChange}
          className="mt-10 px-20 py-10 bg-blue-500 hover:bg-blue-900 text-white text-3xl font-bold rounded-xl"
        >
          Change
        </button>
        <button
          onClick={handleChangeMode}
          className="mt-10 px-20 py-10 bg-blue-500 hover:bg-blue-900 text-white text-3xl font-bold rounded-xl"
        >
          Change Mode
        </button>
        <h1 className="text-6xl font-bold">Hi , {username}</h1>
      </div>
    </div>
  );
}
