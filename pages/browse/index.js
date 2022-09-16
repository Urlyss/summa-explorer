import PartList from "../../components/PartList";
import db from "./../../db.json";

const Browse = ({ parts }) => {
  return (
    <div className="bg-gradient-to-br from-indigo-200/20 via-red-200/20 to-yellow-100 flex min-h-screen flex-col text-slate-800 dark:text-slate-400 dark:bg-slate-700/80 pt-20 ">
      <PartList list={parts} />
    </div>
  );
};

export async function getServerSideProps() {
  const parts = db.map((p) => {
    return {
      title: p.title,
      id: p.id,
    };
  });
  return { props: { parts } };
}

export default Browse;
