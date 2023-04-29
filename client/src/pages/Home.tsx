import TestBox from "../components/TestBox";
import { Link } from "react-router-dom";
const array = ["Title", "Subject", "Creator", "Result"];

const Home = () => {
  const onLogOut = () => {};

  return (
    <div className="bg-neutral-900 w-full h-screen flex items-center justify-center flex-col">
      <div className="w-5/12 mb-8 flex gap-4">
        <button
          onClick={onLogOut}
          className="text-white text-xl font-bold border border-neutral-800 rounded-md py-2 px-4 hover:bg-rose-600 transition-all"
        >
          Log out
        </button>
        <Link
          to="/create_test"
          className="text-white text-xl font-bold border border-neutral-800 rounded-md py-2 px-4 hover:bg-rose-600 transition-all"
        >
          Create test
        </Link>
      </div>
      <div className="w-5/12 border border-neutral-800 flex flex-col rounded-md overflow-y-scroll scrollbar-hide h-3/6 relative">
        <ul className="grid grid-cols-4 w-full text-center py-3 sticky bg-neutral-800 top-0 left-0">
          {array.map((item, index) => (
            <li className={"text-white text-2xl font-bold"}>{item}</li>
          ))}
        </ul>
        {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
          <TestBox />
        ))}
      </div>
    </div>
  );
};

export default Home;
