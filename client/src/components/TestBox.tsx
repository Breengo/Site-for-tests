import { Link } from "react-router-dom";

const array = ["Test 1", "Math", "Teacher", "50%"];

const TestBox = () => {
  return (
    <Link to={`/test_details/${4}`}>
      <ul className="grid grid-cols-4 w-full text-center border-b border-b-neutral-800 py-4 hover:bg-neutral-700 cursor-pointer transition-all">
        {array.map((item, index) => (
          <li key={index} className={"text-white text-xl"}>
            {item}
          </li>
        ))}
      </ul>
    </Link>
  );
};

export default TestBox;
