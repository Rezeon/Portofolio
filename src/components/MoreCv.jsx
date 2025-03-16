import '../style/MoreCv.css'
import tigaD from '../assets/box.png'
import dataB from '../assets/database.png'
import webD from '../assets/layout-dashboard.png'

function MoreCv() {
    return(
        <div className="sell">
            <div className="about">About Me</div>
            <div className="abtme">
                Hello! I’m Rheyno Fernando Velga Wesi Aji, a passionate Full-Stack Developer,
                Data Scientist, and 3D Modeler dedicated to building innovative and efficient technology solutions.
            </div>
            <div className="webdev">
                <div className="judulabt">-<img src={webD} alt="" className='imgvv' />Web Development</div>
                <div className="infoabtme">
                I have experience in Full-Stack Development, specializing in React.js, Vue.js, Laravel, and Express.js. I develop interactive, responsive, 
                and high-performance web applications by implementing clean code principles and integrating APIs and databases effectively.
                </div>
            </div>
            <div className="webdev">
                <div className="judulabt">-<img src={dataB} alt="" className='imgvv' />Data Science & Machine Learning</div>
                <div className="infoabtme">
                With expertise in Python, R, and SQL, along with libraries like Pandas, NumPy, Matplotlib, and scikit-learn, 
                I analyze and process data to generate meaningful insights. I also have experience working with TensorFlow for building Machine Learning models.
                </div>
            </div>
            <div className="webdev">
                <div className="judulabt">-<img src={tigaD} alt="" className='imgvv' />3D Modeling & Product Design</div>
                <div className="infoabtme">
                As a 3D Modeler, I am proficient in software like AutoCAD, SolidWorks, and Autodesk, 
                designing detailed and functional product models.
                </div>
            </div>
        </div>
    )
}
export default MoreCv;