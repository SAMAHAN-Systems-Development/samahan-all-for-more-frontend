'use client';
import React from 'react';

import { Banner } from '@/components/ui/banner/Banner';
import BulletinCard from '@/components/ui/BulletinCard';
import { useCategories } from '@/lib/queries/categoriesQueries';

const formatDate = (dateString: string | number | Date) => {
  const options = {
    year: 'numeric' as const,
    month: 'long' as const,
    day: '2-digit' as const,
  };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

const BulletinPage: React.FC = () => {
  const { data: categories } = useCategories();

  return (
    <main>
      <Banner
        image="/images/office-of-the-president.png"
        imageAlt="SAMAHAN Members Image"
        subtitle="SAMAHAN"
        title="GAZETTE"
      />
      <div className="p-12 overflow-x-hidden">
        <div className="flex flex-col items-center mx-4 md:mx-12">
          {categories?.map((category) => (
            <div key={category.id} className="mb-32 w-full">
              <div className="flex flex-col mb-8">
                <p className="text-title text-blue font-bold text-center">
                  {category.name}
                </p>
                <p className="text-blue text-center">{category.description}</p>
              </div>
              <div className="flex justify-center">
                <div className="flex-row lg:grid grid-cols-1 md:grid-cols-2 gap-x-12">
                  {category.bulletins.map((bulletin) => (
                    <div className="w-full mb-12" key={bulletin.id}>
                      <BulletinCard
                        author={bulletin.author}
                        content={bulletin.content}
                        id={bulletin.id}
                        pdfAttachments={
                          Array.isArray(bulletin.pdfAttachments)
                            ? bulletin.pdfAttachments
                            : []
                        } // empty for a while till fixed
                        published_at={formatDate(bulletin.published_at)}
                        title={bulletin.title}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default BulletinPage;
