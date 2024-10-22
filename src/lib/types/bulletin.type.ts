export interface Bulletin {
  author: string;
  category_id: number;
  content: string;
  id: number;
  pdfAttachments: {
    category: string;
    file_path: string;
    id: number;
  };
  published_at: string;
  title: string;
}
