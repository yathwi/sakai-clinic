import Image from 'next/image';
import Link from 'next/link';
export const PageHeader = () => {
  return (
    <div className=" ">
      <div className=" fixed bg-white w-full py-3 max-w-[414px]">
        <div className=" flex justify-between w-[390px] ">
          <div className=" ml-5">
            <Image src="/InMode2/logo.png" alt="" height={37} width={148} />
          </div>
          <div className="">
            <Link
              href="https://line.me/R/ti/p/@202sazng?from=page&accountId=202sazng"
              legacyBehavior
            >
              <a className=" hover:opacity-70">
                <Image src="/InMode/cta_s.png" alt="" height={50} width={150} />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
