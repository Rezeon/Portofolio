import { useEffect, useState } from "react";
import BerandaCv from "./components/BerandaCv";
import ContactCv from "./components/ContactCv";
import SertivCv from "./components/SertivCv";
import SkillCv from "./components/SkillCv";
import ProjectGithub from "./components/ProjectGithub";
import ExtendCv from "./components/ExtendCv";
import MoreCv from "./components/MoreCv";
import SidebarCV from "./components/SidebarCv";
import * as ScrollArea from "@radix-ui/react-scroll-area";
import { motion, AnimatePresence } from "framer-motion";
import { LoadingItem } from "./components/ui/loading";
import Beams from "./components/Beams";

export default function App() {
  const [activeComponent, setActiveComponent] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  const renderComponent = () => {
    switch (activeComponent) {
      case "home":
        return <BerandaCv />;
      case "certificate":
        return <SertivCv />;
      case "skills":
        return <SkillCv />;
      case "project":
        return <ProjectGithub />;
      case "contact":
        return <ContactCv />;
      case "info":
        return (
          <ScrollArea.Root className="w-full h-full rounded overflow-hidden border border-white/10">
            <ScrollArea.Viewport className="w-full h-full">
              <div className="flex flex-col gap-12 p-6">
                <ExtendCv />
                <MoreCv />
              </div>
            </ScrollArea.Viewport>

            {/* Vertical scrollbar */}
            <ScrollArea.Scrollbar
              orientation="vertical"
              className="flex w-2 select-none touch-none p-0.5 bg-black/30 hover:bg-black/50 transition-colors"
            >
              <ScrollArea.Thumb className="flex-1 bg-white/50 rounded-full" />
            </ScrollArea.Scrollbar>

            {/* Optional corner */}
            <ScrollArea.Corner className="bg-black/30" />
          </ScrollArea.Root>
        );
      default:
        return <BerandaCv />;
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingItem />;
  }

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div
        style={{ width: "100%", height: "100%", position: "absolute" }}
        className="-z-10 bg-gray-300 "
      >
        <Beams
          beamWidth={0.8}
          beamHeight={18}
          beamNumber={12}
          lightColor="#f9f0f0"
          speed={3}
          noiseIntensity={1.75}
          scale={0.2}
          rotation={18}
        />
      </div>

      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="absolute p-3 top-4 left-3 sm:hidden z-20 flex flex-col justify-between w-10 h-10"
      >
        {/* Line 1 */}
        <motion.span
          animate={{
            rotate: isMenuOpen ? 45 : 0,
            y: isMenuOpen ? 8 : 0,
          }}
          className="block w-8 h-0.5 bg-black origin-center transition-all"
        />
        {/* Line 2 */}
        <motion.span
          animate={{
            opacity: isMenuOpen ? 0 : 1,
          }}
          className="block w-8 h-0.5 bg-black origin-center transition-all"
        />
        {/* Line 3 */}
        <motion.span
          animate={{
            rotate: isMenuOpen ? -45 : 0,
            y: isMenuOpen ? -8 : 0,
          }}
          className="block w-8 h-0.5 bg-black origin-center transition-all"
        />
      </button>

      <div className="flex h-11/12 relative m-4 mb-4 border border-gray-400">
        {/* Sidebar: visible on sm+ */}
        <div className="hidden sm:block w-[30%] backdrop-blur-[2px]">
          <SidebarCV
            setActiveComponent={setActiveComponent}
            activeComponent={activeComponent}
          />
        </div>

        {/* Dropdown Sidebar on mobile */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.3 }}
              className="absolute top-0 left-0 w-2/3 h-full z-10 bg-white/30 backdrop-blur p-4 sm:hidden"
            >
              <SidebarCV
                setActiveComponent={(id) => {
                  setActiveComponent(id);
                  setIsMenuOpen(false);
                }}
                activeComponent={activeComponent}
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main Content */}
        <main className="w-full sm:w-[70%] text-white h-full overflow-y-auto">
          {renderComponent()}
        </main>
      </div>
    </div>
  );
}
