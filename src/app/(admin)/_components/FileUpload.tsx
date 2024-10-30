/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import React, { useState } from 'react';
import { useDropzone, FileRejection } from 'react-dropzone';
import { cn } from '@/lib/utils';
import { UploadIcon, XIcon } from 'lucide-react';
import { Button } from '@/components/shadcn-ui/button';
import Image from 'next/image';

interface FileUploadProps {
  value?: File | File[] | null;
  onChange: (file: File | File[] | null) => void;
  onError?: (error: string) => void;
  acceptedTypes?: { [key: string]: string[] };
  multiple?: boolean;
}

const FileUpload = ({
  value,
  onChange,
  onError,
  acceptedTypes = {
    'image/jpeg': ['.jpeg', '.jpg'],
    'image/png': ['.png'],
    'image/gif': ['.gif'],
    'application/pdf': ['.pdf'],
  },
  multiple = false,
}: FileUploadProps) => {
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: acceptedTypes,
    maxSize: 5 * 1024 * 1024, // currently set as 5mb
    maxFiles: multiple ? 10 : 1,
    multiple,
    onDrop: (acceptedFiles: File[], rejectedFiles: FileRejection[]) => {
      if (rejectedFiles.length > 0) {
        const error = rejectedFiles[0].errors[0];
        if (error.code === 'file-too-large') {
          onError?.('File is too large. Maximum size is 5MB.');
        } else if (error.code === 'file-invalid-type') {
          onError?.('Invalid file type. Please upload an accepted file type.');
        }
        return;
      }
      if (acceptedFiles.length > 0) {
        onChange(multiple ? acceptedFiles : acceptedFiles[0]);
      }
    },
  });

  const [imageDimensions, setImageDimensions] = useState<{
    [key: string]: { width: number; height: number };
  }>({});
  const previews = multiple
    ? (value as File[]).map((file) => URL.createObjectURL(file))
    : value
      ? [URL.createObjectURL(value as File)]
      : [];

  const handleImageLoad = (
    event: React.SyntheticEvent<HTMLImageElement>,
    fileName: string
  ) => {
    const img = event.currentTarget;
    setImageDimensions((prev) => ({
      ...prev,
      [fileName]: { width: img.width, height: img.height },
    }));
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
              <p>Drop the files here</p>
            ) : (
              <p>
                {multiple
                  ? 'Drag & drop images here, or click to select multiple'
                  : 'Drag & drop an image here, or click to select'}
              </p>
            )}
          </div>
        </div>
      </div>

      {previews.length > 0 && (
        <div className="space-y-2">
          {previews.map((preview, index) => (
            <div
              key={index}
              className="relative w-full aspect-video rounded-lg overflow-hidden border"
            >
              <Image
                src={preview}
                alt="Preview"
                className="object-cover w-full h-full"
                width={imageDimensions[preview]?.width || 100}
                height={imageDimensions[preview]?.height || 100}
                onLoad={(event) => handleImageLoad(event, preview)}
              />
              <Button
                variant="destructive"
                size="icon"
                className="absolute top-2 right-2"
                onClick={(e) => {
                  e.stopPropagation();
                  if (multiple) {
                    onChange((value as File[]).filter((_, i) => i !== index));
                  } else {
                    onChange(null);
                  }
                }}
              >
                <XIcon className="w-4 h-4" />
              </Button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FileUpload;
