import React, { useState, useRef } from 'react';
import { Upload, Image as ImageIcon, X } from 'lucide-react';

export default function UploadBox({
  selectedFile,
  imagePreview,
  onFileSelected,
  onRemoveImage
}) {
  const [isDragOver, setIsDragOver] = useState(false);
  const fileInputRef = useRef(null);

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragOver(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragOver(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragOver(false);

    const files = e.dataTransfer?.files;
    if (files && files.length > 0) {
      validateAndPassFile(files[0]);
    }
  };

  const handleFileInputChange = (e) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      validateAndPassFile(files[0]);
    }
  };

  const validateAndPassFile = (file) => {
    const validTypes = ['image/jpeg', 'image/png', 'image/webp'];
    if (!validTypes.includes(file.type)) {
      alert("Supported image formats are JPG, PNG, and WEBP.");
      return;
    }
    onFileSelected(file);
  };

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <label className="text-xs font-bold text-slate-300 uppercase tracking-wider">
          Upload Evidence Image
        </label>
        {selectedFile && (
          <span className="text-xs text-slate-400">
            {(selectedFile.size / 1024).toFixed(1)} KB
          </span>
        )}
      </div>

      <input
        ref={fileInputRef}
        type="file"
        accept="image/jpeg,image/png,image/webp"
        onChange={handleFileInputChange}
        className="hidden"
      />

      {imagePreview ? (
        /* Image Preview Box */
        <div className="relative rounded-xl border border-slate-700 bg-[#0d131f] p-4 overflow-hidden">
          <div className="max-h-80 w-full overflow-hidden rounded-lg bg-black/50 flex items-center justify-center border border-slate-800">
            <img
              src={imagePreview}
              alt="Uploaded Evidence"
              className="max-h-80 w-auto object-contain"
            />
          </div>

          <div className="mt-3 flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs text-slate-300">
              <ImageIcon className="w-4 h-4 text-brand-400 shrink-0" />
              <span className="font-medium truncate max-w-[240px] sm:max-w-md">
                {selectedFile?.name || "Uploaded evidence photo"}
              </span>
            </div>

            <button
              type="button"
              onClick={onRemoveImage}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium text-rose-400 hover:text-rose-300 hover:bg-rose-950/40 border border-rose-900/60 transition-colors cursor-pointer"
            >
              <X className="w-3.5 h-3.5" />
              <span>Remove image</span>
            </button>
          </div>
        </div>
      ) : (
        /* Dropzone Matching Requirement 8 */
        <div
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={() => fileInputRef.current?.click()}
          className={`border-2 border-dashed rounded-xl p-8 sm:p-10 text-center cursor-pointer transition-all duration-200 ${
            isDragOver
              ? 'border-brand-400 bg-brand-500/10'
              : 'border-slate-700/80 hover:border-slate-500 hover:bg-slate-900/40 bg-[#0d131f]/50'
          }`}
        >
          <div className="w-12 h-12 rounded-full bg-slate-800/90 border border-slate-700/80 flex items-center justify-center mx-auto text-brand-400 mb-4">
            <Upload className="w-5 h-5" />
          </div>

          <div className="space-y-2">
            <p className="text-base font-semibold text-white">
              Drop an image here
            </p>
            <p className="text-xs text-slate-500 font-medium">
              or
            </p>
            <div>
              <button
                type="button"
                className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 transition-colors pointer-events-none"
              >
                CHOOSE IMAGE
              </button>
            </div>
          </div>

          <p className="mt-5 text-[11px] text-slate-400 font-medium tracking-wide">
            Supported: <span className="text-slate-300">JPG, PNG, WEBP</span>
          </p>
        </div>
      )}
    </div>
  );
}
