import Image from 'next/image';
import Link from 'next/link';
import { Fotter } from '../_components/InMode/Fotter';
import { Info } from '../_components/InMode/info';

const Page = () => {
  return (
    <div className=" bg-red-50 flex justify-center">
      <div className=" max-w-[414px] bg-white">
        <Image
          src="/InMode2/1MV.jpg"
          height={500}
          alt="韓国で大人気、切らない脂肪吸引インモードminiFX"
          width={414}
        />
        <div className=" -mt-10 flex justify-center">
          <Link href="https://line.me/ti/p/%40202sazng" legacyBehavior>
            <a className=" hover:opacity-80">
              <Image
                src="/InMode2/2CTA.png"
                height={500}
                alt="インモードminiFX 初回(税込)11000円~"
                width={350}
              />
            </a>
          </Link>
        </div>
        <div className=" py-5 flex justify-center px-10">
          <Link href="https://line.me/ti/p/%40202sazng" legacyBehavior>
            <a className=" hover:opacity-80">
              <Image
                src="/InMode2/3LINE.jpg"
                height={500}
                alt="初回カウンセリングが今だけ無料！LINE予約はこちらから"
                width={340}
              />
            </a>
          </Link>
        </div>
        <Image
          src="/InMode2/4Main.jpg"
          height={500}
          alt="インモードで速攻！麻酔なしで切らない顔痩せ"
          width={414}
        />
        <Image
          src="/InMode2/5about.jpg"
          height={500}
          alt="施術部位の皮膚を吸引し、40度に温めてから、2000ボルトの電流を瞬時に流すことで深さ最大2.5cmまでの脂肪細胞が破壊されるという仕組みです。筋肉や血管・神経などを傷つけず、脂肪細胞だけに選択的にエネルギー照射を行うことができます。韓国で大人気のメニューで、「切らない小顔治療」「HIFUに匹敵する即時効果」と話題の小顔治療、痩身施術です。"
          width={414}
        />
        <Image src="/InMode2/6difference-2.jpg" height={500} alt="ハイフとの違い" width={414} />
        <div className=" pt-5">
          <Image
            src="/InMode2/7exam.jpg"
            height={500}
            alt="当院では顎下・頬の肉・二重顎をごっそり除去、すっきり小顔・Vライン"
            width={414}
          />
        </div>
        <Image src="/InMode2/8price-2.jpg" height={500} alt="" width={414} />{' '}
        <div className=" -mt-52 mb-10 px-5 flex justify-center">
          <Link href="https://line.me/ti/p/%40202sazng" legacyBehavior>
            <a className=" hover:opacity-80">
              <Image
                src="/InMode2/2CTA.png"
                height={500}
                alt="インモードminiFX 初回(税込)11000円~"
                width={350}
              />
            </a>
          </Link>
        </div>
        <Image
          src="/InMode2/9reaseon.jpg"
          height={500}
          alt="サカイクリニック62の特徴"
          width={414}
        />
        <Image src="/InMode2/10flow_about.jpg" height={500} alt="ご利用の流れ" width={414} />
        <div className=" my-10 mx-5 ">
          <Image src="/InMode2/11doctor.jpg" height={500} alt="院長の紹介" width={414} />
        </div>
        <Info />
        <div className=" mt-10 flex justify-center">
          <Link href="https://line.me/ti/p/%40202sazng" legacyBehavior>
            <a className=" hover:opacity-80">
              <Image
                src="/InMode2/2CTA.png"
                height={500}
                alt="インモードminiFX 初回(税込)11000円~"
                width={350}
              />
            </a>
          </Link>
        </div>
        <div className=" py-5 flex justify-center px-10">
          <Link href="https://line.me/ti/p/%40202sazng" legacyBehavior>
            <a className=" hover:opacity-80">
              <Image
                src="/InMode2/3LINE.jpg"
                height={500}
                alt="初回カウンセリングが今だけ無料！LINE予約はこちらから"
                width={340}
              />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Page;
