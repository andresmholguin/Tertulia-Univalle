import { useState } from "react";
import data from "./assets/data.json";

function App() {
  const [id, setId] = useState("");
  const [person, setPerson] = useState(null);
  const [searched, setSearched] = useState(false);

  const handleChange = (e) => {
    setId(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const result = data.find((item) => item.CEDULA.toString() === id.trim());

    setPerson(result || null);
    setSearched(true);
  };

  const handleReset = () => {
    setId("");
    setPerson(null);
    setSearched(false);
  };

  return (
    <>
      <div className="flex flex-col my-5">
        <div className="flex justify-center">
          <img
            src="https://www.colboletos.com/themes/colboletos/assets/img/logo.webp"
            alt="logo Colboletos"
            className="w-80 object-contain h-auto"
          />
        </div>

        <h1 className="text-bold md:text-5xl m-auto mb-3 text-3xl font-bold">
          COLBOLETOS - FITCALI2026
        </h1>

        <p className="md:text-4xl m-auto text-2xl italic font-light">
          CONVENIO
        </p>
      </div>

      <form className="flex flex-col" onSubmit={handleSubmit}>
        <label className="block overflow-hidden rounded-md border border-blue-400 px-3 py-2 focus-within:shadow-xl focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600 w-[80%] md:w-[40%] m-auto">
          <span className="text-xs font-medium text-gray-700">DOCUMENTO</span>

          <input
            type="text"
            onChange={handleChange}
            value={id}
            className="focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm w-full p-0 mt-1 font-bold border-none"
          />
        </label>

        <div className="flex justify-center gap-4 mt-6">
          <button
            type="submit"
            className="hover:bg-blue-700 hover:shadow-inner px-10 py-2 font-bold text-white transition-all bg-blue-800 rounded-full cursor-pointer"
          >
            Buscar
          </button>

          <button
            type="button"
            onClick={handleReset}
            className="hover:bg-gray-400 hover:shadow-inner px-10 py-2 font-bold text-black transition-all bg-gray-300 rounded-full cursor-pointer"
          >
            Borrar
          </button>
        </div>
      </form>

      {searched && (
        <div className="w-[80%] md:w-[40%] m-auto mt-8">
          {person ? (
            <div className="rounded-xl p-5 border shadow-lg">
              <h2 className="mb-4 text-2xl font-bold">Resultado encontrado</h2>

              <div className="flex flex-col gap-2">
                <p>
                  <span className="font-bold">ID:</span> {person.ID}
                </p>

                <p>
                  <span className="font-bold">Cédula:</span> {person.CEDULA}
                </p>

                <p>
                  <span className="font-bold">Apellidos:</span>{" "}
                  {person.APELLIDOS}
                </p>

                <p>
                  <span className="font-bold">Nombres:</span> {person.NOMBRES}
                </p>
              </div>
            </div>
          ) : (
            <div className="rounded-xl p-5 text-center border shadow-lg">
              <p className="font-bold text-red-500">
                No se encontró ninguna persona con esa cédula
              </p>
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default App;
