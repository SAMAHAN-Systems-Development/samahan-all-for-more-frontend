/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import React, { useState } from 'react';
import { useDropzone, FileRejection } from 'react-dropzone';
import { cn } from '@/lib/utils';
import { UploadIcon, XIcon } from 'lucide-react';
import { Button } from '@/components/shadcn-ui/button';
import Image from 'next/image';

interface FileUploadProps {
  value?: File | null;
  onChange: (file: File | null) => void;
  onError?: (error: string) => void;
}

const FileUpload = ({ value, onChange, onError }: FileUploadProps) => {
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      'image/jpeg': ['.jpeg', '.jpg'],
      'image/png': ['.png'],
      'image/gif': ['.gif'],
    },
    maxSize: 5 * 1024 * 1024, // 5MB
    maxFiles: 1,
    onDrop: (acceptedFiles: File[], rejectedFiles: FileRejection[]) => {
      if (rejectedFiles.length > 0) {
        const error = rejectedFiles[0].errors[0];
        if (error.code === 'file-too-large') {
          onError?.('File is too large. Maximum size is 5MB.');
        } else if (error.code === 'file-invalid-type') {
          onError?.(
            'Invalid file type. Please upload a JPEG, PNG, or GIF image.'
          );
        }
        return;
      }
      if (acceptedFiles.length > 0) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        onChange(acceptedFiles[0]);
      }
    },
  });
  const DEFAULT_WIDTH = 100;
  const DEFAULT_HEIGHT = 100;
  const [imageDimensions, setImageDimensions] = useState<{
    width: number;
    height: number;
  } | null>(null);
  const preview = value ? URL.createObjectURL(value) : null;

  // Create a URL for the uploaded file and get its dimensions
  const handleImageLoad = (img: HTMLImageElement) => {
    setImageDimensions({ width: img.width, height: img.height });
  };
  return (
    <div className="space-y-4">
      <div
        {...getRootProps()}
        className={cn(
          'border-2 border-dashed rounded-lg p-4 text-center cursor-pointer transition-colors',
          isDragActive ? 'border-primary bg-primary/5' : 'border-border',
          'hover:border-primary hover:bg-primary/5'
        )}
      >
        <input {...getInputProps()} />
        <div className="flex flex-col items-center gap-2">
          <UploadIcon className="w-8 h-8 text-muted-foreground" />
          <div className="text-sm text-muted-foreground">
            {isDragActive ? (
              <p>Drop the file here</p>
            ) : (
              <p>Drag & drop an image here, or click to select</p>
            )}
          </div>
        </div>
      </div>

      {value && preview && (
        <div className="relative w-full aspect-video rounded-lg overflow-hidden border">
          <Image
            src={preview}
            alt="Preview"
            className="object-cover w-full h-full"
            width={imageDimensions?.width || DEFAULT_WIDTH}
            height={imageDimensions?.height || DEFAULT_HEIGHT}
            onLoad={handleImageLoad}
          />
          <Button
            variant="destructive"
            size="icon"
            className="absolute top-2 right-2"
            onClick={(e) => {
              e.stopPropagation();
              onChange(null);
            }}
          >
            <XIcon className="w-4 h-4" />
          </Button>
        </div>
      )}
    </div>
  );
};

export default FileUpload;
