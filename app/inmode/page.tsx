import Image from 'next/image';
import Link from 'next/link';

const Page = () => {
  return (
    <div className=" bg-red-50 flex justify-center">
      <div className=" max-w-[414px] bg-white">
        <Image src="/InMode2/1MV.jpg" height={500} alt="" width={414} />
        <div className=" -mt-10 flex justify-center">
          <Link href="/" legacyBehavior>
            <a className=" hover:opacity-80">
              <Image src="/InMode2/2CTA.png" height={500} alt="" width={350} />
            </a>
          </Link>
        </div>
        <div className=" py-5 flex justify-center px-10">
          <Image src="/InMode2/3LINE.jpg" height={500} alt="" width={340} />
        </div>
        <Image src="/InMode2/4Main.jpg" height={500} alt="" width={414} />
        <Image src="/InMode2/5about.jpg" height={500} alt="" width={414} />
        <Image src="/InMode2/6difference.jpg" height={500} alt="" width={414} />
        <div className=" py-5">
          <Image src="/InMode2/7exam.jpg" height={500} alt="" width={414} />
        </div>
        <Image src="/InMode2/8price-2.jpg" height={500} alt="" width={414} />{' '}
        <div className=" -mt-60 mb-10 px-5 flex justify-center">
          <Link href="/" legacyBehavior>
            <a className=" hover:opacity-80">
              <Image src="/InMode2/2CTA.png" height={200} alt="" width={350} />
            </a>
          </Link>
        </div>
        <Image src="/InMode2/9reaseon.jpg" height={500} alt="" width={414} />
        <Image src="/InMode2/10flow_about.jpg" height={500} alt="" width={414} />
        <div className=" m-10 ">
          <Image src="/InMode2/11doctor.jpg" height={500} alt="" width={414} />
        </div>
        <div className=" mx-5">
          <Image src="/InMode2/12clinic.jpg" height={500} alt="" width={414} />
        </div>
      </div>
    </div>
  );
};
export default Page;
