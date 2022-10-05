import db from "./../../db.json";
import TreatiseList from "../../components/TreatiseList";
import QuestionList from "../../components/QuestionList";
import ArticleList from "../../components/ArticleList";
import ReadArticle from "../../components/ReadArticle";
import Error from "next/error";
import {
  parsePart,
  parseArticle,
  parseQuestion,
  parseTreatise,
} from "../../utils/parser";

const Browse = ({ info }) => {
  return (
    <div className="bg-gradient-to-br from-indigo-200/20 via-red-200/20 to-yellow-100 dark:via-red-500/20 dark:to-yellow-900/25 dark:bg-slate-700/80 flex min-h-screen flex-col text-slate-800 dark:text-slate-100 pt-16 ">
      {info.type == "PARTINFO" && (
        <TreatiseList list={info.treatises} partInfo={info.partInfo} />
      )}
      {info.type == "TREATISEINFO" && (
        <QuestionList list={info.questions} treatiseInfo={info.treatiseInfo} />
      )}

      {info.type == "ARTICLEINFO" && (
        <ArticleList list={info.articles} questionInfo={info.questionInfo} />
      )}
      {info.type == "READARTICLE" && (
        <ReadArticle article={info.article} questionInfo={info.questionInfo} />
      )}
    </div>
  );
};

export async function getServerSideProps(context) {
  const query = context.params.id;
  const data = query.split("-");
  const requestType = data.length;

  const [partId, treatiseId, questionId, articleId] = data;
  if (requestType == 1) {
    let part = parsePart(partId.split(".")[1]);
    if (!part.error) {
      return { props: { info: part.info } };
    }
    return {
      notFound: true,
    };
  } else if (requestType == 2) {
    let treatise = parseTreatise(
      partId.split(".")[1],
      treatiseId.split(".")[1]
    );
    if (!treatise.error) {
      return { props: { info: treatise.info } };
    }
    return {
      notFound: true,
    };
  } else if (requestType == 3) {
    let question = parseQuestion(
      partId.split(".")[1],
      treatiseId.split(".")[1],
      questionId.split(".")[1]
    );
    if (!question.error) {
      return { props: { info: question.info } };
    }
    return {
      notFound: true,
    };
  } else if (requestType == 4) {
    let article = parseArticle(
      partId.split(".")[1],
      treatiseId.split(".")[1],
      questionId.split(".")[1],
      articleId.split(".")[1]
    );
    if (!article.error) {
      return { props: { info: article.info } };
    }
    return {
      notFound: true,
    };
  } else {
    return {
      notFound: true,
    };
  }
}

export default Browse;
