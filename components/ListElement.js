import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const ListElement = ({ element, nextRoute }) => {
  return (
    <div className="dark:bg-slate-900/70">
      <Link href={`/browse/${nextRoute}`}>
        <a>
          <div className="flex justify-between items-center rounded-r-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-120 hover:bg-amber-600/10/95 dark:hover:bg-slate-900/95 duration-200">
            <div className="capitalize block text-xl p-6">
              {element.title.toLowerCase()}
            </div>
            <div className="block text-xl p-6">
              <FontAwesomeIcon icon={faChevronRight} />
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default ListElement;
