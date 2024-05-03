import PropTypes from "prop-types";
import Data from "../src/assets/data.json";

const Result = ({ id }) => {
  const search = (id) => {
    return Data.filter((user) => {
      if (user.id === parseInt(id)) {
        return user;
      }
    });
  };

  const data = search(id);

  return (
    <>
      {data.length > 0 ? (
        <div className="flex flex-col">
          <label className="block overflow-hidden rounded-md border border-fuchsia-400 px-3 py-2 focus-within:shadow-xl focus-within:border-fuchsia-600 focus-within:ring-1 focus-within:ring-fuchsia-600 w-[80%] md:w-[40%] m-auto mt-6">
            <span className=" font-medium text-gray-700 text-xs mt-2">
              {" "}
              Nombre{" "}
            </span>

            <input
              type="string"
              readOnly
              value={data.length > 0 ? data[0].name : "No existe"}
              className="mt-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm font-bold"
            />
          </label>
          <label className="block overflow-hidden rounded-md border border-fuchsia-400 px-3 py-2 focus-within:shadow-xl focus-within:border-fuchsia-600 focus-within:ring-1 focus-within:ring-fuchsia-600 w-[80%] md:w-[40%] m-auto mt-2">
            <span className=" font-medium text-gray-700 text-xs mt-2">
              {" "}
              Email{" "}
            </span>

            <input
              type="string"
              readOnly
              value={data.length > 0 ? data[0].email : "No existe"}
              className="mt-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm font-bold"
            />
          </label>
        </div>
      ) : (
        <h2 className="flex justify-center text-3xl font-bold mt-8">
          No hay datos
        </h2>
      )}
    </>
  );
};

Result.propTypes = {
  id: PropTypes.string,
};

export default Result;
