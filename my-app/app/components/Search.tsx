"use-client";

export default function Search() {
  return (
    <div className="bg-customLightGreen grid grid-col-1 justify-center items-center">
      <input
        type="text"
        placeholder="Search for products"
        className="border-2 border-gray-300 rounded-2xl p-1 my-4 w-80"
      />
    </div>
  );
}
