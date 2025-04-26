import Me from '../assets/me3.png'
import git from '../assets/github.png'
import insta from '../assets/instagram.png'
import linked from '../assets/linkedin.png'
import '../style/BerandaCv.css'
function BerandaCv ( ) {
    return (
        <div className='aab'>
          <div className='selfp'>
            <img src={Me} alt="" />
          </div>
          <div className="hello">
            <div className="con">
                <div className="name">
                    Haii, I am Rheyno
                </div>
                <div className="aboutme">
                    Hello! I'm Rheyno Fernando, a Full-Stack Developer & Data Scientist with a passion for building dynamic, responsive, and user-friendly web applications.
                    I have experience in both frontend and backend development, as well as expertise in data science for analyzing and processing data efficiently.
                </div>
                <div className="app">
                  Find Me
                </div>
                <div className="btn">
                  <a href="https://github.com/Rezeon">
                    <img src={git} className='logosos' alt="" />
                  </a>
                  <a href="https://www.instagram.com/reno.w2/">
                    <img src={insta} className='logosos' alt="" />
                  </a>
                  <a href="https://www.linkedin.com/in/rheyno-fernando-2764062b2/overlay/background-image/">
                    <img src={linked} className='logosos' alt="" />
                  </a>
                </div>
            </div>
          </div>
        </div>
    )
}
export default BerandaCv;