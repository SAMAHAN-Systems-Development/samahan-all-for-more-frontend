'use client';
import React from 'react';

import BulletinCard from '@/components/ui/BulletinCard';
import { useBulletins } from '@/lib/queries/bulletinQueries';
const Test: React.FC = () => {
  const { data: bulletins, isLoading, error } = useBulletins();

  if (isLoading) return <p>Loading bulletins...</p>;
  if (error) return <p>Error fetching bulletins: {error.message}</p>;

  return (
    <div>
      {bulletins.map((bulletin) => (
        <BulletinCard
          key={bulletin.id}
          author={bulletin.author}
          content={bulletin.content}
          id={bulletin.id}
          published_at={bulletin.published_at}
          title={bulletin.title}
          pdfAttachments={bulletin.pdfAttachments}
        />
      ))}
    </div>
  );
};

export default Test;
