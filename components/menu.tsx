import { useState } from 'react'; 

export default function Menu () {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex justify-center absolute top-0 right-0 lg:relative">
      <button
        className="flex justify-center items-center w-full px-2 lg:m-2 text-base md:text-xl p-1 font-fredericka text-teal bg-white bg-opacity-50 rounded-sm transition duration-300 hover:bg-opacity-100 shadow hover:shadow-xl"
        onClick={() => setOpen(!open)}
      >
        <svg viewBox="0 0 100 70" width="25" fill="currentColor">
          <rect width="100" height="10"></rect>
          <rect y="30" width="100" height="10"></rect>
          <rect y="60" width="100" height="10"></rect>
        </svg>
        <span className="px-2">Menu</span>
      </button>
      { open && (
        <div className="absolute w-40 h-60 bg-green-400">
        </div>
      )}
    </div>
  );
}
