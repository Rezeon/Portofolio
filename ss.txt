import BerandaCv from "./components/BerandaCv";
import ContactCv from "./components/ContactCv";
import ExtendCv from "./components/ExtendCv";
import HeaderCv from "./components/HeaderCv";
import MoreCv from "./components/MoreCv";
import SertivCv from "./components/SertivCv";
import SkillCv from "./components/SkillCv";
import ProjectGithub from "./components/ProjectGithub";

function App() {
 
  return (
    <>
    <HeaderCv/>
    <section id="home">
      <BerandaCv />
      <ExtendCv />
    </section>
    <section id="Sertif">
      <SertivCv />
      <ProjectGithub />
    </section>
    <section id="skill">
      <SkillCv />
      <MoreCv />
    </section>
    <section id="kontak">
      <ContactCv/>
    </section>
    </>
  );
}

export default App;