import { useEffect, useState } from "react";

export function LoadingItem() {
  const name = "Rheyno Fernando";
  const nameSplit = name.split("");
  const [nickname, setNickname] = useState("");
  const [i, setI] = useState(0);
  const [showSkills, setShowSkills] = useState(false);
  const [showBlocks, setShowBlocks] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (i < nameSplit.length) {
      const timer = setTimeout(() => {
        setNickname((prev) => prev + nameSplit[i]);
        setI(i + 1);
      }, 100);
      return () => clearTimeout(timer);
    } else {
      const timer1 = setTimeout(() => setShowBlocks(true), 300);
      const timer2 = setTimeout(() => setShowSkills(true), 1000);
      const timer3 = setTimeout(() => setDone(true), 3000);

      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
        clearTimeout(timer3);
      };
    }
  }, [i]);

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center flex-col overflow-hidden bg-gray-400
        transition-all duration-1000
        ${done ? "opacity-0 fade-out pointer-events-none" : "opacity-100 translate-y-0"}
      `}
    >
      <div className="w-full absolute flex flex-col gap-0.5 -rotate-12">
        {Array.from({ length: 10 }).map((_, idx) => (
          <div
            key={idx}
            className={`transition-all duration-500 transform w-full bg-black h-[70px] ${
              showBlocks
                ? "translate-x-0 opacity-100"
                : idx % 2 === 0
                ? "translate-x-20 opacity-0"
                : "-translate-x-20 opacity-0"
            }`}
          />
        ))}
      </div>

      {/* Text */}
      <p className="text-3xl text-white font-bold relative z-10">{nickname}</p>

      {/* Skills */}
      <div
        className={`gap-2 flex text-white font-semibold transition-all duration-700 transform relative z-10 ${
          showSkills ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
        }`}
      >
        <p>Full Stack</p>
        <p>BackEnd</p>
        <p>Data Science</p>
      </div>
    </div>
  );
}
