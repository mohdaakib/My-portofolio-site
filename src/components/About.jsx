import React from "react";

const about = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-black  to-gray-800 "
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pt-4 md:pb-8">
          <p className="text-white text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <div className="text-white text-xl mt-20">
          <p>
            I am final year B.Tech student from NSUT(East Campus). I want to grow my carrer as a software developer. So, I started learning web development
            and Data structure algorithm in 2022.I have done udemy's :- The complete web development bootcamp by Angela Y and DSA by prateek narang.
          </p>
          <br />
          <p>
          I have good hand-on experience how to make website resopnsive and know how to make user eperience easy and better.
           I have also done some challenges on frontend menter and you can also check my github profile to see my work.
          </p>
          <br />
          <p>
           I have created few landing pages and a fully responsive e-commerce site "MuzicTown".
          </p>
        </div>
      </div>
    </div>
  );
};

export default about;
