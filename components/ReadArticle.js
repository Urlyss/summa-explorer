import Head from "next/head";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";

const ReadArticle = ({ article, questionInfo }) => {
  const switchTab = (event) => {
    let target = event.target.dataset.tabsTarget;

    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(
        "text-white bg-blue-600 dark:bg-blue-600/50",
        "hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white"
      );
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    event.currentTarget.className = event.currentTarget.className.replace(
      "hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white",
      "text-white bg-blue-600 dark:bg-blue-600/50"
    );
    document.getElementById(target).style.display = "block";
  };

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
          <a className="hover:text-sky-500  dark:bg-slate-900/70">
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
        <main className="flex mb-28 w-full flex-1 flex-col justify-start md:px-80 space-y-4 min-width-full">
          <h1 className=" dark:bg-slate-900/70 subpixel-antialiase text-2xl font-bold text-center mt-4">
            {art.title}
          </h1>

          <div className="mb-4 border-b border-gray-200 dark:border-gray-700">
            <ul
              className="flex flex-wrap -mb-px text-sm font-medium text-center"
              id="myTab"
              data-tabs-toggle="myTabContent"
              role="tablist"
            >
              <li className="mr-2" role="presentation">
                <button
                  onClick={switchTab}
                  className="tablinks font-bold inline-block py-3 px-4 text-white bg-blue-600 dark:bg-blue-600/50 rounded-t-lg"
                  id="objections-tab"
                  data-tabs-target="objections"
                  type="button"
                  role="tab"
                  aria-controls="objections"
                  aria-selected="true"
                >
                  Objections
                </button>
              </li>
              <li className="mr-2" role="presentation">
                <button
                  onClick={switchTab}
                  className=" dark:bg-slate-900/70 font-bold tablinks inline-block py-3 px-4 rounded-t-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white"
                  id="answers-tab"
                  data-tabs-target="answers"
                  type="button"
                  role="tab"
                  aria-controls="answers"
                  aria-selected="false"
                >
                  Answers
                </button>
              </li>
              <li className="mr-2" role="presentation">
                <button
                  onClick={switchTab}
                  className="tablinks  dark:bg-slate-900/70 font-bold inline-block py-3 px-4 rounded-t-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white"
                  id="replies-tab"
                  data-tabs-target="replies"
                  type="button"
                  role="tab"
                  aria-controls="replies"
                  aria-selected="false"
                >
                  Replies
                </button>
              </li>
            </ul>
          </div>
          <div id="myTabContent">
            <div
              className="tabcontent p-4 bg-gray-50 rounded-lg dark:bg-gray-800 subpixel-antialiase leading-relaxed"
              id="objections"
              role="tabpanel"
              aria-labelledby="objections-tab"
            >
              {art.objections &&
                art.objections.map((p, i) => (
                  <p key={i} className="indent-8 first:mt-0 last:mb-0 my-4">
                    {p.text}
                  </p>
                ))}
            </div>
            <div
              className="tabcontent hidden p-4 bg-gray-50 rounded-lg dark:bg-gray-800 subpixel-antialiase leading-relaxed"
              id="answers"
              role="tabpanel"
              aria-labelledby="answers-tab"
            >
              <div className="indent-8 my-4"> {art?.counter} </div>
              <div className="indent-8 my-4"> {art?.body} </div>
            </div>
            <div
              className="tabcontent hidden p-4 bg-gray-50 rounded-lg dark:bg-gray-800 subpixel-antialiase leading-relaxed"
              id="replies"
              role="tabpanel"
              aria-labelledby="replies-tab"
            >
              {art.replies &&
                art.replies.map((p, i) => (
                  <div key={i} className="first:mt-0 last:mb-0 my-4">
                    <p className="truncate indent-8 mb-1">
                      {art.objections[i] && art.objections[i].text}
                    </p>
                    <p className="indent-8">{p.text}</p>
                  </div>
                ))}
            </div>
          </div>
        </main>

        <footer className="fixed bg-gradient-to-r from-indigo-200/20 bottom-0 left-0 right-0 flex h-24 w-full border-slate-900/10 dark:bg-gray-900/20">
          <div className="grid grid-cols-6 w-full">
            <div className="col-end-2 p-6">
              {article.previousArticle && (
                <Link
                  href={`/browse/Pt.${questionInfo.partId}-Tt.${questionInfo.treatiseId}-QQ.${questionInfo.id}-Art.${article.previousArticle.id}`}
                >
                  <a className="text-sky-800 font-bold">
                    <div className="flex items-center py-2">
                      <div className="block text-sm">
                        <FontAwesomeIcon icon={faChevronLeft} />
                      </div>
                      <div className="capitalize text-sm mx-6">
                        {article.previousArticle.title}
                      </div>
                    </div>
                  </a>
                </Link>
              )}
            </div>
            <div className="col-end-7">
              {article.nextArticle && (
                <Link
                  href={`/browse/Pt.${questionInfo.partId}-Tt.${questionInfo.treatiseId}-QQ.${questionInfo.id}-Art.${article.nextArticle.id}`}
                >
                  <a className="text-indigo-900 font-bold">
                    <div className="flex items-center py-2">
                      <div className="capitalize text-sm mx-6">
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
