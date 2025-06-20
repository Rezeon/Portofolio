import "../style/ProjectGitHub.css";
import PreviewChill from "../assets/webchil.png";
import BackendChill from "../assets/backend.png";
import PreviewToDo from "../assets/todolist.png";
import PreviewDataScience from "../assets/datascience.png";
import CatMedia from "../assets/a.png";

function ProjectGithub() {
  return (
    <div className="project">
      <div className="judul">My-Project</div>
      <div className="githubP">
        <img src={PreviewToDo} alt="ToDo List Preview" />
        <div className="information">
          <div className="namaPro">ToDoList</div>
          <div className="ketPro">
            ToDoList is a simple and responsive task management web application
            built using <strong>HTML</strong>, <strong>CSS</strong>, and{" "}
            <strong>JavaScript</strong>. The app allows users to{" "}
            <strong>add</strong>, <strong>delete</strong>, and{" "}
            <strong>mark tasks as completed</strong> with a clean and intuitive
            interface. It is designed to enhance productivity while
            demonstrating core JavaScript functionality without any external
            frameworks or libraries.
          </div>
          <div className="alt">
            <a href="https://github.com/Rezeon/ToDoList" className="goTo">
              GitHub Repository
            </a>
            <a href="https://rezeon.github.io/ToDoList/" className="web">
              Go-To-Web
            </a>
          </div>
        </div>
      </div>
      <div className="githubP">
        <img src={CatMedia} alt="CatMedia Laravel Project" />
        <div className="information">
          <div className="namaPro">CatMedia Laravel Project</div>
          <div className="ketPro">
            <strong>CatMedia</strong> adalah aplikasi media sosial berbasis web
            yang dibangun menggunakan <strong>Laravel 11</strong> sebagai
            backend dan <strong>Inertia.js</strong> dengan{" "}
            <strong>React.js</strong> untuk frontend. Proyek ini menggunakan{" "}
            <code>Laravel Sanctum</code> untuk otentikasi berbasis token, serta
            integrasi <strong>Cloudinary</strong> untuk manajemen dan
            penyimpanan gambar.
            Struktur proyek dirancang modular dengan fitur{" "}
            <strong>Register</strong>, <strong>Login</strong>,{" "}
            <strong>Upload foto profil</strong>, <strong>Posting gambar</strong>
            fitur pertemanan, Posting , Message dan Ganti password
            Proyek ini cocok sebagai dasar pengembangan aplikasi sosial modern
            dengan arsitektur full-stack Laravel & React melalui{" "}
            <strong>Inertia</strong>, tanpa perlu REST API tradisional.
          </div>
          <div className="alt">
            <a href="https://github.com/Rezeon/CatMedia" className="goTo">
              GitHub Repository
            </a>
          </div>
        </div>
      </div>

      <div className="githubP">
        <img src={PreviewChill} alt="" />
        <div className="information">
          <div className="namaPro">WebChill</div>
          <div className="ketPro">
            ReactjsChill is a React-based interactive web application that I
            built to display media players, notifications, and dynamic content.
            The project uses <strong>React Router DOM</strong> for navigation
            between pages, <strong>Axios</strong> for API connections, and{" "}
            <strong>Firebase</strong> for backend features such as
            authentication and data storage. Styling and media interaction are
            enhanced using <strong>React Player</strong>,{" "}
            <strong>React Modal</strong>, and <strong>React Toastify</strong>.
            The app is deployed to GitHub Pages using <strong>gh-pages</strong>.
          </div>
          <div className="alt">
            <a href="https://github.com/Rezeon/ReactjsChill" className="goTo">
              GitHub Repository
            </a>
            <a href="https://rezeon.github.io/ReactjsChill/" className="web">
              Go-To-Web
            </a>
          </div>
        </div>
      </div>

      <div className="githubP">
        <img src={PreviewChill} alt="Blogposts Project" />
        <div className="information">
          <div className="namaPro">Laravel</div>
          <div className="ketPro">
            Blogposts is a blogging platform built using{" "}
            <strong>Laravel</strong>, a PHP framework, and{" "}
            <strong>MySQL</strong> for database management. This project
            implements <strong>CRUD (Create, Read, Update, Delete)</strong>{" "}
            functionality, allowing users to create, view, update, and delete
            blog posts. The app uses <strong>Laravel's Eloquent ORM</strong> for
            database interactions and follows the{" "}
            <strong>MVC (Model-View-Controller)</strong> architecture. Styling
            is done using <strong>Bootstrap</strong>, ensuring a responsive
            design. The project also includes{" "}
            <strong>user authentication</strong>, and features a clean,
            organized code structure that can be expanded for more advanced
            functionalities.
          </div>

          <div className="alt">
            <a href="https://github.com/Rezeon/Blogposts" className="goTo">
              GitHub Repository
            </a>
          </div>
        </div>
      </div>

      <div className="githubP">
        <img src={BackendChill} alt="Backend Project" />
        <div className="information">
          <div className="namaPro">Backend Project</div>
          <div className="ketPro">
            BackendProject is a Node.js-based backend application using
            Express.js as the core framework. It features a modular folder
            structure, environment variable management with <code>.env</code>,
            and various middleware such as <strong>CORS</strong>,{" "}
            <strong>Morgan</strong>, and <strong>Multer</strong> to enhance API
            security, logging, and file handling. Authentication is implemented
            using <strong>JWT</strong> and <strong>bcrypt</strong>, while
            database interaction is handled with <strong>Knex.js</strong> and{" "}
            <strong>MySQL2</strong>. This project also integrates{" "}
            <strong>Midtrans</strong> for payment gateway functionality and
            supports file uploads and real-time communication using WebSocket (
            <strong>ws</strong>). It is designed to be a solid backend
            foundation for scalable web applications.
          </div>
          <div className="alt">
            <a href="https://github.com/Rezeon/backendProject" className="goTo">
              GitHub Repository
            </a>
          </div>
        </div>
      </div>

      <div className="githubP">
        <img src={PreviewDataScience} alt="Data Science Project Preview" />
        <div className="information">
          <div className="namaPro">Data Science Project</div>
          <div className="ketPro">
            Data-Science-Project is a collection of my data analysis works built
            using <strong>Python</strong> and essential data science libraries
            like <strong>Pandas</strong>, <strong>NumPy</strong>,{" "}
            <strong>Matplotlib</strong>, and <strong>Seaborn</strong>. The
            project includes exploratory data analysis (EDA), data cleaning, and
            visualization tasks aimed at uncovering insights from structured
            datasets. This repository showcases my skills in data wrangling,
            descriptive statistics, and presenting meaningful visual patterns.
          </div>
          <div className="alt">
            <a
              href="https://github.com/Rezeon/Data-Science-project"
              className="goTo"
            >
              Repository Github
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProjectGithub;
