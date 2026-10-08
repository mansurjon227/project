import human from "../../assets/humman.svg";

export default function Hero() {
  return (
    <div className="container py-20 px-6">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="max-w-xl ">
          <h1 className="text-5xl  font-bold text-gray-900 py-2">
            We value human, organizational, and operational intelligence, not
            just artificial
          </h1>

          <p className="text-gray-600 text-base py-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam leo
            odio, sagittis quis ornare quis.
          </p>

          <div className="flex items-center gap-4">
            <button className="bg-amber-500 hover:bg-amber-600 text-white font-medium px-6 py-3 rounded-full">
              Work With Us  
            </button>
          </div>
        </div>

        <div className="w-full max-w-sm h-96 bg-amber-500 rounded-t-3xl relative overflow-hidden flex items-end justify-center">
          <img
            src={human}
            alt=""
            className="w-full h-full object-cover grayscale"
          />
        </div>
      </div>
    </div>
  );
}
