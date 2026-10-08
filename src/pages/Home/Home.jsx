import human from "../../assets/human.svg";
import logo1 from "../../assets/Logo2.svg";
import logo2 from "../../assets/Logo3.svg";
import logo3 from "../../assets/Logo4.svg";

export default function Hero() {
  return (
    <div className="container py-20 px-6">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="max-w-xl ">
          <h1 className="text-5xl  font-bold text-gray-900 py-2">
            Prosper with our <br /> bespoke solutions
          </h1>

          <p className="text-gray-600 text-base py-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique
          </p>

          <div className="flex items-center gap-4">
            <button className="bg-amber-500 hover:bg-amber-600 text-white font-medium px-6 py-3 rounded-full">
              See Our Services
            </button>
            <button className="text-gray-900 font-medium px-6 py-3">
              See All Services
            </button>
          </div>

          <div className="pt-6">
            <p className="text-xs text-gray-500 uppercase mb-3">
              Worked with 100+ Companies
            </p>
            <div className="flex items-center gap-6 text-gray-700 font-bold">
              <img src={logo1} alt="" />
              <img src={logo2} alt="" />
              <img src={logo3} alt="" />
            </div>
          </div>
        </div>

        <div className="w-full max-w-sm h-96 bg-amber-500 rounded-t-3xl relative overflow-hidden flex items-end justify-center">
          <img
            src={human}
            alt="man"
            className="w-full h-full object-cover grayscale"
          />
        </div>
      </div>
    </div>
  );
}
