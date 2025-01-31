import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';



export const NotFoundPage = () => {
  const router = useRouter();
  return (
    <div className="bg-indigo-900 relative overflow-hidden h-screen">
      <Image
        src="https://external-preview.redd.it/4MddL-315mp40uH18BgGL2-5b6NIPHcDMBSWuN11ynM.jpg?width=960&crop=smart&auto=webp&s=b98d54a43b3dac555df398588a2c791e0f3076d9"
        className="absolute h-full w-full object-cover"
        alt="404"
        width={10000}
        height={10000}
      />

      <div className="inset-0 bg-black opacity-25 absolute"> </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 flex items-center py-32 xl:py-40">
        <div className="w-full font-mono flex flex-col items-center relative z-10">
          <h1 className="font-extrabold text-5xl text-center text-white leading-tight mt-4">
            You are all alone here
          </h1>
          <span onClick={() => router.back()} className="font-extrabold text-5xl text-center text-white leading-tight mt-4 uppercase p-4 bg-black rounded-xl hover:bg-gray-700">
            back
          </span>

          <p className="font-extrabold text-8xl my-44 text-white animate-bounce">
            404
          </p>
        </div>
      </div>
    </div>
  );
};
export default NotFoundPage;
