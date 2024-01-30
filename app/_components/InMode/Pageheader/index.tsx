import Image from 'next/image';
import Link from 'next/link';
export const PageHeader = () => {
  return (
    <div className=" ">
      <div className=" fixed bg-white w-full py-2 max-w-[414px]">
        <div className=" flex justify-between w-[390px] ">
          <div className=" ml-5">
            <Image src="/InMode2/logo.png" alt="" height={37} width={148} />
          </div>
          <div className="">
            <Link href="/" legacyBehavior>
              <a className=" hover:opacity-70">
                <Image src="/InMode/cta_s.png" alt="" height={39} width={134} />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
