import Head from "next/head";
import Link from "next/link";

const Home = () => {
  return (
    <div className="bg-gradient-to-br from-rose-100 via-red-200/20 to-teal-100 dark:from-rose-300/50 dark:bg-slate-900/100 flex min-h-screen flex-col text-slate-800 dark:text-slate-100  ">
      <Head>
        <title>Summa Explorer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center  justify-center px-20 space-y-4 text-center ">
        <h1 className="subpixel-antialiased text-2xl font-bold  ">
          Summa Theologica
        </h1>
        <p className="subpixel-antialiased text-xl font-light ">
          The Summa Theologica is the magnum opus of Saint Thomas Aquinas, a
          highly structured introduction to theology encompassing 3,125
          articles. This site allows you to explore the Summa.
        </p>
        <p className="subpixel-antialiased text-m font-medium ">
          Click in the link below to start
        </p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="animate-bounce w-12 h-12 p-2 rounded-full flex mt-40 fill-slate-800 dark:fill-slate-50"
          viewBox="0 0 384 512"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"
          />
        </svg>
        <Link href="/browse">
          <a className=" w-60 h-20 relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 group">
            <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-indigo-600 group-hover:h-full"></span>
            <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
              <svg
                className="w-5 h-5 text-green-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </span>
            <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
              <svg
                className="w-5 h-5 text-green-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </span>
            <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
              Browse
            </span>
          </a>
        </Link>
      </main>
    </div>
  );
};

export default Home;
