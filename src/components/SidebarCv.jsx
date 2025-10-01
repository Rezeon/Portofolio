import FlowingMenu from "./FlowingMenu";
import TextType from "./TextType";

function SidebarCV({ setActiveComponent, activeComponent }) {
  const navItems = [
    { id: "home", label: "Home" },
    { id: "certificate", label: "Certificate" },
    { id: "skills", label: "Skills" },
    { id: "project", label: "Project" },
    { id: "contact", label: "Contact" },
    { id: "info", label: "Information" },
  ];

  return (
    <div className="flex flex-col gap-5 h-full text-white">
      {/* Nama */}
      <div className="flex flex-col gap-2 p-4 font-mono">
        <p className="text-3xl font-medium">Rheyno Fernando</p>
        <TextType
          text={["Full-Stack Developer", "Data Science", "3D Modeling"]}
          typingSpeed={75}
          pauseDuration={1500}
          showCursor={true}
          cursorCharacter="|"
        />
      </div>

      {/* Tombol Navigasi */}
      <div style={{ height: "600px", position: "relative" }}>
        <FlowingMenu setActiveComponent={setActiveComponent} items={navItems} />
      </div>
    </div>
  );
}

export default SidebarCV;
