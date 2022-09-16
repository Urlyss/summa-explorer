import Link from "next/link";
import Head from "next/head";

export default function Custom404() {
  return (
    <>
      <Head>
        <title>Summa Explorer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="items-center h-full p-16 dark:bg-gray-900 bg-gradient-to-br from-indigo-200/20 via-red-200/20 to-yellow-100 flex min-h-screen flex-col text-slate-800 dark:text-slate-400 dark:bg-slate-700/80">
        <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
          <div className="max-w-md text-center">
            <h2 className="mb-8 font-extrabold text-9xl dark:text-gray-600">
              <span className="sr-only">Error</span>404
            </h2>
            <p className="text-2xl font-semibold md:text-3xl">
              Sorry, we couldn't find this page.
            </p>
            <p className="mt-4 mb-8 dark:text-gray-400">
              But dont worry, you can find plenty of other things on our
              homepage.
            </p>
            <Link href="/">
              <a
                rel="noopener noreferrer"
                className="px-8 py-3 font-semibold rounded dark:bg-violet-400 dark:text-gray-900"
              >
                Back to homepage
              </a>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
