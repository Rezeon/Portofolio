import { motion } from "framer-motion";
import tigaD from "../assets/box.png";
import dataB from "../assets/database.png";
import webD from "../assets/layout-dashboard.png";
import PixelCard from "./PixelCard";
import ScrambledText from "./ScrambledText";

export default function ExtendCv() {
  const items = [
    {
      img: webD,
      title: "Full Stack Developer",
      desc: `I build dynamic and responsive web applications using React.js, Vue.js, Express.js, and Laravel. I integrate APIs, manage databases with MongoDB & MySQL, and deliver pixel-perfect interfaces with Tailwind CSS and Bootstrap.`,
    },
    {
      img: dataB,
      title: "Data Scientist",
      desc: `I analyze and visualize data using Python, R, and SQL. My skills include Pandas, NumPy, scikit-learn, Matplotlib & Seaborn. I have worked on projects like spam detection, stock prediction, and sentiment analysis.`,
    },
    {
      img: tigaD,
      title: "3D Modeling & Product Design",
      desc: `I design detailed 2D & 3D models using Autodesk, AutoCAD, and SolidWorks. I create technical drawings and product prototypes ready for presentation and manufacturing.`,
    },
  ];

  return (
    <div className="w-full flex flex-col gap-12 px-4 md:px-8 py-12">
      <div className="flex flex-col w-full md:flex-row gap-1">
        {items.map((item, idx) => (
          <PixelCard key={idx} variant="yellow">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="w-full absolute group flex flex-col p-2 items-center text-center "
            >
              <h3 className="text-lg md:text-xl font-bold mb-2 text-white">
                {item.title}
              </h3>
              <p className="text-sm md:text-base leading-relaxed text-white/80">
                {item.desc}
              </p>
            </motion.div>
          </PixelCard>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center px-4"
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
          Why Me?
        </h2>
        <ScrambledText
          className="scrambled-text-demo"
          radius={100}
          duration={1.2}
          speed={0.5}
          scrambleChars={0}
        >
          I am a versatile developer and designer who bridges Full-Stack
          Development, Data Science, and 3D Product Design. I craft responsive,
          user-friendly applications, deliver clear data insights, and visualize
          detailed product concepts. My adaptability, problem-solving skills,
          and passion for learning help me add value to any team. Choosing me
          means working with a dedicated, collaborative professional ready to
          deliver real results.
        </ScrambledText>
      </motion.div>
    </div>
  );
}
