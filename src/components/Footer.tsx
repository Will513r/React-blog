import Udlogo from "../assets/underdog.jpg";

export function Footer() {
  return (
    <footer className="container mx-auto p-4 px-6 py-12 text-white">
      <div className="container mx-auto grid-cols-1 items-center gap-6 gap-y-5 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
        <div className="flex-shrink-0 sm:col-span-2">
          <div className="mx-auto mt-6 flex flex-col justify-center space-y-3 md:flex-row md:space-y-0"></div>
        </div>
        <div className="ml-5">
          <p className="text-gray700 h-0 w-auto font-semibold">Quick Link</p>
          <div className="item-start mt-5 flex flex-col space-y-2 text-right">
            <a
              href="#"
              className="hover:text-gray-90 text-gray-600 hover:text-blue-700"
            >
              Home
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-700">
              About Us
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-700">
              Contact Us
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-700">
              Service
            </a>
          </div>
          <img src={Udlogo} className="h-auto w-auto" />
        </div>
        <div>
          <p className="text-gray700 font-semibold"> Documentation </p>
          <div className="item-start mt-5 flex flex-col space-y-2"></div>
        </div>
      </div>
      <hr className="mt-5 justify-center" />
      <div className="m-5">
        <p className="text-center text-gray-600">
          Kenson-johnson-pod All Right Reserved
        </p>
      </div>
    </footer>
  );
}
