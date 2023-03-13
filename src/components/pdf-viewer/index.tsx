import {useState} from "react";
// import default react-pdf entry
import {Document, Page, pdfjs} from "react-pdf";
// import pdf worker as a url, see `next.config.js` and `pdf-worker.js`
import workerSrc from "@root/pdf-worker";
import useWindowWide from "@lib/hooks/useWidth";

pdfjs.GlobalWorkerOptions.workerSrc = workerSrc;

interface Props {
    fileUrl?: string;
}

const PDFViewer: React.FC<Props> = (props) => {
    const {fileUrl = "/pdfs/test.pdf"} = props;

    const [numPages, setNumPages] = useState(null);

    function onDocumentLoadSuccess({numPages: nextNumPages}: any) {
        setNumPages(nextNumPages);
    }

    const {width} = useWindowWide();
    return (
        <Document file={fileUrl} onLoadSuccess={onDocumentLoadSuccess}>
            {Array.from({length: numPages}, (_, index) => (
                <Page
                    scale={width > 1366 ? 0.8 : 0.4}
                    key={`page_${index + 1}`}
                    pageNumber={index + 1}
                    renderAnnotationLayer={false}
                    renderTextLayer={false}
                />
            ))}
        </Document>
    );
};
export default PDFViewer;
// import { useState } from "react";
// // import default react-pdf entry
// import { Document, Page, pdfjs } from "react-pdf";
// // import pdf worker as a url, see `next.config.js` and `pdf-worker.js`
// import workerSrc from "@root/pdf-worker";

// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

// export default function PDFViewer() {
//   const [file, setFile] = useState("./sample.pdf");
//   const [numPages, setNumPages] = useState(null);

//   function onFileChange(event) {
//     setFile(event.target.files[0]);
//   }

//   function onDocumentLoadSuccess({ numPages: nextNumPages }) {
//     setNumPages(nextNumPages);
//   }

//   return (
//     <div>
//       <div>
//         <label htmlFor='file'>Load from file:</label>{" "}
//         <input onChange={onFileChange} type='file' />
//       </div>
//       <div>
//         <Document file={file} onLoadSuccess={onDocumentLoadSuccess}>
//           {Array.from({ length: numPages }, (_, index) => (
//             <Page
//               key={`page_${index + 1}`}
//               pageNumber={index + 1}
//               renderAnnotationLayer={false}
//               renderTextLayer={false}
//             />
//           ))}
//         </Document>
//       </div>
//     </div>
//   );
// }
