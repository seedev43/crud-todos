export default function App() {
  return (
    <>
      <div className="flex flex-col items-center mt-10 mb-10 space-y-4">
        <span className="text-4xl">ToDo App</span>
        <div className="px-4 overflow-hidden">
          <div className="bg-black border border-cyan-400 h-[30rem] rounded-md shadow-xl p-5 w-full space-y-4 custom-scrollbar overflow-y-scroll">
            {/* div for todo */}
            <div className="bg-slate-800 text-white hover:bg-slate-900 transition duration-100 h-auto rounded-lg p-5 max-w-lg w-full">
              <div className="flex justify-between items-center">
                <h1 className="text-base md:text-1xl font-bold mb-2">Pemrograman Visual</h1>
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4 md:size-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                  <span className="ml-1 uppercase font-bold text-xs md:text-sm">3 hari lagi</span>
                </div>
              </div>
              <hr />
              <p className="tracking-wider mt-2 mb-3 text-xs md:text-base">Tugas UAS membuat website dengan framework JavaScript ReactJS dan framework CSS TailwindCSS</p>
              <div className="flex items-center text-green-500">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                <span className="font-semibold">Sudah Selesai</span>
              </div>
            </div>

            {/* div for todo */}
            <div className="bg-slate-800 text-white hover:bg-slate-900 transition duration-100 h-auto rounded-lg p-5 max-w-lg w-full">
              <div className="flex justify-between items-center">
                <h1 className="text-base md:text-1xl font-bold mb-2">Makan Gratis 7500</h1>
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4 md:size-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                  <span className="ml-1 uppercase font-bold text-xs md:text-sm">Hari ini</span>
                </div>
              </div>
              <hr />
              <p className="tracking-wider mt-2 mb-3 text-xs md:text-base">Makan gratis cuy enak lejat bergiji (kali)</p>
              <div className="flex items-center text-red-500">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>

                <span className="font-semibold">Belum Selesai</span>
              </div>
            </div>

            {/* div for todo */}
            <div className="bg-slate-800 text-white hover:bg-slate-900 transition duration-100 h-auto rounded-lg p-5 max-w-lg w-full">
              <div className="flex justify-between items-center">
                <h1 className="text-base md:text-1xl font-bold mb-2">Mamang Lorem</h1>
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4 md:size-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                  <span className="ml-1 uppercase font-bold text-xs md:text-sm">2 hari lagi</span>
                </div>
              </div>
              <hr />
              <p className="tracking-wider mt-2 mb-3 text-xs md:text-base">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum animi dolorum quaerat quo aperiam illum. Mollitia a nihil quo nostrum.</p>
              <div className="flex items-center text-green-500">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                <span className="font-semibold">Sudah Selesai</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
