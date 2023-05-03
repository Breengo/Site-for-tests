import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const Test = () => {
  const [answers, setAnswers] = React.useState<number[]>([]);
  const navigate = useNavigate();
  const testId = useParams().id;

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

  const handleTestEnd = () => {
    navigate(`/test_details/${testId}`);
  };

  return (
    <div className="w-full h-screen bg-neutral-900 flex items-center justify-center">
      <form className="border border-neutral-800 h-3/4  rounded-md w-5/12 flex flex-col overflow-y-scroll scrollbar-hide">
        <h2 className="text-center text-white text-3xl font-bold mt-4 mb-4">
          Title
        </h2>
        {[1, 2, 3, 4, 5].map((question, questionIndex) => {
          return (
            <div
              key={questionIndex}
              className="flex flex-col gap-8 border-t border-neutral-800 py-12 px-8"
            >
              <h3 className="w-full text-center text-white text-2xl font-bold">{`Question ${
                questionIndex + 1
              }`}</h3>
              <h4 className="w-full text-center text-white text-xl font-bold mt-2">
                Question title
              </h4>
              <p className="w-full text-white text-lg mt-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quibusdam rem in non suscipit, minima illum corporis distinctio
                reprehenderit tenetur pariatur blanditiis molestias perferendis
                facere quisquam minus veritatis ratione. Culpa iusto officiis
                provident possimus eligendi perferendis? Facere saepe quibusdam
                dicta eligendi.
              </p>
              <div className="flex w-full justify-around">
                {[1, 2, 3, 4].map((variant, variantIndex) => {
                  return (
                    <button
                      key={variantIndex}
                      onClick={(e) =>
                        handleAnswer(e, questionIndex, variantIndex)
                      }
                      className={
                        "text-white border border-neutral-800 text-xl py-2 px-4 rounded-md hover:bg-rose-500 cursor-pointer transition-all" +
                        (answers[questionIndex] === variantIndex
                          ? " bg-green-500"
                          : "")
                      }
                    >
                      Variant
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })}
        <button
          onClick={handleTestEnd}
          className="border-t border-neutral-800 p-4 text-white hover:bg-green-600 transition-all"
        >
          End test
        </button>
      </form>
    </div>
  );
};

export default Test;
