import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ITestData } from "./Home";
import axios from "../axios";
import { useAppSelector } from "../redux/store";

const Test = () => {
  const [answers, setAnswers] = React.useState<number[]>([]);
  const navigate = useNavigate();
  const testId = useParams().id;
  const userId = useAppSelector((state) => state.auth.userData?.id);

  const handleAnswer = (
    e: React.MouseEvent<HTMLButtonElement>,
    questionIndex: number,
    variantIndex: number
  ) => {
    e.preventDefault();
    setAnswers((prev) => {
      prev[questionIndex] = variantIndex;
      return [...prev];
    });
  };

  const [testData, setTestData] = React.useState<ITestData>();

  React.useEffect(() => {
    axios.get(`/test/get/?id=${testId}`).then((res) => {
      setTestData(res.data);
    });
  }, []);

  const handleTestEnd = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (testData?.questions) {
      let count = 0;
      e.preventDefault();
      testData?.questions.map((question, index) => {
        question.rightAnswer === answers[index] ? count++ : 0;

        console.log(question.rightAnswer, answers[index]);
      });

      const result = (count / testData?.questions.length) * 100;

      axios
        .post("/result/create", { testId, userId, value: result })
        .then((res) => console.log(res));
      navigate(`/test_details/${testId}`);
    }
  };

  return (
    <div className="w-full h-screen bg-neutral-900 flex items-center justify-center">
      <form className="border border-neutral-800 h-3/4  rounded-md w-5/12 flex flex-col overflow-y-scroll scrollbar-hide relative">
        <h2 className="text-center text-white text-3xl font-bold mt-4 mb-4">
          {testData?.title}
        </h2>
        {testData?.questions.map((question, questionIndex) => {
          return (
            <div
              key={questionIndex}
              className="flex flex-col gap-2 border-t border-neutral-800 py-4 px-8"
            >
              <h3 className="w-full text-center text-white text-lg font-bold">
                {questionIndex + 1}
              </h3>
              <h4 className="w-full text-center text-white text-xl font-bold mt-2">
                {question.title}
              </h4>
              <p className="w-full text-white text-lg text-center">
                {question.text}
              </p>
              <div className="flex w-full justify-around mt-4">
                {question.variants.map((variant, variantIndex) => {
                  return (
                    <button
                      key={variantIndex}
                      onClick={(e) =>
                        handleAnswer(e, questionIndex, variantIndex + 1)
                      }
                      className={
                        "text-white border border-neutral-800 text-xl py-2 px-4 rounded-md hover:bg-rose-500 cursor-pointer transition-all" +
                        (answers[questionIndex] === variantIndex + 1
                          ? " bg-green-500"
                          : "")
                      }
                    >
                      {variant}
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })}
        <button
          onClick={(e) => handleTestEnd(e)}
          className="border-t w-full border-neutral-800 p-4 text-white hover:bg-green-600 transition-all bg-neutral-900 sticky bottom-0 "
        >
          End test
        </button>
      </form>
    </div>
  );
};

export default Test;
