import Head from "next/head";
import ListElement from "./ListElement";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

const TreatiseList = ({ list, partInfo }) => {
  return (
    <>
      <Head>
        <title>{partInfo.title} - Summa</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex px-20 p-6">
        <Link href={`/browse/`}>
          <a className="hover:text-sky-500  dark:bg-slate-900/70">
            <div className="flex items-center">
              <div className="text-sm p-1">
                <FontAwesomeIcon icon={faChevronLeft} />
              </div>
              <div className=" text-xl capitalize p-1">List of parts</div>
            </div>
          </a>
        </Link>
      </div>
      <main className="flex w-full flex-1 flex-col justify-start px-20 pb-24">
        <h1 className=" dark:bg-slate-900/70 capitalize subpixel-antialiase text-2xl font-bold text-center mt-4">
          {partInfo.title}
        </h1>
        <h3 className=" dark:bg-slate-900/70 subpixel-antialiased capitalize dark:text-slate-400 text-slate-700 text-2xl font-semibold text-center mt-4">
          List of treatises
        </h3>

        <div className="grid grid-cols-1 divide-y divide-slate-400/50 py-6">
          {list.map((p, i) => (
            <ListElement
              key={i}
              element={p}
              nextRoute={`Pt.${partInfo.id}-Tt.${p.id}`}
            />
          ))}
        </div>
      </main>
    </>
  );
};

export default TreatiseList;
