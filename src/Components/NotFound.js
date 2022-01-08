export function NotFound() {
  return (
    <section font-ariel className="text-gray-600 body-font px-16">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            404 error
            <br className="hidden lg:inline-block" />
            Page Not Found.
          </h1>
          <p className="mb-8 leading-relaxed">
            Return to the home page by clicking{" "}
            <a href="#" className="font-bold hover:underline">
              here
            </a>{" "}
            or search for what you need below.
          </p>
          <div className="flex justify-between">
            <form className="inline-flex border-2 border-indigo-500 h-10 w-64 focus:outline-none rounded text-md">
              <input
                type="text"
                className="w-full px-2"
                placeholder=" Search here"
              ></input>
            </form>
            <button className="inline-flex justify-center bg-indigo-500 border-0 h-10 w-14 ml-2 focus:outline-none rounded">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7 mt-1"
                viewBox="0 0 20 20"
                fill="white"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <button className="w-4/12"></button>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded w-full"
            alt="hero"
            src="https://blog.adobe.com/en/publish/2019/06/27/media_203235b65b8dd5d67efd08a091f6aa518cb9d052.jpg?"
          />
        </div>
      </div>
    </section>
  );
}
