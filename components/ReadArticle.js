import Head from "next/head";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Tab } from "@headlessui/react";

const ReadArticle = ({ article, questionInfo }) => {
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  let art = article.currentArticle;
  return (
    <>
      <Head>
        <title>{art.title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex px-20 p-6">
        <Link
          href={`/browse/Pt.${questionInfo.partId}-Tt.${questionInfo.treatiseId}-QQ.${questionInfo.id}`}
        >
          <a className="text-sky-500 dark:text-sky-300">
            <div className="flex items-center">
              <div className="text-sm p-1">
                <FontAwesomeIcon icon={faChevronLeft} />
              </div>
              <div className=" text-xl capitalize p-1">List of articles</div>
            </div>
          </a>
        </Link>
      </div>

      <div className="relative">
        <main className="flex mb-32 w-full flex-1 flex-col justify-start md:px-80 space-y-4 min-width-full">
          <h1 className=" subpixel-antialiase text-2xl font-bold text-center mt-4">
            {art.title}
          </h1>

          <Tab.Group>
            <Tab.List className="flex space-x-2 rounded-xl bg-blue-900/20 p-3 mx-2">
              {["Objections", "Answer", "Replies"].map((category) => (
                <Tab
                  key={category}
                  className={({ selected }) =>
                    classNames(
                      "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-slate-800 dark:text-slate-100",
                      "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                      selected
                        ? "text-blue-700 dark:text-blue-400 bg-white shadow"
                        : " hover:bg-white/[0.12] hover:text-white"
                    )
                  }
                >
                  {category}
                </Tab>
              ))}
            </Tab.List>
            <Tab.Panels className="mt-2 bg-slate-400/10 px-2 md:px-0">
              <Tab.Panel
                className={classNames(
                  "rounded-xl  p-3 ",
                  "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
                )}
              >
                <ul>
                  {art.objections &&
                    art.objections.map((p, i) => (
                      <li
                        key={i}
                        className="relative rounded-md p-3 hover:bg-gray-100 dark:hover:bg-gray-500"
                      >
                        <h3 className="text-sm font-medium leading-5 indent-8">
                          {p.text}
                        </h3>
                      </li>
                    ))}
                </ul>
              </Tab.Panel>
              <Tab.Panel
                className={classNames(
                  "rounded-xl  p-3",
                  "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
                )}
              >
                <ul>
                  <li className="relative rounded-md p-3 hover:bg-gray-100 dark:hover:bg-gray-500">
                    <h3 className="text-sm font-medium leading-5 indent-8">
                      <div className="indent-8 my-4"> {art?.counter} </div>
                      <div className="indent-8 my-4"> {art?.body} </div>
                    </h3>
                  </li>
                </ul>
              </Tab.Panel>
              <Tab.Panel
                className={classNames(
                  "rounded-xl  p-3",
                  "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
                )}
              >
                <ul>
                  {art.replies &&
                    art.replies.map((p, i) => (
                      <li
                        key={i}
                        className="relative rounded-md p-3 hover:bg-gray-100 dark:hover:bg-gray-500"
                      >
                        <h3 className="text-sm font-medium leading-5 indent-8">
                          <p className="truncate indent-8 mb-1">
                            {art.objections[i] && art.objections[i].text}
                          </p>
                          <p className="indent-8">{p.text}</p>
                        </h3>
                      </li>
                    ))}
                </ul>
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </main>

        <footer className="fixed bottom-0 inset-x-0 w-full bg-indigo-100 border-t dark:border-slate-300/10 dark:bg-gray-900">
          <div className="flex items-center justify-between px-2 md:px-6 py-4">
            <div className="md:w-48 w-1/2">
              {article.previousArticle && (
                <Link
                  href={`/browse/Pt.${questionInfo.partId}-Tt.${questionInfo.treatiseId}-QQ.${questionInfo.id}-Art.${article.previousArticle.id}`}
                >
                  <a className="text-sky-800 font-bold dark:text-sky-300">
                    <div className="flex items-center py-2">
                      <div className="block text-sm">
                        <FontAwesomeIcon icon={faChevronLeft} />
                      </div>
                      <div className="capitalize text-sm mx-6 line-clamp-2 md:w-48 w-1/2">
                        {article.previousArticle.title}
                      </div>
                    </div>
                  </a>
                </Link>
              )}
            </div>
            <div className="md:w-48 w-1/2">
              {article.nextArticle && (
                <Link
                  href={`/browse/Pt.${questionInfo.partId}-Tt.${questionInfo.treatiseId}-QQ.${questionInfo.id}-Art.${article.nextArticle.id}`}
                >
                  <a className="text-indigo-900 font-bold dark:text-indigo-300">
                    <div className="flex items-center py-2">
                      <div className="capitalize text-sm mx-6 line-clamp-2 md:w-48 w-1/2">
                        {article.nextArticle.title}
                      </div>
                      <div className="block text-sm">
                        <FontAwesomeIcon icon={faChevronRight} />
                      </div>
                    </div>
                  </a>
                </Link>
              )}
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default ReadArticle;
