import Image from 'next/image';
import Link from 'next/link';
export const PageHeader = () => {
  return (
    <div className=" ">
      <div className=" fixed bg-white w-full py-3 max-w-[414px]">
        <div className=" flex justify-between px-5 ">
          <div className="">
            <Image src="/gummy-smile2/logo.png" alt="" height={37} width={148} />
          </div>
          <div className="">
            <Link
              href="https://liff.line.me/1657461637-07NVoM5D/landing?follow=%40202sazng&lp=ppItoT&liff_id=1657461637-07NVoM5D"
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
