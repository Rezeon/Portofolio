import { motion } from "framer-motion";
import tigaD from "../assets/box.png";
import dataB from "../assets/database.png";
import webD from "../assets/layout-dashboard.png";

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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {items.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            viewport={{ once: true }}
            className="group flex flex-col items-center text-center p-4 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 shadow-md hover:shadow-lg transition duration-300 ease-in-out hover:bg-white/20"
          >
            <h3 className="text-lg md:text-xl font-bold mb-2 text-black">{item.title}</h3>
            <p className="text-sm md:text-base leading-relaxed text-black/80">{item.desc}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center px-4"
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-black">Why Me?</h2>
        <p className="text-sm md:text-base leading-relaxed text-black/80">
          I am a versatile developer and designer who bridges Full-Stack Development,
          Data Science, and 3D Product Design. I craft responsive, user-friendly
          applications, deliver clear data insights, and visualize detailed product
          concepts. My adaptability, problem-solving skills, and passion for learning
          help me add value to any team. Choosing me means working with a dedicated,
          collaborative professional ready to deliver real results.
        </p>
      </motion.div>
    </div>
  );
}
