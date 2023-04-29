import { Link } from "react-router-dom";

const Auth = () => {
  return (
    <div className="bg-neutral-900 w-full h-screen flex items-center justify-center flex-col">
      <form className="flex flex-col py-8 px-16 rounded-md border border-neutral-800 gap-8">
        <h2 className="text-center text-white text-3xl font-bold">
          Authorization
        </h2>
        <input
          className="rounded-md py-2 px-4 bg-neutral-700 text-white outline-none focus:outline-rose-500 border-none"
          placeholder="Login"
          type="text"
        />
        <input
          className="rounded-md py-2 px-4 bg-neutral-700 text-white outline-none focus:outline-rose-500 border-none"
          placeholder="Password"
          type="password"
        />
        <button className="py-2 px-8 text-2xl text-white border border-neutral-800 rounded-md hover:bg-rose-500 transition-all">
          Login
        </button>
        <p className="text-neutral-300">
          Don't have an account?{" "}
          <Link
            className="text-rose-500 hover:bg-neutral-800 p-2 rounded-md"
            to="/registration"
          >
            Create
          </Link>{" "}
        </p>
      </form>
    </div>
  );
};

export default Auth;
