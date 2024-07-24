import { useEffect, useState } from "react";
import axios from "axios";

export default function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      let { data } = await axios.get("http://localhost:5000/todos/get-todos");
      setTodos(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="flex flex-col items-center mt-10 mb-10 space-y-4">
        <span className="text-4xl">ToDo App</span>
        <div className="px-4 overflow-hidden">
          <div className="bg-black border border-cyan-400 h-[30rem] w-full rounded-md shadow-xl p-5 space-y-4 custom-scrollbar overflow-y-scroll">
            <div className="flex flex-col sm:flex-row justify-between mb-10">
              <button className="bg-blue-600 hover:bg-blue-700 transition p-2 rounded-md mb-2 sm:mb-0">
                Tambah Data
              </button>
              <input
                className="w-full sm:w-52 p-3 sm:p-3 bg-transparent border border-cyan-400 rounded-2xl"
                placeholder="Search..."
              />
            </div>

            {/* div for todo */}

            {todos.length > 0 ? (
              todos.map((value, key) => (
                <div
                  key={key}
                  className="bg-slate-800 text-white hover:bg-slate-900 transition duration-100 h-auto rounded-lg p-5 max-w-lg w-full"
                >
                  <div className="flex justify-between items-center">
                    <h1 className="text-base md:text-1xl font-bold mb-2">
                      {value.title}
                    </h1>
                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-4 md:size-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                        />
                      </svg>
                      <span className="ml-1 uppercase font-bold text-xs md:text-sm">
                        3 hari lagi
                      </span>
                    </div>
                  </div>
                  <hr />
                  <p className="tracking-wider mt-2 mb-3 text-xs md:text-base">
                    {value.description}
                  </p>
                  <div className="flex items-center text-green-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                      />
                    </svg>
                    <span className="font-semibold">Sudah Selesai</span>
                  </div>
                </div>
              ))
            ) : (
              <div className="flex justify-center items-center h-full p-20">
                <h1 className="text-white">Tidak ada data</h1>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
