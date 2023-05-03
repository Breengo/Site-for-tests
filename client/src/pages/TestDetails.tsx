import { Link, useParams } from "react-router-dom";
import { useAppSelector } from "../redux/store";

const TestDetails = () => {
  const testId = useParams().id;

  const isStaff = useAppSelector((state) => state.auth.userData?.isStaff);

  return (
    <div className="w-full h-screen bg-neutral-900 flex items-center justify-center">
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
          Title
        </h2>
        <div className="p-4 flex flex-col gap-4">
          <p className="text-white text-2xl w-full font-bold">
            Subject: <span className="text-rose-500">Math</span>
          </p>
          <p className="text-white text-2xl w-full font-bold">
            Creator: <span className="text-rose-500">Teacher</span>
          </p>
          <p className="text-white text-2xl w-full font-bold">
            Result: <span className="text-rose-500">100%</span>
          </p>
        </div>
        <Link
          to={`/test/${5}`}
          className="text-white text-2xl py-2 mt-4 hover:bg-rose-500 border-t border-neutral-800 w-full text-center transition-all"
        >
          Start
        </Link>
      </div>
    </div>
  );
};

export default TestDetails;
