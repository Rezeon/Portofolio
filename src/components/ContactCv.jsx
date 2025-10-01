import { motion } from "framer-motion";
import ProfileCard from "./ProfileCard";
import MyImage from "../assets/saya.png"
export default function ContactCv() {
  const handleWhatsApp = () => {
    const phoneNumber = "6285642883416";
    const message = encodeURIComponent(
      "Halo Rheyno, saya tertarik dengan portofolio Anda. Boleh saya hubungi?"
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  const handleEmail = () => {
    const email = "Rheynoternando@gmail.com";
    const subject = encodeURIComponent("Kerja Sama atau Pertanyaan Portofolio");
    const body = encodeURIComponent(
      "Halo Rheyno,\n\nSaya tertarik untuk bekerja sama dengan Anda. Bisakah kita mendiskusikan lebih lanjut?\n\nTerima kasih."
    );
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="w-full h-full flex justify-center py-12">
      <div className="flex flex-col gap-6 h-full items-center">
        <ProfileCard
          name="Rheyno fernando"
          title="Full Stack Developer"
          handle="reno.w2"
          status="Online"
          contactText="Contact Me"
          avatarUrl={MyImage}
          showUserInfo={true}
          enableTilt={true}
          enableMobileTilt={false}
          onContactClick={() => handleEmail()}
        />
      </div>
    </section>
  );
}
