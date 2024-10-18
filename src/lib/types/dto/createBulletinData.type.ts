interface CreateBulletinData {
  category_id: number;
  title: string;
  content: string;
  author: string;
  published_at: Date;
  deleted_attachment_ids?: number[];
}
