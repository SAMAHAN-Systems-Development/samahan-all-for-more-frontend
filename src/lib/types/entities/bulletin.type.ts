interface Bulletin {
  id: number;
  category_id: number;
  title: string;
  content: string;
  author: string;
  published_at?: Date;
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date;
  category: Category;
  pdfAttachments: PDFAttachment[];
}
