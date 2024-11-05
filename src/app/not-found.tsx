import BallFrame from '@/components/ui/BallFrame';
import Button from '@/components/ui/Button';
import Image from 'next/image';
import Link from 'next/link';
import NotFoundImage from 'public/images/404.png';
import MoreSphereImage from 'public/images/MoreSphere.png';

export default function NotFound() {
  return (
    <section
      className={`h-[26rem] min-[400px]:h-[28rem] sm:h-[40rem] md:h-[46rem] lg:h-[50rem] xl:h-[55rem] w-full relative tracking-wide overflow-clip `}
    >
      {' '}
      <div className="rounded-[10%_10%_50%_50%/0%_0%_20%_20%] w-full h-[23rem] min-[400px]:h-[26rem] sm:h-[36rem] md:h-[42rem] xl:h-[46rem] bg-blue pt-32 min-[400px]:pt-10 sm:pt-20 pb-28 sm:pb-36 flex flex-col items-center justify-center text-white">
        <div className="w-1/2 sm:w-1/2 md:w-2/3 lg:w-1/2 xl:w-[650px] xl:h-[305px] relative">
          <Image src={NotFoundImage} alt="404" className="object-contain" />
        </div>
        <span className="leading-tight text-center w-2/3">
          <h2 className="text-base font-medium xsm:text-[30px] sm:text-[35px] lg:text-[35px] xl:text-title">
            There&apos;s nothing here at the moment!
          </h2>
          <div className="flex items-center justify-center mt-1 sm:mt-0 lg:mt-2 xl:mt-0">
            <h2 className="font-medium text-base xsm:text-[30px] sm:text-[35px] lg:text-[35px] xl:text-title">
              Let&apos;s go back for
            </h2>
            <div className="ml-2 lg:ml-1 xl:ml-2 w-1/2 sm:w-1/2 md:w-2/3 lg:w-1/2 xl:w-[350px] xl:h-[105px] relative mt-3">
              <Image src={MoreSphereImage} alt="More" />
            </div>
          </div>
          <div className="mt-8 sm:mt-4">
            <Link href="/">
              <Button text="Back to Home" colorScheme="white" />
            </Link>
          </div>
        </span>
      </div>
      <div className="w-full absolute bottom-0 lg:scale-110 ">
        <BallFrame hero />
      </div>
    </section>
  );
}
