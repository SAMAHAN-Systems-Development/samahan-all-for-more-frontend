'use client';
import React from 'react';

import { Banner } from '@/components/ui/banner/Banner';
import BulletinCard from '@/components/ui/BulletinCard';
import { useBulletins } from '@/lib/queries/bulletinQueries';
import { useCategories } from '@/lib/queries/categoriesQueries';

const BulletinPage: React.FC = () => {
  const { data: bulletins, isLoading } = useBulletins();
  const { data: categories } = useCategories();

  if (isLoading) return <p>Loading bulletins...</p>;

  return (
    <main>
      <Banner
        image="/images/office-of-the-president.png"
        imageAlt="SAMAHAN Members Image"
        subtitle="SAMAHAN"
        title="BULLETIN"
      />
      <div className="m-32 overflow-x-hidden">
        <div className="flex flex-col items-center">
          {categories?.map((category) => (
            <div key={category.id} className="mb-32 w-full">
              <div className="flex flex-col mb-8">
                <p className="text-title text-blue font-bold text-center">
                  {category.name}
                </p>
                <p className="text-blue text-center">
                  {category.description} lorem ipsum lorem ipsum lorem ipsum
                  lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                  lorem ipsum lorem ipsum
                </p>
              </div>
              <div className="flex justify-center">
                <div className="grid grid-cols-2 gap-x-12">
                  {bulletins
                    ?.filter((bulletin) => bulletin.category_id === category.id)
                    .map((bulletin) => (
                      <div className="mb-12" key={bulletin.id}>
                        <BulletinCard
                          author={bulletin.author}
                          content={
                            bulletin.content.length <= 20
                              ? bulletin.content
                              : bulletin.content.substring(0, 20) + '...'
                          }
                          id={bulletin.id}
                          pdfAttachments={[]}
                          published_at={bulletin.published_at}
                          title={bulletin.title}
                        />
                      </div>
                    ))}
                  <div className="mb-12">
                    <BulletinCard
                      author={''}
                      content={''}
                      id={0}
                      pdfAttachments={[]}
                      published_at={''}
                      title={''}
                    />
                  </div>
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
