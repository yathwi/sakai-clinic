import Image from 'next/image';
import Link from 'next/link';

const items = [
  { title: 'アクセス', content1: 'JR・地下鉄 渋谷駅から徒歩7分', content2: '' },
  {
    title: '住所',
    content1: '東京都渋谷区道玄坂2丁目11-6',
    content2: 'TOP HILLS GARDEN道玄坂 8階F',
  },
  { title: '電話番号', content1: '03-6455-1813', content2: '' },
  { title: '診療時間', content1: '診療時間 12:00～20:00', content2: '休診日 水曜・日曜・祝日' },
  { title: '公式HP', content1: 'https://www.sakai-clinic62.jp', content2: '' },
];
export const Info: React.FC = () => {
  return (
    <div className=" bg-white">
      <div className="  text-center mx-5 py-5">
        <div className="bg-[#FBF3E7] py-10">
          <h2 className=" text-xl font-light">クリニック情報</h2>
          <div className="w-full">
            {items.map((item) => {
              return (
                <div className=" mx-auto mt-5 w-80" key={item.title}>
                  <h3 className=" bg-[#EEE1D0]">{item.title}</h3>
                  {item.title === '公式HP' ? (
                    <Link href={item.content1} legacyBehavior>
                      <a className=" text-blue-300 underline">{item.content1}</a>
                    </Link>
                  ) : (
                    <p className="mt-2">{item.content1}</p>
                  )}

                  <p>{item.content2}</p>
                </div>
              );
            })}
          </div>
          <div className=" mt-5 mx-5">
            <Image src="/gummy-smile2/map.jpg" height={500} alt="" width={414} />
          </div>
        </div>
      </div>
    </div>
  );
};
