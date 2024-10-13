import React from "react";
import { ImEye } from "react-icons/im";
import { FaGithubSquare } from "react-icons/fa";
import Coffee from "../../assets/sites/1723717147568.png";
import Honiy from "../../component/page/Component.png";
import UzTravel from "../../assets/sites/1723717083312.png";
import Grove from "../../assets/sites/1723720609759.png";
import Impact from "../../assets/sites/impact.png";

function Portfolio() {
  return (
      <div>
        <div className="w-full h-auto py-6 bg-[#030711] flex flex-col gap-16 sm:h-auto">
          <div className="w-full h-auto flex justify-center items-center flex-col gap-6 sm:text-center">
            <h1 className="text-[30px] text-white">
              Portfolio <span className="text-[#00AAFF]">Gallery</span>
            </h1>
            <p className="text-gray-400 text-[18px]">
              Explore a visual journey through my Portfolio Gallery
            </p>
          </div>

          <div className="cards w-full h-auto flex justify-center items-center gap-6 flex-wrap sm:flex-col">
            <div
                className="w-[30%] h-[350px] rounded-[10px] flex flex-col gap-[15px] p-[10px] hover:bg-gray-800 hover:cursor-pointer sm:w-full"
                data-aos="zoom-in"
                data-aos-delay="100"
            >
              <img
                  src={Coffee}
                  alt=""
                  className="rounded-[10px] w-full border-[1px] border-gray-400"
              />
              <p className="text-[22px] text-white">Coffee Shop</p>
              <span className="flex gap-2">
              <button className="flex flex-col w-auto items-center h-auto  rounded-lg border-gray-900 text-white">
                <a href="https://coffee-ten-steel.vercel.app/" target="_blank">
                  <ImEye size={42} className="text-white" />
                </a>
                <span>Korish</span>
              </button>
              {/*<button className="flex flex-col w-[120px] items-center h-auto border-[2px] rounded-lg border-gray-900 text-white">*/}
              {/*  <a href="https://github.com/Zetfri/coffee.git" target="_blank">*/}
              {/*    <FaGithubSquare size={42} className="text-white" />*/}
              {/*  </a>*/}
              {/*  <span>Source code</span>*/}
              {/*</button>*/}
            </span>
            </div>

            <div
                className="w-[30%] h-[350px] rounded-[10px] flex flex-col gap-[15px] p-[10px] hover:bg-gray-800 hover:cursor-pointer sm:w-full"
                data-aos="zoom-in"
                data-aos-delay="100"
            >
              <img
                  src={Honiy}
                  alt=""
                  className="rounded-[10px] w-full border-[1px] border-gray-400"
              />
              <p className="text-[22px] text-white">Honiy</p>
              <span className="flex gap-2">
              <button className="flex flex-col w-auto items-center h-auto  rounded-lg border-gray-900 text-white">
                <a href="https://coffee-ten-steel.vercel.app/" target="_blank">
                  <ImEye size={42} className="text-white" />
                </a>
                <span>Korish</span>
              </button>
              {/*<button className="flex flex-col w-[120px] items-center h-auto border-[2px] rounded-lg border-gray-900 text-white">*/}
              {/*  <a href="https://github.com/Zetfri/coffee.git" target="_blank">*/}
              {/*    <FaGithubSquare size={42} className="text-white" />*/}
              {/*  </a>*/}
              {/*  <span>Source code</span>*/}
              {/*</button>*/}
            </span>
            </div>

            <div
                className="w-[30%] h-[350px] rounded-[10px] flex flex-col gap-[15px] p-[10px] hover:bg-gray-800 hover:cursor-pointer sm:w-full"
                data-aos="zoom-in"
                data-aos-delay="200"
            >
              <img
                  src={UzTravel}
                  alt=""
                  className="rounded-[10px] w-full border-[1px] border-gray-400"
              />
              <p className="text-[22px] text-white">Uzbekistanreise</p>
              <span className="flex gap-2">
              <button className="flex flex-col w-auto items-center h-auto  rounded-lg border-gray-900 text-white">
                <a href="https://usbekistanreise.uz/" target="_blank">
                  <ImEye size={42} className="text-white" />
                </a>
                <span>Korish</span>
              </button>
              {/*<button className="flex flex-col w-[120px] items-center h-auto border-[2px] rounded-lg border-gray-900 text-white">*/}
              {/*  <a href="https://github.com/Zetfri/tourtravel.git" target="_blank">*/}
              {/*    <FaGithubSquare size={42} className="text-white" />*/}
              {/*  </a>*/}
              {/*  <span>Source code</span>*/}
              {/*</button>*/}
            </span>
            </div>

            <div className="w-[30%] h-[350px] rounded-[10px] flex flex-col gap-[15px] p-[10px] hover:bg-gray-800 hover:cursor-pointer sm:w-full" data-aos="zoom-in" data-aos-delay="300">
              <img
                  src={Impact}
                  alt=""
                  className="rounded-[10px] w-full border-[1px] border-gray-400"
              />
              <p className="text-[22px] text-white">Impactt</p>
              <span className="flex gap-2">
              <button className="flex flex-col w-auto items-center h-auto  rounded-lg border-gray-900 text-white">
                <a href="https://impact-t-six.vercel.app/about" target="_blank">
                  <ImEye size={42} className="text-white" />
                </a>
                <span>Korish</span>
              </button>
              {/*<button className="flex flex-col w-[120px] items-center h-auto border-[2px] rounded-lg border-gray-900 text-white">*/}
              {/*  <a href="https://github.com/shox404/Impact.t.git" target="_blank">*/}
              {/*    <FaGithubSquare size={42} className="text-white" />*/}
              {/*  </a>*/}
              {/*  <span>Source code</span>*/}
              {/*</button>*/}
            </span>
            </div>
            <div className="w-[30%] h-[350px] rounded-[10px] flex flex-col gap-[15px] p-[10px] hover:bg-gray-800 hover:cursor-pointer sm:w-full" data-aos="zoom-in" data-aos-delay="300">
              <img
                  src={Impact}
                  alt=""
                  className="rounded-[10px] w-full border-[1px] border-gray-400"
              />
              <p className="text-[22px] text-white">Impactt</p>
              <span className="flex gap-2">
              <button className="flex flex-col w-auto items-center h-auto  rounded-lg border-gray-900 text-white">
                <a href="https://impact-t-six.vercel.app/about" target="_blank">
                  <ImEye size={42} className="text-white" />
                </a>
                <span>Korish</span>
              </button>
              {/*<button className="flex flex-col w-[120px] items-center h-auto border-[2px] rounded-lg border-gray-900 text-white">*/}
              {/*  <a href="https://github.com/shox404/Impact.t.git" target="_blank">*/}
              {/*    <FaGithubSquare size={42} className="text-white" />*/}
              {/*  </a>*/}
              {/*  <span>Source code</span>*/}
              {/*</button>*/}
            </span>
            </div>
            <div className="w-[30%] h-[350px] rounded-[10px] flex flex-col gap-[15px] p-[10px] hover:bg-gray-800 hover:cursor-pointer sm:w-full" data-aos="zoom-in" data-aos-delay="300">
              <img
                  src={Impact}
                  alt=""
                  className="rounded-[10px] w-full border-[1px] border-gray-400"
              />
              <p className="text-[22px] text-white">Impactt</p>
              <span className="flex gap-2">
              <button className="flex flex-col w-auto items-center h-auto  rounded-lg border-gray-900 text-white">
                <a href="https://impact-t-six.vercel.app/about" target="_blank">
                  <ImEye size={42} className="text-white" />
                </a>
                <span>Korish</span>
              </button>
              {/*<button className="flex flex-col w-[120px] items-center h-auto border-[2px] rounded-lg border-gray-900 text-white">*/}
              {/*  <a href="https://github.com/shox404/Impact.t.git" target="_blank">*/}
              {/*    <FaGithubSquare size={42} className="text-white" />*/}
              {/*  </a>*/}
              {/*  <span>Source code</span>*/}
              {/*</button>*/}
            </span>
            </div>
            <div className="w-[30%] h-[350px] rounded-[10px] flex flex-col gap-[15px] p-[10px] hover:bg-gray-800 hover:cursor-pointer sm:w-full" data-aos="zoom-in" data-aos-delay="300">
              <img
                  src={Impact}
                  alt=""
                  className="rounded-[10px] w-full border-[1px] border-gray-400"
              />
              <p className="text-[22px] text-white">Impactt</p>
              <span className="flex gap-2">
              <button className="flex flex-col w-auto items-center h-auto  rounded-lg border-gray-900 text-white">
                <a href="https://impact-t-six.vercel.app/about" target="_blank">
                  <ImEye size={42} className="text-white" />
                </a>
                <span>Korish</span>
              </button>
              {/*<button className="flex flex-col w-[120px] items-center h-auto border-[2px] rounded-lg border-gray-900 text-white">*/}
              {/*  <a href="https://github.com/shox404/Impact.t.git" target="_blank">*/}
              {/*    <FaGithubSquare size={42} className="text-white" />*/}
              {/*  </a>*/}
              {/*  <span>Source code</span>*/}
              {/*</button>*/}
            </span>
            </div>
            <div className="w-[30%] h-[350px] rounded-[10px] flex flex-col gap-[15px] p-[10px] hover:bg-gray-800 hover:cursor-pointer sm:w-full" data-aos="zoom-in" data-aos-delay="300">
              <img
                  src={Impact}
                  alt=""
                  className="rounded-[10px] w-full border-[1px] border-gray-400"
              />
              <p className="text-[22px] text-white">Impactt</p>
              <span className="flex gap-2">
              <button className="flex flex-col w-auto items-center h-auto  rounded-lg border-gray-900 text-white">
                <a href="https://impact-t-six.vercel.app/about" target="_blank">
                  <ImEye size={42} className="text-white" />
                </a>
                <span>Korish</span>
              </button>
              {/*<button className="flex flex-col w-[120px] items-center h-auto border-[2px] rounded-lg border-gray-900 text-white">*/}
              {/*  <a href="https://github.com/shox404/Impact.t.git" target="_blank">*/}
              {/*    <FaGithubSquare size={42} className="text-white" />*/}
              {/*  </a>*/}
              {/*  <span>Source code</span>*/}
              {/*</button>*/}
            </span>
            </div>
            <div className="w-[30%] h-[350px] rounded-[10px] flex flex-col gap-[15px] p-[10px] hover:bg-gray-800 hover:cursor-pointer sm:w-full" data-aos="zoom-in" data-aos-delay="300">
              <img
                  src={Impact}
                  alt=""
                  className="rounded-[10px] w-full border-[1px] border-gray-400"
              />
              <p className="text-[22px] text-white">Impactt</p>
              <span className="flex gap-2">
              <button className="flex flex-col w-auto items-center h-auto  rounded-lg border-gray-900 text-white">
                <a href="https://impact-t-six.vercel.app/about" target="_blank">
                  <ImEye size={42} className="text-white" />
                </a>
                <span>Korish</span>
              </button>
              {/*<button className="flex flex-col w-[120px] items-center h-auto border-[2px] rounded-lg border-gray-900 text-white">*/}
              {/*  <a href="https://github.com/shox404/Impact.t.git" target="_blank">*/}
              {/*    <FaGithubSquare size={42} className="text-white" />*/}
              {/*  </a>*/}
              {/*  <span>Source code</span>*/}
              {/*</button>*/}
            </span>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Portfolio;
