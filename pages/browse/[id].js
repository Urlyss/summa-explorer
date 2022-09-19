import db from "./../../db.json";
import TreatiseList from "../../components/TreatiseList";
import QuestionList from "../../components/QuestionList";
import ArticleList from "../../components/ArticleList";
import ReadArticle from "../../components/ReadArticle";
import Error from "next/error";

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
    let part = db.filter((p) => p.id == partId.split(".")[1]);
    let treatises;
    let partInfo;
    if (part[0]) {
      treatises = part[0].treatises.map((t) => {
        return {
          title: t.title.length > 0 ? t.title : part[0].title,
          id: t.id,
        };
      });
      partInfo = {
        title: part[0].title,
        id: part[0].id,
      };
      const info = {
        treatises,
        type: "PARTINFO",
        partInfo,
      };
      return { props: { info } };
    }
    return {
      notFound: true,
    };
  } else if (requestType == 2) {
    let part = db.filter((p) => p.id == partId.split(".")[1]);
    let treatise = part[0].treatises.filter(
      (p) => p.id == treatiseId.split(".")[1]
    );
    let questions;
    let treatiseInfo;
    if (part[0] && treatise[0]) {
      questions = treatise[0].questions.map((t) => {
        return {
          title: t.title,
          id: t.id,
        };
      });
      treatiseInfo = {
        partId: part[0].id,
        title: treatise[0].title,
        id: treatise[0].id,
      };
      const info = {
        questions,
        type: "TREATISEINFO",
        treatiseInfo,
      };
      return { props: { info } };
    }
    return {
      notFound: true,
    };
  } else if (requestType == 3) {
    let part = db.filter((p) => p.id == partId.split(".")[1]);
    let treatise = part[0].treatises.filter(
      (p) => p.id == treatiseId.split(".")[1]
    );
    let question = treatise[0].questions.filter(
      (p) => p.id == questionId.split(".")[1]
    );
    let questionInfo;
    let articles;
    if (part[0] && treatise[0] && question[0]) {
      articles = question[0].articles.map((t) => {
        return {
          title: t.title.join("/n"),
          id: t.id,
        };
      });
      questionInfo = {
        partId: part[0].id,
        treatiseId: treatise[0].id,
        title: question[0].title,
        id: question[0].id,
        description: question[0].description,
      };
      const info = {
        articles,
        type: "ARTICLEINFO",
        questionInfo,
      };
      return { props: { info } };
    }
    return {
      notFound: true,
    };
  } else if (requestType == 4) {
    let part = db.filter((p) => p.id == partId.split(".")[1]);
    let treatise = part[0].treatises.filter(
      (p) => p.id == treatiseId.split(".")[1]
    );
    let question = treatise[0].questions.filter(
      (p) => p.id == questionId.split(".")[1]
    );
    let currentArticle = question[0].articles.filter(
      (p) => p.id == articleId.split(".")[1]
    )[0];
    let nextArticle =
      question[0].articles.filter(
        (p) => p.id == parseInt(articleId.split(".")[1]) + 1
      )[0] || null;
    let previousArticle =
      question[0].articles.filter(
        (p) => p.id == parseInt(articleId.split(".")[1]) - 1
      )[0] || null;
    let questionInfo;
    if (part[0] && treatise[0] && question[0] && currentArticle) {
      questionInfo = {
        partId: part[0].id,
        treatiseId: treatise[0].id,
        title: question[0].title,
        id: question[0].id,
        description: question[0].description,
      };
      const info = {
        article: { currentArticle, previousArticle, nextArticle },
        type: "READARTICLE",
        questionInfo,
      };
      return { props: { info } };
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
