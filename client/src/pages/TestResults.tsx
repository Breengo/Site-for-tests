import ResultBox from "../components/ResultBox";

const TestResults = () => {
  return (
    <div className="w-full h-screen bg-neutral-900 flex items-center justify-center">
      <div className="border border-neutral-800 w-3/12 h-1/3 rounded-md flex flex-col overflow-scroll scrollbar-hide relative">
        <div className="w-full grid grid-cols-2 p-4 border-b border-neutral-800 text-xl text-white text-center sticky top-0 left-0 bg-neutral-800">
          <p>Name</p>
          <p>Result</p>
        </div>
        <ResultBox />
        <ResultBox />
        <ResultBox />
        <ResultBox />
        <ResultBox />
        <ResultBox />
        <ResultBox />
        <ResultBox />
        <ResultBox />
        <ResultBox />
        <ResultBox />
        <ResultBox />
        <ResultBox />
        <ResultBox />
        <ResultBox />
        <ResultBox />
      </div>
    </div>
  );
};

export default TestResults;
