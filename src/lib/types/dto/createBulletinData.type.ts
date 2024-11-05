interface CreateBulletinData {
  category_id: string;
  title: string;
  content: string;
  author: string;
  published_at: Date;
  deleted_attachment_ids?: number[];
}
