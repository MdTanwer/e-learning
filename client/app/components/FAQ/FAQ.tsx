import { styles } from "@/app/styles/style";
import { useGetHeroDataQuery } from "@/redux/features/layout/layoutApi";
import React, { useEffect, useState } from "react";
import { HiMinus, HiPlus } from "react-icons/hi";

type Props = {};

const FAQ = (props: Props) => {
  const { data } = useGetHeroDataQuery("FAQ", {});
  const [activeQuestion, setActiveQuestion] = useState(null);
  const [questions, setQuestions] = useState<any[]>([]);

  useEffect(() => {
    if (data) {
      setQuestions(data.layout?.faq);
    }
  }, [data]);

  const toggleQuestion = (id: any) => {
    setActiveQuestion(activeQuestion === id ? null : id);
  };

  return (
    <div>
      <div className="w-[90%] 800px:w-[80%] m-auto">
        <h1 className={`${styles.title} 800px:text-[40px]`}>
          Frequently Asked Questions
        </h1>
        <div className="mt-12">
          <dl className="space-y-8">
            {questions?.map((q, idx) => (
              <div
                key={q._id}
                className={`transition-colors duration-300 rounded-lg ${
                  activeQuestion === q._id
                    ? "bg-gray-100 dark:bg-gray-800 border-l-4 border-blue-500"
                    : ""
                } ${
                  q._id !== questions[0]?._id && "border-t"
                } border-gray-200 pt-6 group`}
              >
                <dt className="text-lg">
                  <button
                    className="flex items-start justify-between w-full text-left focus:outline-none hover:bg-gray-50 dark:hover:bg-gray-700 p-4 rounded-lg transition-colors duration-200"
                    onClick={() => toggleQuestion(q._id)}
                    aria-expanded={activeQuestion === q._id}
                    aria-controls={`faq-answer-${q._id}`}
                  >
                    <span className="flex items-center gap-2 font-medium text-black dark:text-white">
                      <span className="inline-block w-6 h-6 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 font-bold mr-2">
                        {idx + 1}
                      </span>
                      {q.question}
                    </span>
                    <span className="ml-6 flex-shrink-0">
                      {activeQuestion === q._id ? (
                        <HiMinus className="h-6 w-6 text-black dark:text-white" />
                      ) : (
                        <HiPlus className="h-6 w-6 text-black dark:text-white" />
                      )}
                    </span>
                  </button>
                </dt>
                <div
                  id={`faq-answer-${q._id}`}
                  style={{
                    maxHeight: activeQuestion === q._id ? "500px" : "0px",
                    overflow: "hidden",
                    transition: "max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                  }}
                  aria-hidden={activeQuestion !== q._id}
                >
                  {activeQuestion === q._id && (
                    <dd className="mt-2 pr-12 pl-6 pr-6">
                      <p className="text-base font-Poppins text-gray-700 dark:text-gray-200">
                        {q.answer}
                      </p>
                    </dd>
                  )}
                </div>
              </div>
            ))}
          </dl>
        </div>
        <br />
        <br />
        <br />
      </div>
    </div>
  );
};

export default FAQ;
