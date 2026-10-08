import logo from "../../assets/Logo (1).svg";
import { NavLink } from "react-router-dom";

export default function App() {
  return (
    <div className="container flex justify-between items-center text-centers">
      <NavLink to={"/"}>
        <img src={logo} alt="" />
      </NavLink>
      <nav className="flex gap-5 items-center">
        <NavLink to={"/about"}>
          <h2>About</h2>
        </NavLink>
        <a href="">Careers</a>
        <NavLink to={"/service"}>
          <h2>Service</h2>
        </NavLink>
        <a href="">Blog</a>
        <a href="">Contact us</a>

        <button className="bg-[#F58A071A] text-[#F58A07] w-43 h-13 rounded-[31px]">
          Clone project
        </button>
      </nav>
    </div>
  );
}
