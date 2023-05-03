import axios from "../axios";
import React from "react";
import { useAppSelector } from "../redux/store";
import { useNavigate } from "react-router-dom";

interface ITestData {
  number: number;
  title: string;
  text: string;
  variants: string[];
  rightAnswer: number;
}

const inputStyles =
  "rounded-md py-3 px-8 bg-neutral-700 text-white outline-none focus:outline-rose-500 border-none";

const TestCreation = () => {
  const [questions, setQuestions] = React.useState([1, 2]);
  const [questionsData, setQuestionsData] = React.useState<ITestData[]>([]);

  const navigate = useNavigate();

  const [testTitle, setTestTitle] = React.useState("");
  const [testSubject, setTestSubject] = React.useState("");

  const userId = useAppSelector((state) => state.auth.userData?.id);

  const onAddQuest = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setQuestions((prev) => [...prev, 1]);
  };

  const onTestCreation = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (userId) {
      const testData = {
        questions: questionsData,
        title: testTitle,
        subject: testSubject,
        userId,
      };
      axios.post("/test/create", testData).then((res) => navigate("/"));
    }
  };

  return (
    <div className="w-full h-screen bg-neutral-900 flex items-center justify-center">
      <form className="border border-neutral-800 h-3/4  rounded-md w-5/12 flex flex-col overflow-y-scroll scrollbar-hide">
        <div className="flex flex-col justify-around gap-6 p-4">
          <h2 className="text-white text-3xl text-center font-bold">Test</h2>
          <input
            className={inputStyles}
            value={testTitle}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setTestTitle(e.target.value)
            }
            type="text"
            placeholder="Title"
          />
          <input
            className={inputStyles}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setTestSubject(e.target.value)
            }
            value={testSubject}
            type="text"
            placeholder="Subject"
          />
        </div>
        <div className="flex flex-col">
          {questions.map((item, questionIndex) => {
            if (!questionsData[questionIndex]) {
              setQuestionsData((prev) => {
                prev[questionIndex] = {
                  title: "",
                  text: "",
                  number: questionIndex + 1,
                  rightAnswer: 1,
                  variants: ["", "", "", ""],
                };
                return prev;
              });
            }
            return (
              <div
                key={questionIndex}
                className="flex flex-col w-full border-t border-neutral-800 py-8 px-4 gap-8"
              >
                <h1 className="text-center text-neutral-300 font-bold text-2xl">{`Question ${
                  questionIndex + 1
                }`}</h1>
                <input
                  type="text"
                  className={inputStyles}
                  placeholder="Question title"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setQuestionsData((prev) => {
                      prev[questionIndex].title = e.target.value;
                      return [...prev];
                    });
                  }}
                />
                <input
                  type="text"
                  className={inputStyles}
                  placeholder="Question text"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setQuestionsData((prev) => {
                      prev[questionIndex].text = e.target.value;
                      return [...prev];
                    });
                  }}
                />
                <div className="flex flex-wrap gap-4 items-center justify-center">
                  {[1, 2, 3, 4].map((item, variantIndex) => (
                    <input
                      key={variantIndex}
                      type="text"
                      className={inputStyles}
                      placeholder={`Variant ${variantIndex + 1}`}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        setQuestionsData((prev) => {
                          prev[questionIndex].variants[variantIndex] =
                            e.target.value;
                          return [...prev];
                        });
                      }}
                    />
                  ))}
                </div>
                <input
                  type="text"
                  className={inputStyles}
                  placeholder="Right answer"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setQuestionsData((prev) => {
                      prev[questionIndex].rightAnswer = Number(e.target.value);
                      return [...prev];
                    });
                  }}
                />
              </div>
            );
          })}
        </div>
        <button
          onClick={(e) => onAddQuest(e)}
          className="w-full border-t border-neutral-800 text-white py-4 hover:bg-green-600 hover:scale-105 transition-all"
        >
          Add question
        </button>
        <button
          onClick={(e) => onTestCreation(e)}
          className="w-full border-t border-neutral-800 text-white py-4 hover:bg-blue-600 hover:scale-105 transition-all"
        >
          Create test
        </button>
      </form>
    </div>
  );
};

export default TestCreation;
