import { Viewer } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

import '../style/SertivCv.css';



import bootstrap from '../assets/pdf/bootsrap.pdf?url';
import css from '../assets/pdf/css.pdf?url';
import git from '../assets/pdf/git.pdf?url';
import html from '../assets/pdf/Html.pdf?url';
import javascrptansy from '../assets/pdf/java ansy.pdf?url';
import javascrptdom from '../assets/pdf/java dom.pdf?url';
import javascript from '../assets/pdf/javascript.pdf?url';
import laravel from '../assets/pdf/laravel.pdf?url';
import php from '../assets/pdf/php.pdf?url';
import phpsql from '../assets/pdf/php&mysql.pdf?url';
import reactjs from '../assets/pdf/react js.pdf?url';
import vuejs from '../assets/pdf/vue js.pdf?url';

function SertivCv () {
     const defaultLayoutPluginInstance = defaultLayoutPlugin();
    return(
        <div>
            <div className="judul">Sertifikat</div>
            <div className="all">
                <div className='pdfv'>
                    <Viewer fileUrl={bootstrap}  defaultScale={0.7} />
                </div>
                <div className='pdfv'>
                    <Viewer fileUrl={css}  defaultScale={0.7} />
                </div>
                <div className='pdfv'>
                    <Viewer fileUrl={git}  defaultScale={0.7} />
                </div>
                <div className='pdfv'>
                    <Viewer fileUrl={html}  defaultScale={0.7} />
                </div>
                <div className='pdfv'>
                    <Viewer fileUrl={javascrptansy}  defaultScale={0.7} />
                </div>
                <div className='pdfv'>
                    <Viewer fileUrl={javascrptdom}  defaultScale={0.7} />
                </div>
                <div className='pdfv'>
                    <Viewer fileUrl={javascript}  defaultScale={0.7} />
                </div>
                <div className='pdfv'>
                    <Viewer fileUrl={laravel}  defaultScale={0.7} />
                </div>
                <div className='pdfv'>
                    <Viewer fileUrl={php}  defaultScale={0.7} />
                </div>
                <div className='pdfv'>
                    <Viewer fileUrl={phpsql}  defaultScale={0.7} />
                </div>
                <div className='pdfv'>
                    <Viewer fileUrl={reactjs}  defaultScale={0.7} />
                </div>
                <div className='pdfv'>
                    <Viewer fileUrl={vuejs}  defaultScale={0.7} />
                </div>
            </div>
        </div>
    )
}

export default SertivCv;
