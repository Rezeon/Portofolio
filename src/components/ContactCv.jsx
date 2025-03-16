import mail from '../assets/mail.png'
import phone from '../assets/phone.png'
import '../style/ContactCv.css'
function ContactCv() {
    return(
        <section id="contact">
        <div className="contact">
            <button className='contak' onClick={() => window.open("https://wa.me/086542883416", "_blank")}>
                <img src={phone} alt="" className='imgvv' />
                Phone
            </button>

            <button className='contak' onClick={() => window.location.href = "mailto:Rheynoternando@gmail.com"}>
                <img src={mail} alt="" className='imgvv' />
                Email
            </button>
        </div>
        </section>
    )
}
export default ContactCv;