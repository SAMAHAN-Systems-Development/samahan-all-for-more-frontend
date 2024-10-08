import { Banner } from '@/components/ui/banner/Banner';
import Footer from '@/components/ui/Footer/Footer';

const BulletinPage = () => {
  return (
    <main>
      <Banner
        image="/images/samahan-members.png"
        imageAlt="SAMAHAN Members Image"
        subtitle="SAMAHAN"
        title="BULLETIN"
      />
      <div className="p-12 overflow-x-hidden" />

      <div className="flex flex-col text-center justify-center mx-12">
        {/* memorandum section */}
        <div className="mb-32">
          <h1 className="text-blue font-bold text-title mb-4">MEMEORANDUM</h1>
          <p className="text-blue text-main">
            Official communications issued by the SAMAHAN to convey important
            information, directives, or updates to members, ensuring
            transparency and awareness of relevant matters within the
            organization.
          </p>
          {/* memo cards here */}
        </div>

        {/* resolutions section */}
        <div className="mb-32">
          <h1 className="text-blue font-bold text-title mb-4">RESOLUTIONS</h1>
          <p className="text-blue text-main">
            Formal expressions of the SAMAHAN&apos;s stance on issues or
            proposals, resolutions serve to articulate collective decisions or
            recommendations that reflect the voice and will of the student body.
          </p>
          {/* resolution cards here */}
        </div>

        {/* bills section */}
        <div className="mb-32">
          <h1 className="text-blue font-bold text-title mb-4">BILLS</h1>
          <p className="text-blue text-main">
            Proposed legislative measures aimed at enacting new policies or
            amending existing ones within the SAMAHAN framework, bills undergo
            discussion and voting processes before becoming official laws.
          </p>
          {/* bills cards here */}
        </div>
      </div>
      <footer>
        <Footer />
      </footer>
    </main>
  );
};
export default BulletinPage;
