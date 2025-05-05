'use client';
import React from 'react';

import { Banner } from '@/components/ui/banner/Banner';
import BulletinCard from '@/components/ui/BulletinCard';
import DocumentCard from '@/components/ui/DocumentCard';
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
        image="/images/bulletin-banner.jpg"
        imageAlt="Gazette Image"
        subtitle="SAMAHAN"
        title="GAZETTE"
      />
      <div className="p-12 overflow-x-hidden">
        <div className="mb-32 w-full">
          <div className="flex flex-col mb-8 items-center">
            <p className="text-title text-blue font-bold text-center">
              Governing Documents
            </p>
            <p className="text-blue text-center">
              View and download the latest Constitution of the Undergraduate
              students of the Ateneo de Davao University.
            </p>
          </div>
          <div className="flex justify-center">
            <div className="flex-row">
              <div className="w-full mb-12">
                <DocumentCard
                  title="AMENDED 2020 SAMAHAN CONSTITUTION"
                  description="The foundational legal document outlining the structure and function of the student government."
                  downloadLink="/amended-2020-samahan-constitution.pdf"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center mx-4 md:mx-12">
          {categories && categories.length > 0 ? (
            categories.map((category) => (
              <div key={category.id} className="mb-32 w-full">
                <div className="flex flex-col mb-8">
                  <p className="text-title text-blue font-bold text-center">
                    {category.name}
                  </p>
                  <p className="text-blue text-center">
                    {category.description}
                  </p>
                </div>
                <div className="flex justify-center">
                  <div className="flex-row lg:grid grid-cols-1 md:grid-cols-2 gap-x-12">
                    {category.bulletins.length > 0 ? (
                      category.bulletins.map((bulletin) => (
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
                      ))
                    ) : (
                      <p className="text-center text-blue font-medium">
                        No bulletins available in this category.
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-blue font-medium">
              No other content has been published for now.
            </p>
          )}
        </div>
      </div>
    </main>
  );
};

export default BulletinPage;
