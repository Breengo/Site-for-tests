import React from "react";
import { Link, useParams } from "react-router-dom";
import { useAppSelector } from "../redux/store";
import axios from "../axios";
import { ITestData } from "./Home";

const TestDetails = () => {
  const testId = useParams().id;
  const userId = useAppSelector((state) => state.auth.userData?.id);

  const [testData, setTestData] = React.useState<ITestData>();
  const [result, setResult] = React.useState("None");

  const isStaff = useAppSelector((state) => state.auth.userData?.isStaff);

  React.useEffect(() => {
    axios.get(`/test/get/?id=${testId}`).then((res) => setTestData(res.data));

    axios
      .post(`/result/get`, { userId, testId })
      .then((res) => setResult(`${res.data.value}%`));
  }, []);

  return (
    <div className="w-full h-screen bg-neutral-900 flex items-center justify-center">
      {testData && (
        <div className="border border-neutral-800 w-3/12 h-fit rounded-md flex flex-col overflow-hidden relative">
          {isStaff && (
            <Link
              to={`/test_results/${testId}`}
              className="absolute top-0 right-0 p-2 text-white hover:bg-rose-500 rounded-bl-md transition-all border-l border-b border-neutral-800"
            >
              View results
            </Link>
          )}
          <h2 className="text-white text-3xl w-full text-center font-bold mt-8">
            {testData?.title}
          </h2>
          <div className="p-4 flex flex-col gap-4">
            <p className="text-white text-2xl w-full font-bold">
              Subject: <span className="text-rose-500">{testData.subject}</span>
            </p>
            <p className="text-white text-2xl w-full font-bold">
              Creator:{" "}
              <span className="text-rose-500">{testData.user?.login}</span>
            </p>
            <p className="text-white text-2xl w-full font-bold">
              Result: <span className="text-rose-500">{result}</span>
            </p>
          </div>
          <Link
            onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
              result === "None" ? "" : e.preventDefault();
            }}
            to={`/test/${testId}`}
            className={
              "text-white text-2xl py-2 mt-4 border-t border-neutral-800 w-full text-center transition-all" +
              (result === "None" ? " hover:bg-rose-500" : "")
            }
          >
            Start
          </Link>
        </div>
      )}
    </div>
  );
};

export default TestDetails;
