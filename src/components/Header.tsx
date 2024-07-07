import Reactlogo from "../assets/react.svg";

export function Header() {
  return (
    <header className="bg-black">
      <nav className="shadow">
        <div className="container mx-auto flex items-center justify-between px-10 py-6">
          <div>
            <h1 className="bg-gradient-to-tr from-indigo-600 to-green-600 bg-clip-text text-5xl font-bold text-transparent hover:cursor-pointer">
              React Blog
            </h1>
          </div>
          <img src={Reactlogo} />
          <div>
            <div className="hover:cursor-pointer sm:hidden">
              <span className="mb-1 block h-1 w-8 rounded-full bg-gradient-to-tr from-indigo-600 to-green-600"></span>
              <span className="mb-1 block h-1 w-8 rounded-full bg-gradient-to-tr from-indigo-600 to-green-600"></span>
              <span className="mb-1 block h-1 w-8 rounded-full bg-gradient-to-tr from-indigo-600 to-green-600"></span>
            </div>
            <div className="flex items-center">
              <ul className="hidden items-center space-x-4 sm:flex">
                <li>
                  <a
                    href="#"
                    className="text-md from-indigo-600 to-green-600 hover:text-indigo-600"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-md from-indigo-600 to-green-600 hover:text-indigo-600"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-md from-indigo-600 to-green-600 hover:text-indigo-600"
                  >
                    Posts
                  </a>
                </li>
              </ul>

              <div className="ml-8 hidden items-center space-x-4 md:flex lg:ml-12"></div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
