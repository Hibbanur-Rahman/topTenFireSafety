import React, { useState } from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { DownloadCloud, FileText } from "lucide-react";
import brochurePdf from "../assets/files/broschoure.pdf";

const DownloadDialog = ({ open, setOpen }) => {
  const [numPages, setNumPages] = useState(null);

  // Handle PDF load success
  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-3xl">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold">
            Download Brochure
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          {/* Download Link */}
          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <div className="flex items-center space-x-3">
              <FileText className="w-5 h-5 text-red-500" />
              <span className="text-sm font-medium">Brochure.pdf</span>
            </div>
            <a
              href={brochurePdf}
              download
              className="text-sm text-blue-600 hover:text-blue-800 flex items-center space-x-1"
            >
              <DownloadCloud className="w-4 h-4" />
              <span>Download</span>
            </a>
          </div>

          {/* PDF Preview */}

          <div className="bg-gray-50 p-4 rounded-lg overflow-hidden max-h-[400px]">
            <iframe
              src={brochurePdf}
              className="w-full h-[400px] border rounded-lg"
              title="Brochure Preview"
            ></iframe>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DownloadDialog;
