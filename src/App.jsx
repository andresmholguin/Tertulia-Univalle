import { useState } from "react";
import Result from "./Result";

function App() {
  const [id, setId] = useState("");
  const [show, setShow] = useState(false);

  const handleChange = (e) => {
    setId(e.target.value);
    setShow(false);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (id !== "") {
      setShow(true);
    }
  };

  return (
    <>
      <div className="flex flex-col my-5">
        <div className="flex justify-center">
          <img
            src="src\assets\logo_tertulia.svg"
            alt="Logo Museo La Tertulia"
            className="px-2 h-28"
          />
          <img
            src="src\assets\univalle.png"
            alt="Logo Museo La Tertulia"
            className="px-2 h-28 "
          />
        </div>
        <h1 className="m-auto text-bold text-3xl md:text-5xl font-bold">
          TERTULIA - UNIVALLE
        </h1>
        <p className="m-auto text-2xl md:text-4xl font-light italic">
          CONVENIO
        </p>
      </div>
      <form className="flex flex-col" onSubmit={handleSubmit}>
        <label className="block overflow-hidden rounded-md border border-fuchsia-400 px-3 py-2 focus-within:shadow-xl focus-within:border-fuchsia-600 focus-within:ring-1 focus-within:ring-fuchsia-600 w-[80%] md:w-[40%] m-auto">
          <span className=" font-medium text-gray-700 text-xs">
            {" "}
            DOCUMENTO{" "}
          </span>

          <input
            type="number"
            id="UserEmail"
            onChange={handleChange}
            value={id}
            className="mt-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm font-bold"
          />
        </label>
        <button
          type="submit"
          className="m-auto mt-6 bg-fuchsia-800 px-10 py-2 rounded-full text-white font-bold hover:bg-fuchsia-700  transition-all hover:shadow-inner cursor-pointer"
        >
          Buscar
        </button>
      </form>
      <div>{show ? <Result id={id} /> : ""}</div>
    </>
  );
}

export default App;
