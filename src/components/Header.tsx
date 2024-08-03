import { useState } from "react";

type HeaderProps = {
  headerNavigation: React.Dispatch<React.SetStateAction<boolean>>;
};

export function Header({ headerNavigation }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  function navigationToggle() {
    setIsOpen(!isOpen);
  }

  return (
    <header className="bg-black">
      <div className="container mx-auto flex items-center justify-between px-10 py-6">
        <div>
          <a
            onClick={() => {
              headerNavigation;
            }}
            href="/Mainpage"
            className="bg-gradient-to-tr from-indigo-600 to-green-600 bg-clip-text text-4xl font-bold text-transparent hover:cursor-pointer"
          >
            React Blog
          </a>
        </div>
        <nav className="flex items-center">
          <ul className="hidden items-center space-x-4 sm:flex">
            <li>
              <button
                onClick={navigationToggle}
                className="text-md from-indigo-600 to-green-600 hover:text-indigo-600"
              >
                <a href="/Mainpage">Home</a>
              </button>
            </li>
          </ul>
          <div className="ml-8 hidden items-center space-x-4 md:flex lg:ml-12"></div>
        </nav>
      </div>
    </header>
  );
}
