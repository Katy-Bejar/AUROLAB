'use client';
import { useState } from 'react';
import { Document, Page } from 'react-pdf';
import { pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

export default function PDFViewer() {
  const [numPages, setNumPages] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className="flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
      >
        Ver documento completo
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-2xl max-w-4xl w-full max-h-screen overflow-auto">
            <div className="flex justify-between items-center p-4 border-b">
              <h3 className="text-xl font-bold">Misión y Visión</h3>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>
            <div className="p-4">
              <Document
                file="/mision-vision.pdf"
                onLoadSuccess={onDocumentLoadSuccess}
                className="pdf-container"
              >
                {Array.from(new Array(numPages), (el, index) => (
                  <Page
                    key={`page_${index + 1}`}
                    pageNumber={index + 1}
                    width={800}
                    className="mb-4"
                  />
                ))}
              </Document>
            </div>
          </div>
        </div>
      )}
    </>
  );
}