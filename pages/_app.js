import "../styles/globals.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Router from "next/router";
import { useState, useEffect } from "react";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import Head from "next/head";
config.autoAddCss = false;

function App({ Component, pageProps }) {
  const router = useRouter();
  const [themeChanged, setThemeChanged] = useState("light");

  const toggleTheme = (event) => {
    localStorage.theme == "dark"
      ? (localStorage.theme = "light")
      : (localStorage.theme = "dark");
    setThemeChanged((prevVal) => !prevVal);
  };

  useEffect(() => {
    Router.events.on("routeChangeStart", () => NProgress.start());
    Router.events.on("routeChangeComplete", () => NProgress.done());
    Router.events.on("routeChangeError", () => NProgress.done());

    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    window.onclick = function (event) {
      if (
        !event.target.matches("#dropbtn") &&
        !event.target.parentElement.matches("#dropbtn")
      ) {
        if (
          !document.getElementById("dropdownMenu").classList.contains("hidden")
        ) {
          document.getElementById("dropdownMenu").classList.add("hidden");
        }
      }
    };

    return () => {
      Router.events.on("routeChangeStart", () => NProgress.start());
      Router.events.on("routeChangeComplete", () => NProgress.done());
      Router.events.on("routeChangeError", () => NProgress.done());
    };
  }, [Router.events, themeChanged]);

  const toggleDropdown = (event) => {
    document.getElementById("dropdownMenu").classList.toggle("hidden");
  };

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <meta name="application-name" content="Summa Explorer" />
        <meta
          name="description"
          content="This site allows you to explore the Summa theologica"
        />
        <meta name="keywords" content="Keywords" />

        <link rel="manifest" href="/manifest.json" />
        <link
          href="/favicon-16x16.png"
          rel="icon"
          type="image/png"
          sizes="16x16"
        />
        <link
          href="/favicon-32x32.png"
          rel="icon"
          type="image/png"
          sizes="32x32"
        />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png"></link>
        <meta name="theme-color" content="#317EFB" />
      </Head>
      <nav className="bg-gradient-to-r from-indigo-200/20 md:px-0 px-6 text-slate-800 border-slate-900/10 border-b dark:border-slate-300/10 py-2.5 dark:bg-gray-900">
        <div className="max-w-6xl flex flex-wrap justify-between relative items-center mx-auto">
          <Link href="/">
            <a className="flex items-center space-x-4">
              <Image
                src="/icon.png"
                className="h-6 sm:h-9"
                alt="summa Logo"
                width={50}
                height={50}
              />
              <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                Summa Explorer
              </span>
            </a>
          </Link>

          <button
            onClick={toggleDropdown}
            id={"dropbtn"}
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>

          <div
            className="md:relative absolute inset-x-0 md:top-0 top-16 bg-gradient-to-r from-indigo-200 to-indigo-300 md:px-0 md:from-transparent py-4 justify-between items-center w-full md:flex md:w-auto md:order-1 md:space-y-0 space-y-8 hidden"
            id="dropdownMenu"
          >
            <div className="text-sm leading-6 font-semibold text-slate-700 dark:text-slate-200">
              <ul className="flex flex-col p-4 mt-4 md:space-y-0 space-y-4 md:flex-row md:space-x-8 md:mt-0 md:border-0">
                <li>
                  <Link href={`/`}>
                    <a
                      className={`hover:text-sky-500 ${
                        router.pathname.indexOf("browse") == -1 &&
                        router.pathname.indexOf("about") == -1
                          ? "md:text-sky-500"
                          : ""
                      } dark:hover:text-sky-400`}
                    >
                      Home
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href={`/browse`}>
                    <a
                      className={`hover:text-sky-500 ${
                        router.pathname.indexOf("browse") == 1
                          ? "md:text-sky-500"
                          : ""
                      } dark:hover:text-sky-400`}
                    >
                      Browse
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href={`/about`}>
                    <a
                      className={`hover:text-sky-500 ${
                        router.pathname.indexOf("about") == 1
                          ? "md:text-sky-500"
                          : ""
                      } dark:hover:text-sky-400`}
                    >
                      About
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex items-center space-x-10 md:border-l border-slate-200 ml-6 pl-6 dark:border-slate-800">
              <label className="sr-only" id="headlessui-listbox-label-8">
                Theme
              </label>
              <button
                onClick={toggleTheme}
                type="button"
                id="headlessui-listbox-button-9"
                aria-haspopup="true"
                aria-expanded="false"
                aria-labelledby="headlessui-listbox-label-8 headlessui-listbox-button-9"
              >
                <span className="dark:hidden">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-6 h-6"
                  >
                    <path
                      d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                      className="stroke-slate-400 dark:stroke-slate-500"
                    ></path>
                    <path
                      d="M12 4v1M17.66 6.344l-.828.828M20.005 12.004h-1M17.66 17.664l-.828-.828M12 20.01V19M6.34 17.664l.835-.836M3.995 12.004h1.01M6 6l.835.836"
                      className="stroke-slate-400 dark:stroke-slate-500"
                    ></path>
                  </svg>
                </span>
                <span className="hidden dark:inline">
                  <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M17.715 15.15A6.5 6.5 0 0 1 9 6.035C6.106 6.922 4 9.645 4 12.867c0 3.94 3.153 7.136 7.042 7.136 3.101 0 5.734-2.032 6.673-4.853Z"
                      className="fill-transparent"
                    ></path>
                    <path
                      d="m17.715 15.15.95.316a1 1 0 0 0-1.445-1.185l.495.869ZM9 6.035l.846.534a1 1 0 0 0-1.14-1.49L9 6.035Zm8.221 8.246a5.47 5.47 0 0 1-2.72.718v2a7.47 7.47 0 0 0 3.71-.98l-.99-1.738Zm-2.72.718A5.5 5.5 0 0 1 9 9.5H7a7.5 7.5 0 0 0 7.5 7.5v-2ZM9 9.5c0-1.079.31-2.082.845-2.93L8.153 5.5A7.47 7.47 0 0 0 7 9.5h2Zm-4 3.368C5 10.089 6.815 7.75 9.292 6.99L8.706 5.08C5.397 6.094 3 9.201 3 12.867h2Zm6.042 6.136C7.718 19.003 5 16.268 5 12.867H3c0 4.48 3.588 8.136 8.042 8.136v-2Zm5.725-4.17c-.81 2.433-3.074 4.17-5.725 4.17v2c3.552 0 6.553-2.327 7.622-5.537l-1.897-.632Z"
                      className="fill-slate-400 dark:fill-slate-500"
                    ></path>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M17 3a1 1 0 0 1 1 1 2 2 0 0 0 2 2 1 1 0 1 1 0 2 2 2 0 0 0-2 2 1 1 0 1 1-2 0 2 2 0 0 0-2-2 1 1 0 1 1 0-2 2 2 0 0 0 2-2 1 1 0 0 1 1-1Z"
                      className="fill-slate-400 dark:fill-slate-500"
                    ></path>
                  </svg>
                </span>
              </button>
              <a
                href="https://github.com/Urlyss/summa-explorer"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-6 block text-slate-400 hover:text-slate-500 dark:hover:text-slate-300"
              >
                <span className="sr-only">Tailwind CSS on GitHub</span>
                <svg
                  viewBox="0 0 16 16"
                  className="w-5 h-5"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </nav>
      <Component {...pageProps} />{" "}
    </>
  );
}

export default App;
