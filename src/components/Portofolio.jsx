import React from "react";
import calculatorApp from "../assets/portfolio/calculatorApp.jpg";
import muzicTown from "../assets/portfolio/muzictown.png";
import covid19 from "../assets/portfolio/covid19-tracker.png";
import multistepform from "../assets/portfolio/multistepform.png";
import portfolio from "../assets/portfolio/portofolio.png";
import netflixclone from "../assets/portfolio/netflixclone.png";

const Portfolio = () => {

  const demo = (projectName) => window.location.href=`https://mohdaakib-${projectName}.netlify.app/`
  
  const code = (projectName) => window.location.href=`https://github.com/mohdaakib/${projectName}`
  


  const portfolios = [
   
    {
      id: 1,
      src: portfolio,
      projectName : "my-portofolio-site",
      
    },
    {
      id: 2,
      src: muzicTown,
      projectName : "musictown",
    },
    {
      id: 3,
      src: covid19,
      projectName : "covid19-tracker",
    },
    
    {
      id: 4,
      src: multistepform,
      projectName : "multistepform",
    },
    
    {
      id: 5,
      src: netflixclone,
      projectName : "netflixclone",
    },
    {
      id: 6,
      src: calculatorApp,
      projectName : "calculatorapp",
    }
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b py-8 from-black to-gray-800 w-full text-white h-full"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full ">
        <div className="pb-8 ">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3  gap-8 px-6  sm:px-12 ">
          {portfolios.map(({ id, src, projectName}) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button onClick={() => demo(projectName)} className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Demo
                </button>
                <button onClick={() => code(projectName)} className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
