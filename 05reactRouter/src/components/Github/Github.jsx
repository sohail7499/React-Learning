import React, { useEffect, useState } from "react";
import { data } from "react-router-dom";

function Github() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://api.github.com/users/sohail7499")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);

  return (
    <>
      <div className="text-center m-4 bg-gray-700 text-white p-4 text-3xl">
        Github Followers:0{data.followers}
        <img
          className="rounded-full max-w-sm"
          src="https://github.com/sohail7499.png"
          alt="GitHub Profile"
        />
        <p>Public Repos: {data.public_repos}</p>
      </div>
    </>
  );
}

export default Github;
