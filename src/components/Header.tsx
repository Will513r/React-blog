// import { useState } from "react";

type HeaderProps = {
  setHeaderNavigation: React.Dispatch<React.SetStateAction<number>>;
};

export function Header({ setHeaderNavigation }: HeaderProps) {
  // const [isOpen, setIsOpen] = useState(false);

  // const toggleHeader = () => {
  //   setIsOpen(!isOpen);
  //   setHeaderNavigation((prev) => prev + 1);
  // };

  return (
    <header className="bg-black">
      <div className="container mx-auto flex items-center justify-between px-10 py-6">
        <div>
          <span
            onClick={() => setHeaderNavigation((prev) => prev + 1)}
            className="bg-gradient-to-tr from-indigo-600 to-green-600 bg-clip-text text-4xl font-bold text-transparent hover:cursor-pointer"
          >
            <a href="/Mainpage">React Blog</a>
          </span>
        </div>
        <nav className="flex items-center">
          <ul className="hidden items-center space-x-4 sm:flex">
            <li
              onClick={() => setHeaderNavigation(0)}
              className="text-md from-indigo-600 to-green-600 hover:text-indigo-600"
            >
              <a href="/Mainpage">Home</a>
            </li>
          </ul>
          <div className="ml-8 hidden items-center space-x-4 md:flex lg:ml-12"></div>
        </nav>
      </div>
    </header>
  );
}
