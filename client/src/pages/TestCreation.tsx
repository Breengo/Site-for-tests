import React from "react";

const inputStyles =
  "rounded-md py-3 px-8 bg-neutral-700 text-white outline-none focus:outline-rose-500 border-none";

const TestCreation = () => {
  const [questions, setQuestions] = React.useState([1, 2]);

  const onAddQuest = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setQuestions((prev) => [...prev, 1]);
  };

  return (
    <div className="w-full h-screen bg-neutral-900 flex items-center justify-center">
      <form className="border border-neutral-800 h-3/4  rounded-md w-5/12 flex flex-col overflow-y-scroll scrollbar-hide">
        <div className="flex flex-col justify-around gap-6 p-4">
          <h2 className="text-white text-3xl text-center font-bold">Test</h2>
          <input className={inputStyles} type="text" placeholder="Title" />
          <input className={inputStyles} type="text" placeholder="Subject" />
        </div>
        <div className="flex flex-col">
          {questions.map((item, index) => (
            <div className="flex flex-col w-full border-t border-neutral-800 py-8 px-4 gap-8">
              <h1 className="text-center text-neutral-300 font-bold text-2xl">{`Question ${
                index + 1
              }`}</h1>
              <input
                type="text"
                className={inputStyles}
                placeholder="Question title"
              />
              <input
                type="text"
                className={inputStyles}
                placeholder="Question text"
              />
              <div className="flex flex-wrap gap-4 items-center justify-center">
                <input
                  type="text"
                  className={inputStyles}
                  placeholder="Variant 1"
                />
                <input
                  type="text"
                  className={inputStyles}
                  placeholder="Variant 2"
                />
                <input
                  type="text"
                  className={inputStyles}
                  placeholder="Variant 3"
                />
                <input
                  type="text"
                  className={inputStyles}
                  placeholder="Variant 4"
                />
              </div>
              <input
                type="text"
                className={inputStyles}
                placeholder="Right answer"
              />
            </div>
          ))}
        </div>
        <button
          onClick={(e) => onAddQuest(e)}
          className="w-full border-t border-neutral-800 text-white py-4 hover:bg-green-600 hover:scale-105 transition-all"
        >
          Add question
        </button>
        <button
          onClick={(e) => console.log()}
          className="w-full border-t border-neutral-800 text-white py-4 hover:bg-blue-600 hover:scale-105 transition-all"
        >
          Create test
        </button>
      </form>
    </div>
  );
};

export default TestCreation;
