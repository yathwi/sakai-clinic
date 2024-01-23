import Image from 'next/image';
import Link from 'next/link';

const Page = () => {
  return (
    <div className=" bg-red-50 flex justify-center">
      <div className=" max-w-[414px] bg-white">
        <Image src="/InMode/1MV.jpg" height={500} alt="" width={414} />
        <div className=" -mt-20 flex justify-center">
          <Image src="/InMode/2CTA.jpg" height={500} alt="" width={250} />
        </div>
        <div className=" py-5 flex justify-center px-10">
          <Image src="/InMode/3LINE.jpg" height={500} alt="" width={340} />
        </div>
        <Image src="/InMode/4Main.jpg" height={500} alt="" width={414} />
        <Image src="/InMode/5about.jpg" height={500} alt="" width={414} />
        <Image src="/InMode/6reputation.jpg" height={500} alt="" width={414} />
        <div className=" py-5 px-5">
          <Image src="/InMode/7defference.jpg" height={500} alt="" width={414} />
        </div>
        <Image src="/InMode/8price.jpg" height={500} alt="" width={414} />{' '}
        <div className=" -mt-40 px-5">
          <Link href="/" legacyBehavior>
            <a className=" hover:opacity-80">
              <Image src="/InMode/2CTA.jpg" height={500} alt="" width={414} />
            </a>
          </Link>
        </div>
        <Image src="/InMode/9feature.jpg" height={500} alt="" width={414} />
        <Image src="/InMode/10flow_faq.jpg" height={500} alt="" width={414} />
        <Image src="/InMode/11doctor.jpg" height={500} alt="" width={414} />
      </div>
    </div>
  );
};
export default Page;
