import React, { useState } from 'react';
import Image from 'next/image';
import Lupa from '../../assets/icons/lupa.png';

const SearchGalery = ({ onSearch }: { onSearch: (query: string) => void }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    onSearch(searchTerm); // Envia o termo pesquisado para o componente pai
  };

  return (
    <div className="flex w-full flex-col sm:flex-row justify-between mt-6 mb-10 max-w-screen-xl pr-1">
      <div className="flex items-center mb-2 sm:mb-0">
        <h1 className="text-white font-roboto text-3xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-4xl font-normal mb-3">
          Galeria
        </h1>
      </div>
      <div className="w-full flex justify-center sm:justify-end sm:translate-x-[-55px]">
        <div className="flex h-10 rounded-md overflow-hidden w-full max-w-xs sm:max-w-md">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex w-full bg-none border-none outline-none rounded-l-lg px-3"
            placeholder="Pesquisa"
          />
          <button
            onClick={handleSearch}
            className="bg-Primary flex items-center h-full text-white px-6 text-lg font-semibold rounded-r-md cursor-pointer"
          >
            <Image src={Lupa} alt="lupa" width={20} height={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchGalery;
