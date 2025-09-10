import PreviewChill from "../assets/webchil.png";
import BackendChill from "../assets/backend.png";
import PreviewToDo from "../assets/todolist.png";
import CatShop from "../assets/shop.png";
import PreviewDataScience from "../assets/datascience.png";
import CatMedia from "../assets/a.png";
import CMLABS from "../assets/cmlabs.png";
import NextJs from "../assets/NextJs.png";
import { motion } from "framer-motion";
import * as ScrollArea from "@radix-ui/react-scroll-area";

export default function ProjectGithub() {
  const projects = [
    {
      img: PreviewToDo,
      alt: "ToDo List Preview",
      name: "ToDoList",
      desc: `ToDoList is a simple and responsive task management web application built using HTML, CSS, and JavaScript. The app allows users to add, delete, and mark tasks as completed with a clean and intuitive interface.`,
      links: [
        {
          href: "https://github.com/Rezeon/ToDoList",
          label: "GitHub Repository",
        },
        { href: "https://rezeon.github.io/ToDoList/", label: "Live Website" },
      ],
    },
    {
      img: CMLABS,
      alt: "CMLABS KPI tracker",
      name: "CMLABS KPI tracker",
      desc: `CMLABS KPI Tracker adalah aplikasi berbasis web kita kembangkan untuk membantu perusahaan CMLABS Indonesia Digital dalam melakukan pelacakan dan pengelolaan KPI (Key Performance Indicator) karyawan. Project ini adalah kolaborasi team c untuk tugas magang kita membangun project ini bersama. Aplikasi ini dibuat dengan pendekatan full-stack development menggunakan teknologi modern di frontend dan backend agar sistem lebih interaktif, aman, dan scalable`,
      links: [
        {
          href: "https://github.com/Rezeon/vpbi-kpi-tracker-backend",
          label: "GitHub FrontEnd",
        },
        {
          href: "https://github.com/Rezeon/vpbi-kpi-tracker-frontend",
          label: "GitHub Backend",
        },
        {
          href: "https://vpbi-kpi-tracker-frontend-dusky.vercel.app/",
          label: "Live Website",
        },
      ],
    },
    {
      img: CatMedia,
      alt: "CatMedia Laravel Project",
      name: "CatMedia Laravel Project",
      desc: `CatMedia adalah aplikasi media sosial berbasis Laravel 11, Inertia.js & React. Fitur register, login, upload foto, posting gambar, pertemanan, pesan, dan ganti password. Menggunakan Cloudinary untuk manajemen gambar.`,
      links: [
        {
          href: "https://github.com/Rezeon/CatMedia",
          label: "GitHub Repository",
        },
      ],
    },
    {
      img: CatShop,
      alt: "CatShop Next.js E-commerce",
      name: "CatShop Next.js E-commerce Project",
      desc: `CatShop is a modern e-commerce app with Next.js 15, tRPC, Prisma ORM, Cloudinary, shopping cart, discounts, order history, and Duitku payment gateway. Admin dashboard for product & order management.`,
      links: [
        {
          href: "https://github.com/Rezeon/chill-shop",
          label: "GitHub Repository",
        },
        { href: "https://cat-shop-eta.vercel.app/", label: "Live Website" },
      ],
    },
    {
      img: PreviewChill,
      alt: "WebChill Project",
      name: "WebChill",
      desc: `ReactjsChill is a React-based web app with React Router DOM, Axios, Firebase, React Player, React Modal, and React Toastify. Deployed via GitHub Pages.`,
      links: [
        {
          href: "https://github.com/Rezeon/ReactjsChill",
          label: "GitHub Repository",
        },
        { href: "https://rezeon.github.io/ReactjsChill/", label: "Live Website" },
      ],
    },
    {
      img: NextJs,
      alt: "Project Management App",
      name: "Project Management App",
      desc: `A Next.js fullstack project for managing projects, tasks, and team members. Uses Prisma ORM, PostgreSQL (Neon), JWT auth, Tailwind CSS, ShadCN UI. Deployed on Vercel.`,
      links: [
        {
          href: "https://github.com/Rezeon/-sp_fs_-rheyno_fernando-",
          label: "GitHub Repository",
        },
        {
          href: "https://sp-fs-rheyno-fernando.vercel.app",
          label: "Live Website",
        },
      ],
    },
    {
      img: PreviewChill,
      alt: "Blogposts Laravel",
      name: "Laravel Blogposts",
      desc: `Blogposts is a Laravel + MySQL blogging platform with CRUD, Eloquent ORM, MVC pattern, Bootstrap styling, and user authentication.`,
      links: [
        {
          href: "https://github.com/Rezeon/Blogposts",
          label: "GitHub Repository",
        },
      ],
    },
    {
      img: BackendChill,
      alt: "Backend Project",
      name: "Backend Project",
      desc: `Node.js backend using Express.js, JWT, bcrypt, CORS, Morgan, Multer, Knex.js, MySQL2, Midtrans for payments, file uploads, and ws for real-time.`,
      links: [
        {
          href: "https://github.com/Rezeon/backendProject",
          label: "GitHub Repository",
        },
      ],
    },
    {
      img: PreviewDataScience,
      alt: "Data Science Project",
      name: "Data Science Project",
      desc: `Data-Science-Project with Python, Pandas, NumPy, Matplotlib, Seaborn. Includes EDA, data cleaning, and meaningful visualizations.`,
      links: [
        {
          href: "https://github.com/Rezeon/Data-Science-project",
          label: "GitHub Repository",
        },
      ],
    },
  ];

  return (
    <div className="w-full mx-auto px-4 py-8 text-black font-mono">
      <h2 className="text-3xl font-bold mb-3 text-center">My Projects</h2>
      <ScrollArea.Root className="w-full h-[70vh] overflow-hidden rounded-lg border border-white/20">
        <ScrollArea.Viewport className="w-full h-full p-4">
          <div className="flex flex-col gap-8">
            {projects.map((project, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: idx * 0.1,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-lg rounded-lg shadow h-auto p-4 flex flex-col md:flex-row gap-4"
              >
                <img
                  src={project.img}
                  alt={project.alt}
                  className="w-full md:w-[30%] aspect-video rounded"
                />
                <div className="flex flex-col h-auto justify-between">
                  <h3 className="text-xl font-bold mb-2">{project.name}</h3>
                  <p className="text-sm text-justify mb-4">{project.desc}</p>
                  <div className="flex flex-wrap gap-3">
                    {project.links.map((link, linkIdx) => (
                      <a
                        key={linkIdx}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-black text-white rounded hover:bg-black/80 transition"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </ScrollArea.Viewport>

        {/* Optional scrollbar */}
        <ScrollArea.Scrollbar
          orientation="vertical"
          className="flex select-none touch-none p-0.5 bg-black/30 transition-colors ease-out hover:bg-black/50"
        >
          <ScrollArea.Thumb className="flex-1 bg-white/50 rounded-full" />
        </ScrollArea.Scrollbar>

        {/* Corner (for both scroll directions) */}
        <ScrollArea.Corner className="bg-black/30" />
      </ScrollArea.Root>
    </div>
  );
}
