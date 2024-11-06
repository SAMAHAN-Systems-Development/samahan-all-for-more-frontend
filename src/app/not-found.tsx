'use client';
import { useEffect, useState } from 'react';
import BallFrame from '@/components/ui/BallFrame';
import Button from '@/components/ui/Button';
import Image from 'next/image';
import Link from 'next/link';
import NotFoundImage from 'public/images/404.png';
import MoreSphereImage from 'public/images/MoreSphere.png';

export default function NotFound() {
  const [paddingTop, setPaddingTop] = useState('pt-[60px]');

  useEffect(() => {
    const handleResize = () => {
      setPaddingTop(window.innerWidth < 400 ? 'pt-[35px]' : 'pt-[60px]');
    };

    handleResize(); // Set initial padding
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="h-[26rem] min-[400px]:h-[28rem] sm:h-[40rem] md:h-[46rem] lg:h-[50rem] xl:h-[55rem] w-full relative tracking-wide overflow-clip">
      <div className="rounded-[10%_10%_50%_50%/0%_0%_20%_20%] w-full h-[23rem] min-[400px]:h-[26rem] sm:h-[36rem] md:h-[42rem] xl:h-[46rem] bg-blue pt-32 min-[400px]:pt-10 sm:pt-20 pb-28 sm:pb-36 flex flex-col items-center justify-center text-white">
        <div
          className={`w-full xsm:w-1/3 sm:w-2/3 md:w-2/3 lg:w-1/2 xl:w-[650px] xsm:h-[290px] sm:h-[245px] lg:h-[285px] md:h-[295px] xl:h-[305px] relative ${paddingTop} sm:pt-6 md:pt-0`}
        >
          <Image src={NotFoundImage} alt="404" className="object-contain" />
        </div>
        <span className="leading-tight text-center w-2/3">
          <h2 className="text-[25px] font-medium xsm:text-[25px] lg:text-[35px] xl:text-bold">
            There&apos;s nothing here at the moment!
          </h2>
          <div className="flex items-center justify-center mt-1 sm:mt-0 lg:mt-2 xl:mt-0">
            <h2 className="font-medium text-base xsm:text-[20px] sm:text-[25px] lg:text-[35px] xl:text-bold">
              Let&apos;s go back for
            </h2>
            <div className="ml-2 lg:ml-1 xl:ml-2 w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-[350px] xl:h-[95px] relative mt-3">
              <Image src={MoreSphereImage} alt="More" />
            </div>
          </div>
          <div className="mt-8 xsm:mt-2 sm:mt-4">
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
