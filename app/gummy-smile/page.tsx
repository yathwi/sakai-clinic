import Image from 'next/image';
import Link from 'next/link';
import { Gothic_A1 } from 'next/font/google';
import { Info } from '../_components/InMode/info';

const gothic = Gothic_A1({
  display: 'swap',
  weight: '400',
  style: 'normal',
  subsets: ['latin'],
});

const Page = () => {
  return (
    <div className={` max-w-[414px] mt-12 bg-white ${gothic.className}`}>
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
        <div className=" w-[50%] mt-10 ml-20">
          <Image src="/gummy-smile2/8menu-title.png" height={500} alt="" width={414} />{' '}
        </div>
        <div className=" mx-3">
          <div className=" mt-5">
            <Image src="/gummy-smile2/9menu01-1.jpg" height={500} alt="" width={414} />{' '}
            <div className=" mt-5">
              <Link
                href="https://line.me/R/ti/p/@202sazng?from=page&accountId=202sazng"
                legacyBehavior
              >
                <a className=" hover:opacity-80">
                  <Image src="/gummy-smile2/9menu01-card.png" height={500} alt="" width={414} />{' '}
                </a>
              </Link>
            </div>
          </div>
          <div className=" mt-10">
            <Image src="/gummy-smile2/10menu02-1.jpg" height={500} alt="" width={414} />{' '}
            <div className=" mt-5">
              <Link
                href="https://line.me/R/ti/p/@202sazng?from=page&accountId=202sazng"
                legacyBehavior
              >
                <a className=" hover:opacity-80">
                  <Image src="/gummy-smile2/10menu02-card.png" height={500} alt="" width={414} />{' '}
                </a>
              </Link>
            </div>
          </div>
          <div className=" mt-10">
            <Image src="/gummy-smile2/11menu03-1.jpg" height={500} alt="" width={414} />{' '}
            <div className=" mt-5">
              <Link
                href="https://line.me/R/ti/p/@202sazng?from=page&accountId=202sazng"
                legacyBehavior
              >
                <a className=" hover:opacity-80">
                  <Image src="/gummy-smile2/11menu03-card.png" height={500} alt="" width={414} />{' '}
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className=" text-center my-7">
        <p className=" text-[#D16D6A]">＼まずはご相談ください！／</p>
        <Link href="https://line.me/R/ti/p/@202sazng?from=page&accountId=202sazng" legacyBehavior>
          <a className=" hover:opacity-80 flex justify-center mt-5">
            <Image src="/gummy-smile2/2CTA.png" height={500} alt="" width={250} />
          </a>
        </Link>
        <p className=" text-[#D16D6A] text-xs w-60 mx-auto font-thin">
          ※ 別途治療において必要な際にはレントゲン、他などの 　 検査代金がかかります。
        </p>
      </div>
      <Image src="/gummy-smile2/12faq.jpg" height={500} alt="" width={414} />
      <div className=" mt-5 mx-5">
        <Image src="/gummy-smile2/13doctor.jpg" height={500} alt="" width={414} />
      </div>
      <Image src="/gummy-smile2/14star.jpg" height={500} alt="" width={414} />
      <div className=" pb-10">
        <Info />
      </div>
    </div>
  );
};
export default Page;
