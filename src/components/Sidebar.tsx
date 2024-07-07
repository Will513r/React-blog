export function Sidebar() {
  return (
    <aside className="col-span-1 h-96 w-64 bg-gray-800 p-4 text-white">
      <div className="flex items-center justify-around rounded-lg bg-white px-4 py-3">
        <input
          type="text"
          placeholder="seach"
          className="mr-2 w-full rounded-md bg-gray-100 p-2 pl-2 outline-none ring-indigo-700"
        />
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor "
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
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
  );
}
