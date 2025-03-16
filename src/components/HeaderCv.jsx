import '../style/HeaderCv.css'
import Logo from '../assets/chart-network.png'
function HeaderCv () {
    return (
        <header>
            <div className="logo">
                <img src={Logo} alt="" />
            </div>

            <div className="pilihan">
            <a className="home" href="#home" tabIndex="0">Home</a>
            <a className="home" href="#Sertif" tabIndex="0">Certificate</a>
            <a className="home" href="#skill" tabIndex="0">Skills</a>
            <a className="home" href="#kontak" tabIndex="0">Contact</a>
            
            </div>
        </header>
    )
}

export default HeaderCv;