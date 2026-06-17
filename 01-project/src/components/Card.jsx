function Card({ cardTitle, buttonText, imageUrl }) {
  return (
    <div className="bg-gray-950 text-white border-2 border-amber-700 rounded-lg max-w-sm mt-5">
      <img
        className="max-w-sm w-full rounded-lg shadow h-56 "
        src={imageUrl}
        alt="programmer-img"
      />
      <div className="flex flex-col items-center text-center">
        <p className=" text-amber-200 text-shadow-gray-600 mt-3">{cardTitle}</p>
        <p className=" text-cyan-300 text-cyan-800-800">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, sint
          ipsa? Modi nam at aliquid!
        </p>
        <button className="bg-blue-500 text-white rounded-lg px-4 py-2 mt-4 mb-3.5 hover:bg-blue-700 hover:cursor-pointer">
          {buttonText}
        </button>
      </div>
    </div>
  );
}

export default Card;
