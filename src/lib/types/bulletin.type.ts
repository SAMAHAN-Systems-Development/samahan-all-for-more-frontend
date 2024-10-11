export type Bulletin = {
  author: string;
  content: string;
  id: number;
  pdfAttachments: {
    category: string;
    file_path: string;
    id: number;
  };
  published_at: string;
  title: string;
};
