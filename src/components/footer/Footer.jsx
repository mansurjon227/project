import logo from "../../assets/Logo.svg";

export default function Footer() {
  return (
    <footer className="bg-[#063255] border-t border-gray-100 pt-16 pb-12">
      <div className="container max-w-6xl mx-auto px-6 grid grid-cols-4 gap-8 text-left">
        <div className="flex flex-col space-y-4">
          <div className="flex items-center space-x-2">
            <span className="font-bold text-xl text-gray-900">
              <img src={logo} alt="" />
            </span>
          </div>
          <p className="text-gray-400">
            There are many things are needed to start the Fast Food Business.
          </p>
        </div>

        <div>
          <h4 className="font-bold text-gray-900 ">Quick Links</h4>
          <ul className=" text-gray-500">
            <li>
              <a href="#home" className="hover:text-orange-500">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-orange-500 ">
                About Us
              </a>
            </li>
            <li>
              <a href="#menu" className="hover:text-orange-500 ">
                Menu
              </a>
            </li>
            <li>
              <a href="#features" className="hover:text-orange-500 ">
                Features
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-gray-900">Menu</h4>
          <ul className=" text-gray-500">
            <li>
              <a href="#" className="hover:text-orange-500 ">
                Quality Food
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-500 ">
                Fast Delivery
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-500 ">
                Subscribe
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-gray-900 ">Contact Us</h4>
          <ul className=" text-gray-500">
            <li>+1 (555) 000-0000</li>
            <li>info@foodnetwork.com</li>
            <li>123 Food Street, City</li>
          </ul>
        </div>
      </div>

      <div className=" px-6 mt-12 pt-6 border-gray-100 text-center text-gray-400">
        © 2026 Food Network. All rights reserved.
      </div>
    </footer>
  );
}
