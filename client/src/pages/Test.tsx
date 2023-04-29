const Test = () => {
  return (
    <div className="w-full h-screen bg-neutral-900 flex items-center justify-center">
      <form className="border border-neutral-800 h-3/4  rounded-md w-5/12 flex flex-col overflow-y-scroll scrollbar-hide">
        <h2 className="text-center text-white text-3xl font-bold mt-4 mb-4">
          Title
        </h2>
        {[1, 2, 3, 4, 5].map((question, index) => {
          return (
            <div className="border-t border-neutral-800 p-4">
              <h3 className="w-full text-center text-white text-2xl font-bold">{`Question ${
                index + 1
              }`}</h3>
              <h4 className="w-full text-center text-white text-xl font-bold mt-2">
                Question title
              </h4>
              <p className="w-full text-white text-lg mt-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quibusdam rem in non suscipit, minima illum corporis distinctio
                reprehenderit tenetur pariatur blanditiis molestias perferendis
                facere quisquam minus veritatis ratione. Culpa iusto officiis
                provident possimus eligendi perferendis? Facere saepe quibusdam
                dicta eligendi.
              </p>
            </div>
          );
        })}
        <button className="border-t border-neutral-800 p-4 text-white hover:bg-green-600">
          End test
        </button>
      </form>
    </div>
  );
};

export default Test;
