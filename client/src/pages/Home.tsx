import React from "react";
import TestBox from "../components/TestBox";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../redux/store";
import { logout } from "../redux/slices/authSlice";
import axios from "../axios";

const array = ["Title", "Subject", "Creator", "Result"];

interface IQuestionData {
  title: string;
  text: string;
  number: number;
  rightAnswer: number;
  variants: string[];
}

export interface ITestData {
  id: number;
  title: string;
  subject: string;
  questions: IQuestionData[];
}

const Home = () => {
  const dispatch = useAppDispatch();

  const [testList, setTestList] = React.useState<ITestData[]>([]);

  const onLogOut = () => {
    dispatch(logout());
    window.localStorage.removeItem("token");
  };

  const userName = useAppSelector((state) => state.auth.userData?.login);

  React.useEffect(() => {
    axios.get("/test/get_all").then((res) => setTestList(res.data));
  }, []);

  const isStaff = useAppSelector((state) => state.auth.userData?.isStaff);

  return (
    <div className="bg-neutral-900 w-full h-screen flex items-center justify-center flex-col">
      <div className="w-5/12 mb-4 flex items-center gap-4">
        <p className="text-white text-xl flex items-center justify-center font-bold w-full bg-neutral-800 rounded-md py-2 px-4">
          {userName}
        </p>
        <button
          onClick={onLogOut}
          className="text-white text-xl font-bold border border-neutral-800 rounded-md py-2 px-4 hover:bg-rose-600 transition-all whitespace-nowrap"
        >
          Log out
        </button>
        {isStaff && (
          <Link
            to="/create_test"
            className="text-white text-xl font-bold border border-neutral-800 rounded-md py-2 px-4 hover:bg-rose-600 transition-all whitespace-nowrap"
          >
            Create test
          </Link>
        )}
      </div>
      <div className="w-5/12 border border-neutral-800 flex flex-col rounded-md overflow-y-scroll scrollbar-hide h-3/6 relative">
        <ul className="grid grid-cols-4 w-full text-center py-3 sticky bg-neutral-800 top-0 left-0">
          {array.map((item, index) => (
            <li key={index} className={"text-white text-2xl font-bold"}>
              {item}
            </li>
          ))}
        </ul>
        {testList.map((item) => (
          <TestBox key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default Home;
