import Head from "next/head";
import ListElement from "./ListElement";

const PartList = ({ list }) => {
  return (
    <>
      <Head>
        <title>Browse - Summa</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col justify-start px-20 pb-24">
        <h1 className="subpixel-antialiased text-2xl font-bold text-center mt-4  dark:bg-slate-900/70">
          List of parts
        </h1>
        <div className="grid grid-cols-1 divide-y divide-slate-400/50 py-6">
          {list.map((p, i) => (
            <ListElement key={i} element={p} nextRoute={`Pt.${p.id}`} />
          ))}
        </div>
      </main>
    </>
  );
};

export default PartList;
