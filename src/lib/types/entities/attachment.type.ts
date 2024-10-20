interface PDFAttachment {
  id: number;
  bulletin_id: number;
  file_path: string;
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date;
  bulletin: Bulletin;
}
