import { Banner } from '@/components/ui/banner/Banner';
import BulletinCard from '@/components/ui/BulletinCard';
import Footer from '@/components/ui/Footer/Footer';
// import { Categories } from '@/lib/types/categories.type';
// import { useCategories } from '@/lib/queries/categoriesQueries';
// import { useBulletins } from '@/lib/queries/bulletinQueries';
// import { Bulletin } from '@/lib/types/bulletin.type';

// type CategoriesProps = {
//   description: string;
//   name: string;
// }

const BulletinPage = () => {
  return (
    <main>
      <Banner
        image="/images/office-of-the-president.png"
        imageAlt="SAMAHAN Members Image"
        subtitle="SAMAHAN"
        title="BULLETIN"
      />
      <div className="p-12 overflow-x-hidden" />
      <div className="flex flex-col text-center justify-center mx-10">
        <div className="mb-32">
          <h1 className="text-blue font-bold text-title mb-4">BULLETINS</h1>
          <div className="mt-12 grid grid-cols-2 gap-x-6 gap-y-10">
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
      <footer>
        <Footer />
      </footer>
    </main>
  );
};

export default BulletinPage;
