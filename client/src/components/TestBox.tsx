import { Link } from "react-router-dom";
import { ITestData } from "../pages/Home";

const array = ["Test 1", "Math", "Teacher", "50%"];

interface IProps {
  props: ITestData;
}

const TestBox: React.FC<IProps> = ({ props }) => {
  return (
    <Link to={`/test_details/${props.id}`}>
      <ul className="grid grid-cols-3 w-full text-center border-b border-b-neutral-800 py-4 hover:bg-neutral-700 cursor-pointer transition-all">
        <li className={"text-white text-xl"}>{props.title}</li>
        <li className={"text-white text-xl"}>{props.subject}</li>
        <li className={"text-white text-xl"}>{props.user.login}</li>
      </ul>
    </Link>
  );
};

export default TestBox;
