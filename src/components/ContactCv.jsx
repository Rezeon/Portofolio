import { motion } from "framer-motion";

export default function ContactCv() {
  const handleWhatsApp = () => {
    const phoneNumber = "6286542883416";
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
        <motion.button
          onClick={handleWhatsApp}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="relative px-6 py-3 text-black font-mono font-semibold transition"
        >
          <span className="hover:underline underline-offset-4 decoration-2">
            WhatsApp ^
          </span>
        </motion.button>

        <motion.button
          onClick={handleEmail}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="relative px-6 py-3 text-black font-mono font-semibold transition"
        >
          <span className="hover:underline underline-offset-4 decoration-2">
            Email ^
          </span>
        </motion.button>
      </div>
    </section>
  );
}
