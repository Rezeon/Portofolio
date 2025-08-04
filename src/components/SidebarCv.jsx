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
    <div className="flex flex-col gap-5 h-full text-black">
      {/* Nama */}
      <div className="flex flex-col gap-2 p-4 font-mono">
        <p className="text-3xl font-medium">Rheyno Fernando</p>
        <p className="text-sm font-medium">Full-Stack Developer</p>
      </div>

      {/* Tombol Navigasi */}
      <div className="flex flex-col gap-3 text-sm font-semibold items-start  p-4">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveComponent(item.id)}
            className={`
              relative group 
              px-1 py-0.5 
              transition-all duration-300 ease-in-out 
              ${activeComponent === item.id
                ? " translate-x-[-4px] translate-y-[-4px]"
                : " hover:translate-x-[-4px] hover:translate-y-[-4px]"
              }
            `}
          >
            <span className="relative z-10">{item.label}</span>
            <span
              className={`
                absolute left-0 -bottom-0.5 h-[2px] bg-black 
                transition-all duration-300 ease-in-out
                ${activeComponent === item.id
                  ? "w-full"
                  : "w-0 group-hover:w-full"
                }
              `}
            ></span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default SidebarCV;
