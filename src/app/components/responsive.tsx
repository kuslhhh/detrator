"use client"

export default function ResponsiveLayout() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-6 flex items-center justify-between py-4">
          <h1 className="text-xl font-semibold text-gray-800">Detrator</h1>
          <form className="hidden sm:flex items-center bg-gray-100 rounded-full shadow-sm px-4 py-1">
            <input
              type="text"
              placeholder="Search"
              className="flex-grow focus:outline-none text-gray-600 placeholder-gray-400 px-2 bg-transparent"
            />
            <button type="button" className="p-2 text-gray-500 hover:text-gray-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-4.35-4.35M17.65 17.65a8 8 0 111.41-1.41L21 21z"
                />
              </svg>
            </button>
          </form>
          <div className="flex items-center gap-2">
            <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">
              J
            </div>
            <p className="hidden sm:block text-gray-700">John</p>
          </div>
        </div>
      </header>
      <main className="container mx-auto px-6 py-8 flex-grow">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[1, 2].map((item) => (
            <div
              key={item}
              className="p-6 h-[500px] bg-white rounded-lg shadow-md flex items-center justify-center"
            >
              <h2 className="text-xl font-medium text-gray-700">Content Area {item}</h2>
            </div>
          ))}
        </div>
      </main>

    </div>
  )
}
