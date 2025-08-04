import { motion } from "framer-motion";

export default function BerandaCv() {
  const links = [
    { href: "https://github.com/Rezeon", label: "GitHub ^" },
    { href: "https://www.instagram.com/reno.w2/", label: "Instagram ^" },
    { href: "https://www.linkedin.com/in/rheyno-fernando-2764062b2/overlay/background-image/", label: "LinkedIn ^" },
  ];

  return (
    <div className="flex flex-col md:flex-row items-center h-full w-full p-4 justify-end">
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full md:w-[60%] lg:w-[60%] h-[90%] font-mono text-black p-4"
      >
        <h1 className="text-4xl font-extrabold mb-4">Haii, I am Rheyno</h1>
        <p className="mb-6 text-justify leading-relaxed">
          Hello! I'm Rheyno Fernando, a Full-Stack Developer & Data Scientist
          with a passion for building dynamic, responsive, and user-friendly web
          applications.
        </p>
        <h2 className="text-2xl font-semibold mb-3">Find Me</h2>

        <div className="flex flex-col space-y-2">
          {links.map((item, idx) => (
            <motion.a
              key={idx}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.05, x: 5 }} // 👉 efek hover: sedikit membesar + geser kanan
              transition={{ type: "spring", stiffness: 300 }}
              className="inline-block underline-offset-2 hover:underline"
            >
              {item.label}
            </motion.a>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
