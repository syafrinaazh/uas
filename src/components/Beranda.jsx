import React from 'react';
import { FaHeart, FaBookmark, FaBars, FaSearch } from 'react-icons/fa';

const Beranda = () => {
  return (
    <div className="max-w-md mx-auto bg-white min-h-screen shadow-lg relative pb-10">
      
      {/* Top Bar / Header */}
      <div className="flex justify-between items-center p-4 bg-[#FFF8E7]">
        <div className="flex items-center gap-2 bg-white rounded-full px-3 py-1 shadow-sm">
          <div className="w-6 h-6 bg-gray-300 rounded-full"></div> {/* Placeholder Avatar */}
          <span className="text-sm font-semibold">Fina</span>
          <span className="text-xs text-yellow-500 font-bold ml-2">⭐ 100</span>
        </div>
        <div className="flex gap-3 text-red-400 text-xl">
          <FaHeart className="cursor-pointer" />
          <FaBookmark className="cursor-pointer text-amber-700" />
          <FaBars className="cursor-pointer text-gray-500" />
        </div>
      </div>

      {/* Logo & Navigation */}
      <div className="text-center mt-6">
        <h1 className="text-4xl font-bold text-blue-500 inline-block">
          K<span className="text-yellow-400">O</span><span className="text-red-400">s</span><span className="text-pink-400">t</span>
        </h1>
        <p className="text-xs text-green-600 font-semibold -mt-1 tracking-widest">Cook Studio</p>
      </div>

      <div className="bg-brand-brown mx-4 mt-4 rounded-md flex justify-between px-4 py-2 text-white text-xs font-semibold">
        <button className="hover:text-yellow-200">beranda</button>
        <button className="hover:text-yellow-200">kategori</button>
        <button className="hover:text-yellow-200">resep populer</button>
        <button className="hover:text-yellow-200">mulai memasak</button>
      </div>

      {/* Search Bar */}
      <div className="px-4 mt-6 relative">
        <input 
          type="text" 
          placeholder="Cari resep favoritmu" 
          className="w-full bg-red-50 text-red-400 placeholder-red-300 text-sm rounded-full py-2 px-4 outline-none border border-red-100"
        />
        <button className="absolute right-6 top-1/2 -translate-y-1/2 bg-green-500 text-white p-1.5 rounded-full">
          <FaSearch size={12} />
        </button>
      </div>

      {/* Kategori Makanan & Halaman Simpan Grid */}
      <div className="flex px-4 mt-6 gap-4">
        {/* Kiri: Kategori */}
        <div className="w-2/3 flex justify-between">
          <div className="text-center">
            <h3 className="text-[10px] text-red-400 mb-2">Sarapan</h3>
            <div className="flex gap-1">
              <div className="w-8 h-8 bg-amber-800 rounded-md"></div>
              <div className="w-8 h-8 bg-amber-800 rounded-md"></div>
            </div>
          </div>
          <div className="text-center">
            <h3 className="text-[10px] text-red-400 mb-2">Makan siang</h3>
            <div className="flex gap-1">
              <div className="w-8 h-8 bg-yellow-400 rounded-md"></div>
              <div className="w-8 h-8 bg-yellow-400 rounded-md"></div>
            </div>
          </div>
          <div className="text-center">
            <h3 className="text-[10px] text-red-400 mb-2">Makan malam</h3>
            <div className="flex gap-1">
              <div className="w-8 h-8 bg-green-500 rounded-md relative opacity-50"></div>
              <div className="w-8 h-8 bg-green-500 rounded-md relative opacity-50"></div>
            </div>
          </div>
        </div>

        {/* Kanan: Halaman Simpan */}
        <div className="w-1/3 text-center border-l border-gray-200 pl-4">
           <h3 className="text-[10px] text-red-400 mb-2">Halaman Simpan</h3>
           <div className="flex gap-1 justify-center mb-1">
              <div className="w-7 h-7 bg-red-100 rounded"></div>
              <div className="w-7 h-7 bg-orange-100 rounded"></div>
              <div className="w-7 h-7 bg-pink-100 rounded"></div>
           </div>
           <button className="text-[8px] bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded-full mt-1">Lihat semua &gt;</button>
        </div>
      </div>

      {/* List Resep */}
      <div className="px-4 mt-8 space-y-3">
        {/* Card 1 */}
        <div className="bg-brand-peach rounded-lg flex items-center p-2 relative h-12">
          <div className="w-12 h-12 bg-gray-200 rounded-full flex-shrink-0 absolute -left-2 shadow-md"></div>
          <span className="ml-14 text-white text-sm font-semibold">Spaghetti Carbonara</span>
        </div>
        {/* Card 2 */}
        <div className="bg-brand-peach rounded-lg flex items-center p-2 relative h-12">
          <div className="w-12 h-12 bg-gray-200 rounded-full flex-shrink-0 absolute -left-2 shadow-md"></div>
          <span className="ml-14 text-white text-sm font-semibold">Rotisserie Chicken</span>
        </div>
        {/* Card 3 */}
        <div className="bg-brand-peach rounded-lg flex items-center p-2 relative h-12">
          <div className="w-12 h-12 bg-gray-200 rounded-full flex-shrink-0 absolute -left-2 shadow-md"></div>
          <span className="ml-14 text-white text-sm font-semibold">Sate Ayam</span>
        </div>
      </div>

      <div className="text-center mt-6">
        <button className="bg-green-500 text-white text-xs font-bold px-6 py-2 rounded-full shadow-md">
          Jelajahi Resep ✨
        </button>
      </div>

      {/* Footer Inspirasi */}
      <div className="px-4 mt-10 flex justify-between items-end">
        <div>
          <h4 className="text-brand-brown font-bold text-sm max-w-[150px]">Butuh inspirasi masakan enak anak kost?</h4>
          <button className="mt-2 bg-green-500 text-white text-[10px] px-3 py-1 rounded-full">
            Lihat kategori resep ✨
          </button>
        </div>
        <div className="w-16 h-12 bg-gray-200 rounded-md"></div> {/* Placeholder Image */}
      </div>

    </div>
  );
};

export default Beranda;