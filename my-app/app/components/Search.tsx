"use-client";

export default function Search() {
  return (
    <div className="bg-customLightGreen items-center flex gap-2 justify-between md:justify-center px-6  pt-3 ">
      <input
        type="text"
        placeholder="Search Products"
        className="border-2 border-[#A6A9A3] md:w-[50%] rounded-2xl p-1 my-4 w-80 text-center text-[#9a9d97] focus:outline-none placeholder-[#B9B9B9] "
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="44"
        height="44"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2.00"
        stroke-linecap="round"
        stroke-linejoin="round"
        className="lucide lucide-menu text-[#626663] sm:hidden "
      >
        <line x1="4" x2="20" y1="12" y2="12" />
        <line x1="4" x2="20" y1="6" y2="6" />
        <line x1="4" x2="20" y1="18" y2="18" />
      </svg>
      <div className="text-[#696c6a] font-medium border-2 border-[#A6A9A3] py-1 px-3 rounded-2xl bg-[#eaede6] hover:bg-[#e2e4df] hover:text-[#474547] hidden sm:block">
        <h2>Filters</h2>
      </div>
    </div>
  );
}
