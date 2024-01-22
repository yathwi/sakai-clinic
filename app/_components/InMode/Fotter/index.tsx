import Image from 'next/image';

export const Fotter = () => {
  return (
    <div className=" bg-[#F5FFEC] max-w-[414px] py-10 text-[#B3B3B3]">
      <div className=" text-center">
        <div className=" flex justify-center">
          <Image src="/logo.png" height={20} width={200} alt="" />
        </div>
        <p className="mt-5">Copyright © 2019 Sakai Clinic 62</p>
        <p>
          東京都渋谷区道玄坂2丁目11-6
          <br /> TOP HILLS GARDEN道玄坂 8階
        </p>
        <p className=" mt-5">03-6455-1813</p>
      </div>
    </div>
  );
};
