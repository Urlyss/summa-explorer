import db from "../db.json";

const getPart = (partId) => {
  return { data: db.filter((p) => p.id == partId)[0] };
};

const getTreatises = (partId) => {
  const part = getPart(partId);
  if (part.data) {
    return { data: part.data.treatises };
  } else {
    return { data: null };
  }
};

const getQuestions = (partId, treatiseId) => {
  const treatiseList = getTreatises(partId);
  if (treatiseList.data) {
    let treatise = treatiseList.data.filter((t) => t.id == treatiseId);
    return { data: treatise.length > 0 ? treatise[0].questions : null };
  } else {
    return { data: null };
  }
};

const getArticles = (partId, treatiseId, questionId) => {
  const questionList = getQuestions(partId, treatiseId);
  if (questionList.data) {
    let question = questionList.data.filter((q) => q.id == questionId);
    return { data: question.length > 0 ? question[0].articles : null };
  } else {
    return { data: null };
  }
};

export const parsePart = (partId) => {
  let treatises;
  let partInfo;
  let part = getPart(partId);
  if (part.data) {
    treatises = getTreatises(partId)?.data.map((t) => {
      return {
        title: t.title.length > 0 ? t.title : part.data.title,
        id: t.id,
      };
    });
    partInfo = {
      title: part.data.title,
      id: part.data.id,
    };
    const info = {
      treatises,
      type: "PARTINFO",
      partInfo,
    };
    return { info };
  } else {
    return { error: true };
  }
};

export const parseTreatise = (partId, treatiseId) => {
  let questions;
  let treatiseInfo;
  let part = getPart(partId);
  let treatiseList = getTreatises(partId);
  if (part.data && treatiseList.data) {
    let treatise = treatiseList.data.filter((t) => t.id == treatiseId)[0];
    if (treatise) {
      questions = getQuestions(partId, treatiseId).data.map((t) => {
        return {
          title: t.title,
          id: t.id,
        };
      });
      treatiseInfo = {
        partId: part.data.id,
        title: treatise.title,
        id: treatise.id,
      };
      const info = {
        questions,
        type: "TREATISEINFO",
        treatiseInfo,
      };
      return { info };
    } else {
      return { error: true };
    }
  }
  return { error: true };
};

export const parseQuestion = (partId, treatiseId, questionId) => {
  let questionInfo;
  let articles;
  let part = getPart(partId);
  let treatiseList = getTreatises(partId);
  let questionList = getQuestions(partId, treatiseId);
  if (part.data && treatiseList.data && questionList.data) {
    let treatise = treatiseList.data.filter((p) => p.id == treatiseId)[0];
    let question = questionList.data.filter((p) => p.id == questionId)[0];
    if (treatise && question) {
      articles = question.articles.map((t) => {
        return {
          title: t.title.join("/n"),
          id: t.id,
        };
      });
      questionInfo = {
        partId: part.data.id,
        treatiseId: treatise.id,
        title: question.title,
        id: question.id,
        description: question.description,
      };
      const info = {
        articles,
        type: "ARTICLEINFO",
        questionInfo,
      };
      return { info };
    } else {
      error: true;
    }
  }
  return {
    error: true,
  };
};

export const parseArticle = (partId, treatiseId, questionId, articleId) => {
  let part = getPart(partId);
  let treatiseList = getTreatises(partId);
  let questionList = getQuestions(partId, treatiseId);
  let articleList = getArticles(partId, treatiseId, questionId);
  let questionInfo;
  if (part.data && treatiseList.data && questionList.data && articleList.data) {
    let treatise = treatiseList.data.filter((t) => t.id == treatiseId)[0];
    let question = questionList.data.filter((q) => q.id == questionId)[0];
    let currentArticle = articleList.data.filter((a) => a.id == articleId)[0];
    if (treatise && question && currentArticle) {
      let nextArticle =
        articleList.data.filter((p) => p.id == parseInt(articleId) + 1)[0] ||
        null;
      let previousArticle =
        articleList.data.filter((p) => p.id == parseInt(articleId) - 1)[0] ||
        null;
      questionInfo = {
        partId: part.data.id,
        treatiseId: treatise.id,
        title: question.title,
        id: question.id,
        description: question.description,
      };
      const info = {
        article: { currentArticle, previousArticle, nextArticle },
        type: "READARTICLE",
        questionInfo,
      };
      return { info };
    } else {
      return { error: true };
    }
  }
  return {
    error: true,
  };
};
