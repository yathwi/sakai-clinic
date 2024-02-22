import Image from 'next/image';
import Link from 'next/link';
import { Gothic_A1, Hina_Mincho } from 'next/font/google';
import { Info } from '../_components/InMode/info';

const gothic = Gothic_A1({
  display: 'swap',
  weight: '400',
  style: 'normal',
  subsets: ['latin'],
});

const hina = Hina_Mincho({
  display: 'swap',
  weight: '400',
  style: 'normal',
  subsets: ['latin'],
});

const Page = () => {
  return (
    <div className={` max-w-[414px] mt-12 bg-white ${gothic.className}`}>
      <Image src="/gummy-smile2/1MV.jpg" height={586} alt="" width={414} />
      <div className=" -mt-20 flex justify-center">
        <Link href="https://line.me/R/ti/p/@202sazng?from=page&accountId=202sazng" legacyBehavior>
          <a className=" hover:opacity-80">
            <Image src="/gummy-smile2/2CTA.png" height={112} alt="" width={326} />
          </a>
        </Link>
      </div>
      <div className=" py-10 flex justify-center">
        <Image src="/gummy-smile2/3award.jpg" height={114} alt="" width={374} />
      </div>
      <Image src="/gummy-smile2/4Main.png" height={919} alt="" width={414} />
      <Image src="/gummy-smile2/5customer.jpg" height={2441} alt="" width={414} />
      <Image src="/gummy-smile2/6reason-2.jpg" height={1743} alt="" width={414} />

      <Image src="/gummy-smile2/7about.jpg" height={409} alt="" width={414} />
      <div>
        <div className=" w-[50%] mt-10 ml-20">
          <Image src="/gummy-smile2/8menu-title.png" height={73} alt="" width={214} />{' '}
        </div>
        <div className=" mx-3">
          <div className=" mt-5">
            <Image src="/gummy-smile2/9menu01-1.jpg" height={757} alt="" width={386} />{' '}
            <div className=" mt-5">
              <Link
                href="https://line.me/R/ti/p/@202sazng?from=page&accountId=202sazng"
                legacyBehavior
              >
                <a className=" hover:opacity-80">
                  <Image src="/gummy-smile2/9menu01-card.png" height={198} alt="" width={380} />{' '}
                </a>
              </Link>
            </div>
          </div>
          <div className=" mt-10">
            <Image src="/gummy-smile2/10menu02-1.jpg" height={673} alt="" width={386} />{' '}
            <div className=" mt-5">
              <Link
                href="https://line.me/R/ti/p/@202sazng?from=page&accountId=202sazng"
                legacyBehavior
              >
                <a className=" hover:opacity-80">
                  <Image src="/gummy-smile2/10menu02-card.png" height={198} alt="" width={380} />{' '}
                </a>
              </Link>
            </div>
          </div>
          <div className=" mt-10">
            <Image src="/gummy-smile2/11menu03-1.jpg" height={631} alt="" width={380} />{' '}
            <div className=" mt-5">
              <Link
                href="https://line.me/R/ti/p/@202sazng?from=page&accountId=202sazng"
                legacyBehavior
              >
                <a className=" hover:opacity-80">
                  <Image src="/gummy-smile2/11menu03-card.png" height={198} alt="" width={380} />{' '}
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className=" text-center my-7">
        <p className={` text-[#D16D6A] text-xl ${hina.className}`}>
          ＼　まずはご相談ください！　／
        </p>
        <Link href="https://line.me/R/ti/p/@202sazng?from=page&accountId=202sazng" legacyBehavior>
          <a className=" hover:opacity-80 flex justify-center mt-3">
            <Image src="/gummy-smile2/2CTA.png" height={112} alt="" width={326} />
          </a>
        </Link>
        <div className=" mx-auto w-80">
          <p className=" text-[#D16D6A] mt-2 text-[10px] text-left mx-auto font-thin">
            ※ 別途治療において必要な際にはレントゲン、他などの
            <br className="" />
            <span className=" ml-4" />
            検査代金がかかります。
          </p>
        </div>
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
