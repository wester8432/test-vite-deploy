import { useState } from "react";
import selfPhoto from "../assets/1537538731442.jpg";
import SelfInfo from "../SubPage/info/SelfInfo";
import Experience from "../SubPage/info/Experience";
import ProjectInfo from "../SubPage/info/ProjectInfo";

const Home = () => {
  const [switchInfo, setSwitchInfo] = useState("自傳");
  return (
    <>
      <div className="flex flex-wrap w-full items-start  pt-4">
        <div className=" w-1/3 min-w-[330px]  max-[1024px]:w-full">
          <img src={selfPhoto} />
          <div className="flex justify-center ">
            <ul>
              <li className=" w-full">姓名:陳虹諭</li>
              <li className="w-full">
                技能:React、Redux、Next、Typescript、TailwindCSS、SCSS
              </li>
              <li className="w-full">興趣:遊戲、動畫、財經研究、音樂</li>
            </ul>
          </div>
        </div>
        <div className=" w-2/3  max-lg:w-full max-lg:pt-8">
          <div className=" ">
            <ul className="flex gap-4 justify-center">
              <li
                className={`${
                  switchInfo == "自傳"
                    ? "text-[#1495d6] dark:text-yellow-500 underline"
                    : ""
                } cursor-pointer`}
                onClick={() => {
                  setSwitchInfo("自傳");
                }}
              >
                自傳
              </li>
              <li
                className={`${
                  switchInfo == "經歷"
                    ? "text-[#1495d6] dark:text-yellow-500 underline"
                    : ""
                } cursor-pointer`}
                onClick={() => {
                  setSwitchInfo("經歷");
                }}
              >
                經歷
              </li>
              <li
                className={`${
                  switchInfo == "專案技能說明"
                    ? "text-[#1495d6] dark:text-yellow-500 underline"
                    : ""
                } cursor-pointer`}
                onClick={() => {
                  setSwitchInfo("專案技能說明");
                }}
              >
                專案技能說明
              </li>
            </ul>
          </div>
          <div className="    p-4">
            {switchInfo == "自傳" && <SelfInfo />}
            {switchInfo == "經歷" && <Experience />}
            {switchInfo == "專案技能說明" && <ProjectInfo />}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
