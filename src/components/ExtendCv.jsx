import tigaD from '../assets/box.png'
import dataB from '../assets/database.png'
import webD from '../assets/layout-dashboard.png'
import '../style/ExtendCv.css'
function ExtendCv() {
    return(
        <div className="ext">
            <div className="skill">
                <div className="hayk1">
                    <img src={webD} alt="" />
                    <div className="hayj">Full Stack Developer</div>
                    <div className="hayd">
                        I have expertise in Full-Stack Web Development, specializing in React.js, Vue.js, Express.js, and Laravel. I can build responsive and dynamic websites, integrate front-end and back-end services, and optimize application performance using MongoDB & MySQL.
                        I am also proficient in Tailwind CSS, Bootstrap, and Flexbox to create visually appealing and responsive UI designs.</div>
                </div>
                <div className="hayk2">
                    <img src={dataB} alt="" />
                    <div className="hayj">Data Scientist</div>
                    <div className="hayd">
                        I am proficient in Python, R, and SQL for data analysis, with expertise in Pandas, NumPy, and scikit-learn for data processing, machine learning, and visualization using Matplotlib & Seaborn. 
                        I have worked on various projects, including spam detection, house price analysis, stock market prediction, and sentiment analysis.</div>
                </div>
                <div className="hayk3">
                    <img src={tigaD} alt="" />
                    <div className="hayj">3D Modeling & Product Design</div>
                    <div className="hayd">
                        I have experience in Autodesk, AutoCAD, and SolidWorks for designing and visualizing 3D models. 
                        Skilled in creating detailed technical designs for manufacturing and product presentations.</div>
                </div>
            </div>
            <div className="whyme">
                <div className="mee">Why Me?</div>
                <div className="yee">
                    because I am a versatile and skilled Full-Stack Web Developer with expertise in React.js, Vue.js, Express.js, and Laravel.
                    I can build responsive, high-performance web applications while integrating front-end and back-end services efficiently.
                    My experience with MongoDB & MySQL, Tailwind CSS, Bootstrap, and Flexbox ensures both functionality and great UI/UX design.  
                    I am a problem solver, fast learner, and team player who thrives in collaborative environments.
                    With additional experience in data science and product design, I bring extra value to developing data-driven applications. 
                    Hiring me means adding a dedicated and adaptable developer to your team!
                </div>
            </div>
        </div>
    )
}

export default ExtendCv;