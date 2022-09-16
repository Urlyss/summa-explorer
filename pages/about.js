import Head from "next/head";
import Link from "next/link";

const About = () => {
  return (
    <div className="flex min-h-screen flex-col text-slate-800 dark:text-slate-400 dark:bg-slate-900">
      <Head>
        <title>Summa Explorer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="mb-28 mt-20 flex w-full flex-1 flex-col items-center justify-center px-20 space-y-4 text-center">
        <h1 className="subpixel-antialiased text-2xl font-bold">
          Summa Theologica
        </h1>
        <p className="subpixel-antialiased text-lg font-light text-justify indent-8">
          The Summa Theologiae or Summa Theologica (transl. 'Summary of
          Theology'), often referred to simply as the Summa, is the best-known
          work of Thomas Aquinas (1225–1274), a scholastic theologian and Doctor
          of the Church.
        </p>
        <h1 className="subpixel-antialiased text-xl font-bold">Structure</h1>
        <p className="subpixel-antialiased text-lg font-light text-justify indent-8">
          <p className="subpixel-antialiased text-lg font-light indent-8">
            The Summa is structured into: 3 Parts ("Pt."), subdivided into: 614
            Questions (quaestiones; or "QQ"),subdivided into: 3,125 Articles
            ("Art.").
          </p>
          Questions are specific topics of discussion, whereas their
          corresponding Articles are further-specified facets of the parent
          question. For example, Part I, Question 2 ("The Existence of God") is
          divided into three articles: (1) "Whether the existence of God is
          self-evident?"; (2) "Whether it can be demonstrated that God exists?";
          and (3) "Whether God exists?" <br />
          Additionally, questions on a broader theme are grouped into Treatises,
          though the category of treatise is reported differently, depending on
          the source.
        </p>
        <p className="subpixel-antialiased text-lg font-light text-justify">
          <span className="subpixel-antialiased text-lg font-light text-justify">
            The Summa's three parts have a few other major subdivisions.
          </span>
          <ul className="list-outside list-disc">
            <li>
              <span className="font-medium"> First Part</span> (Prima Pars;
              includes 119 QQ, 584 Articles): The existence and nature of God;
              the creation of the world; angels; and the nature of man.
            </li>
            <li>
              <span className="font-medium">Second Part</span> (includes 303 QQ,
              1536 Articles), subdivided into two sub-parts:
              <ul className="list-inside list-disc">
                <li>
                  <span className="font-medium">
                    First part of the Second Part
                  </span>{" "}
                  (Prima Secundae or Part I-II; includes 114 QQ, 619 Articles):
                  General principles of morality (including a theory of law).
                </li>
                <li>
                  <span className="font-medium">
                    Second part of the Second Part{" "}
                  </span>{" "}
                  (Secunda Secundae or Part II-II; includes 189 QQ, 917
                  Articles): Morality in particular, including individual
                  virtues and vices.
                </li>
              </ul>
              <li>
                <span className="font-medium">Third Part </span> (Tertia Pars;
                includes 90 QQ, 549 Articles): The person and work of Christ,
                who is the way of man to God; and the sacraments. Aquinas left
                this part unfinished.
                <ul className="list-inside list-disc">
                  <li>
                    <span className="font-medium">Supplement</span> (99 QQ, 446
                    Articles): The third part proper is attended by a posthumous
                    supplement which concludes the third part and the Summa,
                    treating of Christian eschatology, or "the last things".
                  </li>
                </ul>
              </li>
            </li>
            <li>
              <span className="font-medium">Appendix I</span> (includes 2 QQ, 8
              Articles) and
              <span className="font-medium"> Appendix II</span> (includes 1 Q, 2
              Articles): Two very small appendices which discuss the subject of
              purgatory.
            </li>
          </ul>
        </p>
        <h1 className="subpixel-antialiased text-xl font-bold">
          Article Format
        </h1>
        <p className="subpixel-antialiased text-lg font-light text-justify">
          <p className="subpixel-antialiased text-lg font-light text-justify indent-8">
            The method of exposition undertaken in the articles of the Summa is
            derived from Averroes, to whom Aquinas refers respectfully as "the
            Commentator". The standard format for articles of the Summa are as
            follows:
          </p>
          <ol className="list-outside list-decimal">
            <li>
              A <span className="font-medium"> series of objections </span>{" "}
              (praeterea) to the yet-to-be-stated conclusion are given. This
              conclusion can mostly (but not without exception) be extracted by
              setting the introduction to the first objection into the negative.
            </li>
            <li>
              A short<span className="font-medium"> counter-statement</span> is
              given, beginning with the phrase sed contra ('on the
              contrary...'). This statement almost always references
              authoritative literature, such as the Bible, Aristotle, or the
              Church Fathers.
              <li>
                The <span className="font-medium"> actual argument</span> is
                made, beginning with the phrase respondeo dicendum quod
                conversatio ('I answer that...'). This is generally a
                clarification of the issue.
              </li>
            </li>
            <li>
              <span className="font-medium">Individual replies</span> to the
              preceding objections or the counter-statement are given, if
              necessary. These replies range from one sentence to several
              paragraphs in length.
            </li>
          </ol>
        </p>
        <h1 className="subpixel-antialiased text-xl font-bold">
          About the Summa Explorer
        </h1>
        <p className="subpixel-antialiased text-lg font-light text-justify indent-8">
          The Summa Explorer site is designed to make reading and understanding
          the Summa Theologiae as easy as possible.
        </p>
        <p className="subpixel-antialiased text-lg font-light text-justify indent-8">
          The Summa Explorer is driven by open-source software. It is written
          using NextJs. Please view the code and contribute at its{" "}
          <a
            className="text-blue-600"
            href="https://github.com/Urlyss/summa-explorer"
            target="_blank"
            rel="noopener noreferrer"
          >
            project page
          </a>
        </p>
      </main>

    </div>
  );
};

export default About;
