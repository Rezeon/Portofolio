import '../style/ProjectGitHub.css'
import PreviewChill from '../assets/webchil.png'

function ProjectGithub () {
    return(
        <div className="project">
            <div className="judul">My-Project</div>
            <div className="githubP">
                <img src={PreviewChill} alt="" />
                <div className="information">
                    <div className="namaPro">WebChill</div>
                    <div className="ketPro">ReactjsChill is a React-based interactive web application that I built to display media players, notifications, and dynamic capital. 
                        The project uses the React Router DOM for navigation between pages, Axios for API connections, and Firebase for backend features such as authentication or data storage. 
                        Styling and media interaction are enhanced using React Player, React Modal, and React Toastify. The app is deployed to GitHub Pages using gh-pages.</div>
                <div className="alt">
                <a href="https://github.com/Rezeon/ReactjsChill" className='goTo'>Repository Github</a>
                <a href="https://rezeon.github.io/ReactjsChill/" className='web'>Go-To-Web</a>
                </div>
                </div>
            </div>
        </div>
    )
}
export default ProjectGithub;
