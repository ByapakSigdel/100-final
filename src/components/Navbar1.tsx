import { FunctionComponent } from "react";

export type Navbar1Type = {
  className?: string;
};

const Navbar1: FunctionComponent<Navbar1Type> = ({ className = "" }) => {
  return (
    <header
      className={`self-stretch box-border flex flex-row items-start justify-center py-[20.5px] px-5 gap-[30px] top-[0] z-[99] sticky max-w-full text-left text-lg text-absolute-white font-barlow border-b-[1px] border-solid border-grey-15 ${className}`}
    >
      <div className="h-[57.5px] w-[593px] flex flex-col items-start justify-start pt-[1.5px] px-0 pb-0 box-border max-w-full">
        <img
          className="w-[149px] flex-1 relative max-h-full object-cover"
          loading="lazy"
          alt=""
          src="/hunderd--1@2x.png"
        />
      </div>
      <div className="self-stretch w-[177.7px] relative hidden" />
      <div className="flex flex-col items-start justify-start pt-[14.5px] px-0 pb-0">
        <div className="relative leading-[150%] font-semibold inline-block min-w-[47px]">
          Home
        </div>
      </div>
      <button className="cursor-pointer [border:none] py-3.5 px-7 bg-grey-15 rounded-lg flex flex-row items-start justify-start z-[1] hover:bg-dimgray-100">
        <div className="relative text-lg leading-[150%] font-medium font-barlow text-grey-90 text-left inline-block min-w-[69px]">
          Services
        </div>
      </button>
      <div className="w-[576px] flex flex-col items-start justify-start pt-[14.5px] px-0 pb-0 box-border max-w-full text-grey-90 mq1575:w-[457px]">
        <div className="flex flex-row items-start justify-start gap-[30px] mq1575:hidden">
          <div className="relative leading-[150%] font-medium inline-block min-w-[41px] z-[1]">
            Work
          </div>
          <div className="relative leading-[150%] font-medium inline-block min-w-[48px]">
            About
          </div>
        </div>
      </div>
      <button className="cursor-pointer [border:none] py-4 px-6 bg-mediumslateblue-200 rounded-lg flex flex-row items-start justify-start whitespace-nowrap hover:bg-mediumslateblue-100">
        <div className="relative text-lg leading-[150%] font-medium font-barlow text-grey-15 text-left inline-block min-w-[87px]">
          Contact Us
        </div>
      </button>
    </header>
  );
};

export default Navbar1;
