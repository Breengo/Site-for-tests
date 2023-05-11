import { IUserData } from "../pages/Home";

interface IResultData {
  id: number;
  testId: number;
  user: IUserData;
  value: number;
}

interface IProps {
  props: IResultData;
}

const ResultBox: React.FC<IProps> = ({ props }) => {
  return (
    <div className="w-full grid grid-cols-2 p-4 border-b border-neutral-800 text-xl text-white text-center">
      <p>{props.user.login}</p>
      <p>{`${props.value}%`}</p>
    </div>
  );
};

export default ResultBox;
