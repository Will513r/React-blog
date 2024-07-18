import { useState } from "react";

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <button
        className="bg-black p-2 text-white md:hidden"
        onClick={toggleSidebar}
        style={{ position: "absolute", top: "1.5rem", right: "2rem" }}
      >
        Sidebar
      </button>
      <aside
        className={
          (isOpen ? "block" : "hidden") +
          " w-64 bg-black p-4 text-white md:block"
        }
      >
        <div className="mx-auto flex items-center justify-around rounded-lg bg-white px-1">
          <input
            type="text"
            placeholder="seach"
            className="w-full rounded-md bg-gray-100 p-2 outline-none ring-indigo-700"
          />
          <span className="bg-gray-100 text-black">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6" // Added these classes h-6 w-6 here
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </span>
        </div>
        <div className="rounded-md bg-white">
          <h1 className="my-4 cursor-pointer rounded-md border-b-2 bg-white py-2 text-center text-xl text-gray-600">
            Posts
          </h1>
          <div className="list-none rounded-md bg-white text-center">
            <li className="border-b-2 py-3">
              <a
                href="#"
                className="text-1xl bg-gradient-to-tr from-indigo-600 to-green-600 bg-clip-text font-bold text-transparent hover:cursor-pointer"
              >
                Post 1
              </a>
            </li>
            <li className="border-b-2 py-3">
              <a
                href="#"
                className="text-1xl bg-gradient-to-tr from-indigo-600 to-green-600 bg-clip-text font-bold text-transparent hover:cursor-pointer"
              >
                Post 2
              </a>
            </li>
            <li className="border-b-2 py-3">
              <a
                href="#"
                className="text-1xl bg-gradient-to-tr from-indigo-600 to-green-600 bg-clip-text font-bold text-transparent hover:cursor-pointer"
              >
                Post 3
              </a>
            </li>
            <li className="border-b-2 py-3">
              <a
                href="#"
                className="text-1xl bg-gradient-to-tr from-indigo-600 to-green-600 bg-clip-text font-bold text-transparent hover:cursor-pointer"
              >
                Post 4
              </a>
            </li>
            <li className="py-3">
              <a
                href="#"
                className="text-1xl bg-gradient-to-tr from-indigo-600 to-green-600 bg-clip-text font-bold text-transparent hover:cursor-pointer"
              >
                Post 5
              </a>
            </li>
          </div>
        </div>
      </aside>
    </>
  );
}
