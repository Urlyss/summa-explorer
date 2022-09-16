import Head from "next/head";
import ListElement from "./ListElement";

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

const ArticleList = ({ list, questionInfo }) => {
  return (
    <>
      <Head>
        <title> {questionInfo.title} - Summa</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex px-20 p-6">
        <Link
          href={`/browse/Pt.${questionInfo.partId}-Tt.${questionInfo.treatiseId}`}
        >
          <a className="hover:text-sky-500 bg-amber-600/10 dark:bg-slate-900/70">
            <div className="flex items-center">
              <div className="text-sm p-1">
                <FontAwesomeIcon icon={faChevronLeft} />
              </div>
              <div className=" text-xl capitalize p-1 ">List of questions</div>
            </div>
          </a>
        </Link>
      </div>

      <main className="flex w-full flex-1 flex-col justify-start px-20 pb-24">
        <h1 className="bg-amber-600/10 dark:bg-slate-900/70 subpixel-antialiase text-2xl font-bold text-center mt-4">
          {questionInfo.title}
        </h1>
        <h3 className="dark:text-slate-400 bg-amber-600/10 dark:bg-slate-900/70 subpixel-antialiased text-slate-700 text-2xl font-semibold text-center mt-4">
          List of articles
        </h3>
        <h3 className="indent-8 px-6 bg-amber-600/10 dark:bg-slate-900/70 subpixel-antialiase leading-relaxed text-2xl font-medium text-justify mt-4">
          {questionInfo.description}
        </h3>

        <div className="grid grid-cols-1 divide-y divide-slate-400/50 py-6">
          {list.map((p, i) => (
            <ListElement
              key={i}
              element={p}
              nextRoute={`Pt.${questionInfo.partId}-Tt.${questionInfo.treatiseId}-QQ.${questionInfo.id}-Art.${p.id}`}
            />
          ))}
        </div>
      </main>
    </>
  );
};

export default ArticleList;
