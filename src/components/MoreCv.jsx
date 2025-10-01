import { motion } from "framer-motion";
import tigaD from "../assets/box.png";
import dataB from "../assets/database.png";
import webD from "../assets/layout-dashboard.png";
import MagicBento from "./MagicBento";

export default function MoreCv() {
  const sections = [
    {
      icon: webD,
      title: "Web Development",
      desc: `I have experience in Full-Stack Development, specializing in React.js, Vue.js, Laravel, and Express.js. 
      I build responsive, high-performance web applications with clean code, API integration, and solid database management.`,
    },
    {
      icon: dataB,
      title: "Data Science & Machine Learning",
      desc: `I analyze and visualize data using Python, R, and SQL, along with Pandas, NumPy, Matplotlib, and scikit-learn. 
      I create meaningful insights and develop ML models using TensorFlow and related tools.`,
    },
    {
      icon: tigaD,
      title: "3D Modeling & Product Design",
      desc: `I design precise 2D/3D product models with AutoCAD, SolidWorks, and Autodesk, creating technical drawings for prototyping and manufacturing.`,
    },
  ];

  return (
    <div className="w-full flex flex-col gap-10 px-6 py-12">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl font-bold text-center"
      >
        About Me
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto text-center text-white leading-relaxed"
      >
        Hello! I’m Rheyno Fernando Velga Wesi Aji — a versatile Full-Stack
        Developer, Data Scientist, and 3D Modeler, passionate about delivering
        innovative, efficient, and impactful technology solutions.
      </motion.p>

      <div className="flex flex-col gap-8">
        <MagicBento
          textAutoHide={true}
          enableStars={true}
          enableSpotlight={true}
          enableBorderGlow={true}
          enableTilt={true}
          enableMagnetism={true}
          clickEffect={true}
          spotlightRadius={300}
          particleCount={12}
          glowColor="132, 0, 255"
        />
      </div>
    </div>
  );
}
