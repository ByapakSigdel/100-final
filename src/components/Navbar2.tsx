import { FunctionComponent } from "react";

export type Navbar2Type = {
  className?: string;
};

const Navbar2: FunctionComponent<Navbar2Type> = ({ className = "" }) => {
  return (
    <header
      className={`self-stretch box-border flex flex-row items-start justify-center py-[20.5px] px-5 gap-[474px] top-[0] z-[99] sticky max-w-full text-left text-lg text-grey-90 font-barlow border-b-[1px] border-solid border-grey-15 lg:gap-[237px] mq450:gap-[59px] mq750:gap-[118px] ${className}`}
    >
      <div className="h-[57.5px] w-[149px] flex flex-col items-start justify-start pt-[1.5px] px-0 pb-0 box-border">
        <img
          className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
          loading="lazy"
          alt=""
          src="/hunderd--1@2x.png"
        />
      </div>
      <div className="self-stretch w-[177.7px] relative hidden" />
      <div className="w-[973px] flex flex-row items-start justify-between gap-[20px] max-w-full lg:w-[622px]">
        <div className="flex flex-row items-start justify-start gap-[30px] max-w-full lg:hidden">
          <div className="flex flex-col items-start justify-start pt-3.5 px-0 pb-0 text-absolute-white">
            <div className="relative leading-[150%] font-semibold inline-block min-w-[47px]">
              Home
            </div>
          </div>
          <div className="flex flex-col items-start justify-start pt-3.5 px-0 pb-0">
            <div className="relative leading-[150%] font-medium inline-block min-w-[69px] z-[1]">
              Services
            </div>
          </div>
          <button className="cursor-pointer [border:none] py-3.5 px-7 bg-grey-15 rounded-lg flex flex-row items-start justify-start z-[1] hover:bg-dimgray-100">
            <div className="relative text-lg leading-[150%] font-medium font-barlow text-grey-90 text-left inline-block min-w-[41px]">
              Work
            </div>
          </button>
          <div className="flex flex-col items-start justify-start pt-3.5 px-0 pb-0">
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
      </div>
    </header>
  );
};

export default Navbar2;
