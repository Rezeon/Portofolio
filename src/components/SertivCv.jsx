import { Viewer } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

import * as ScrollArea from "@radix-ui/react-scroll-area";

import bootstrap from "../assets/pdf/bootsrap.pdf?url";
import css from "../assets/pdf/css.pdf?url";
import git from "../assets/pdf/git.pdf?url";
import html from "../assets/pdf/Html.pdf?url";
import javascrptansy from "../assets/pdf/java ansy.pdf?url";
import javascrptdom from "../assets/pdf/java dom.pdf?url";
import javascript from "../assets/pdf/javascript.pdf?url";
import laravel from "../assets/pdf/laravel.pdf?url";
import php from "../assets/pdf/php.pdf?url";
import phpsql from "../assets/pdf/php&mysql.pdf?url";
import reactjs from "../assets/pdf/react js.pdf?url";
import vuejs from "../assets/pdf/vue js.pdf?url";
import harisenin from "../assets/pdf/harisenin.pdf?url";

export default function SertivCv() {
  const pdfs = [
    harisenin,
    bootstrap,
    css,
    git,
    html,
    javascrptansy,
    javascrptdom,
    javascript,
    laravel,
    php,
    phpsql,
    reactjs,
    vuejs,
  ];

  return (
    <section className="flex flex-col w-full p-4">
      <h2 className="text-2xl font-bold text-center mb-6">Certificates</h2>

      <ScrollArea.Root className="w-full h-[70vh] overflow-hidden rounded-lg border border-white/20">
        <ScrollArea.Viewport className="w-full h-full">
          <div className="flex flex-col gap-8 w-full px-2 pb-6">
            {pdfs.map((fileUrl, index) => (
              <div
                key={index}
                className="w-full h-[400px] md:h-[500px] lg:h-[600px] mx-auto backdrop-blur-md rounded-lg overflow-hidden border border-white/10 shadow-lg"
              >
                <Viewer
                  fileUrl={fileUrl}
                  defaultScale={0.75}
                />
              </div>
            ))}
          </div>
        </ScrollArea.Viewport>

        {/* Custom Vertical Scrollbar */}
        <ScrollArea.Scrollbar
          orientation="vertical"
          className="flex w-2 select-none touch-none p-0.5 bg-black/30 transition-colors ease-out hover:bg-black/50"
        >
          <ScrollArea.Thumb className="flex-1 bg-white/50 rounded-full" />
        </ScrollArea.Scrollbar>

        {/* Optional corner for better cross-scroll UX */}
        <ScrollArea.Corner className="bg-black/30" />
      </ScrollArea.Root>
    </section>
  );
}
