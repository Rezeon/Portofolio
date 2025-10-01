import { motion } from "framer-motion";
import SpotlightCard from "./SpotlightCard";

export default function SkillCv() {
  const skills = [
    "React",
    "Vue",
    "Laravel",
    "Express.js",
    "Tailwind",
    "PHP",
    "JavaScript",
    "Python",
    "TypeScript",
    "NextJs",
    "MySQL",
    "PostgreSQL",
  ];

  return (
    <div className="w-full flex flex-col items-center p-8">
      <h2 className="text-3xl font-bold mb-20">Skills</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-10 justify-center">
        {skills.map((skill, idx) => (
          <motion.span
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{
              y: -3,
              backgroundColor: "rgba(255, 255, 255, 0.15)",
              borderColor: "rgba(255, 255, 255, 0.3)",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
            }}
            transition={{
              duration: 0.3,
              ease: "easeOut",
            }}
            viewport={{ once: true }}
            className="rounded-2xl"
          >
            <SpotlightCard
              className="custom-spotlight-card rounded-2xl"
              spotlightColor="rgba(0, 229, 255, 0.2)"
            >
              {skill}
            </SpotlightCard>
          </motion.span>
        ))}
      </div>
    </div>
  );
}
