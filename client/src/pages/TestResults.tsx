import React from "react";
import ResultBox from "../components/ResultBox";
import axios from "../axios";
import { useParams } from "react-router-dom";

const TestResults = () => {
  const testId = useParams().id;

  const [resultList, setResultList] = React.useState([]);

  React.useEffect(() => {
    axios
      .post("/result/get_all", { testId })
      .then((res) => setResultList(res.data));
  }, []);

  return (
    <div className="w-full h-screen bg-neutral-900 flex items-center justify-center">
      <div className="border border-neutral-800 w-3/12 h-1/3 rounded-md flex flex-col overflow-scroll scrollbar-hide relative">
        <div className="w-full grid grid-cols-2 p-4 border-b border-neutral-800 text-xl text-white text-center sticky top-0 left-0 bg-neutral-800">
          <p>Name</p>
          <p>Result</p>
        </div>
        {resultList.map((result, index) => (
          <ResultBox props={result} key={index} />
        ))}
      </div>
    </div>
  );
};

export default TestResults;
