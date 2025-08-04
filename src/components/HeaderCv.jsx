import Logo from "../assets/chart-network.png";

function HeaderCv() {
  return (
    <header className="w-full items-center justify-around border-2 h-[50px] flex">
      <div className="w-[20%]">
        <img src={Logo} alt="" />
      </div>

      <div className="w-[40%] flex justify-around">
        <a  className="inline-block px-3 py-1 hover:underline" href="#home">
          Home
        </a>
        <a  className="inline-block px-3 py-1 hover:underline"  href="#Sertif">
          Certificate
        </a>
        <a  className="inline-block px-3 py-1 hover:underline"  href="#skill">
          Skills
        </a>
        <a  className="inline-block px-3 py-1 hover:underline"  href="#kontak">
          Contact
        </a>
      </div>
    </header>
  );
}

export default HeaderCv;
