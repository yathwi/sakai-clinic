import Image from 'next/image';
import Link from 'next/link';
import { Info } from '../_components/InMode/info';

const Page = () => {
  return (
    <div className=" max-w-[414px] mt-12 bg-white">
      <Image src="/gummy-smile2/1MV.jpg" height={500} alt="" width={414} />
      <div className=" -mt-20 flex justify-center">
        <Link href="https://line.me/R/ti/p/@202sazng?from=page&accountId=202sazng" legacyBehavior>
          <a className=" hover:opacity-80">
            <Image src="/gummy-smile2/2CTA.png" height={500} alt="" width={250} />
          </a>
        </Link>
      </div>
      <div className=" py-10 flex justify-center px-10">
        <Image src="/gummy-smile2/3award.jpg" height={500} alt="" width={340} />
      </div>
      <Image src="/gummy-smile2/4Main.png" height={500} alt="" width={414} />
      <Image src="/gummy-smile2/5Customer.jpg" height={500} alt="" width={414} />
      <Image src="/gummy-smile2/6reason.jpg" height={500} alt="" width={414} />

      <Image src="/gummy-smile2/7about.jpg" height={500} alt="" width={414} />
      <div>
        <div className=" w-[60%] ml-20">
          <Image src="/gummy-smile2/8menu-title.png" height={500} alt="" width={414} />{' '}
        </div>
        <div className=" mx-3">
          <div className=" mt-5">
            <Image src="/gummy-smile2/9menu01.jpg" height={500} alt="" width={414} />{' '}
          </div>
          <div className=" mt-5">
            <Image src="/gummy-smile2/10menu02.jpg" height={500} alt="" width={414} />{' '}
          </div>
          <div className=" mt-5">
            <Image src="/gummy-smile2/11menu03.jpg" height={500} alt="" width={414} />{' '}
          </div>
        </div>
      </div>
      <Image src="/gummy-smile2/12faq.jpg" height={500} alt="" width={414} />
      <Image src="/gummy-smile2/13doctor.jpg" height={500} alt="" width={414} />
      <Image src="/gummy-smile2/14star.jpg" height={500} alt="" width={414} />
      <Info />
    </div>
  );
};
export default Page;
