import { FunctionComponent } from "react";

const Navbar: FunctionComponent = ({ className = "" }) => {
  return (
    <header
      className={`self-stretch box-border flex flex-row items-start justify-center py-[20.5px] px-5 gap-[129px] top-[0] z-[99] sticky max-w-full border-b-[1px] border-solid border-grey-15 lg:gap-[64px] mq450:gap-[16px] mq750:gap-[32px] self-stretch box-border flex flex-row items-start justify-center py-[20.5px] px-5 gap-[129px] top-[0] z-[99] sticky max-w-full border-b-[1px] border-solid border-grey-15 lg:gap-[64px] mq450:gap-[16px] mq750:gap-[32px] ${className}`}
    >
      <div className="h-[57.5px] w-[494px] flex flex-col items-start justify-start pt-[1.5px] px-0 pb-0 box-border max-w-full h-[57.5px] w-[494px] flex flex-col items-start justify-start pt-[1.5px] px-0 pb-0 box-border max-w-full">
        <img
          className="w-[149px] flex-1 relative max-h-full object-cover w-[149px] flex-1 relative max-h-full object-cover"
          loading="lazy"
          alt=""
          src="/hunderd--1@2x.png"
        />
      </div>
      <button className="cursor-pointer [border:none] py-3.5 px-7 bg-grey-15 rounded-lg flex flex-row items-start justify-start z-[1] hover:bg-dimgray-100 cursor-pointer [border:none] py-3.5 px-7 bg-grey-15 rounded-lg flex flex-row items-start justify-start z-[1] hover:bg-dimgray-100">
        <div className="relative text-lg leading-[150%] font-semibold font-barlow text-absolute-white text-left inline-block min-w-[47px] relative text-lg leading-[150%] font-semibold font-barlow text-absolute-white text-left inline-block min-w-[47px]">
          Home
        </div>
      </button>
      <nav className="m-0 w-[477px] flex flex-col items-start justify-start pt-[14.5px] px-0 pb-0 box-border max-w-full lg:hidden mq750:w-[358px] m-0 w-[477px] flex flex-col items-start justify-start pt-[14.5px] px-0 pb-0 box-border max-w-full lg:hidden mq750:w-[358px]">
        <nav className="m-0 flex flex-row items-start justify-start gap-[30px] text-left text-lg text-grey-90 font-barlow mq750:hidden m-0 flex flex-row items-start justify-start gap-[30px] text-left text-lg text-grey-90 font-barlow mq750:hidden">
          <div className="flex flex-row items-start justify-start relative flex flex-row items-start justify-start relative">
            <div className="w-[177.7px] !m-[0] absolute bottom-[-18px] left-[-138.9px] flex flex-row items-start justify-start pt-[15px] px-[39.9px] pb-[18px] box-border w-[177.7px] !m-[0] absolute bottom-[-18px] left-[-138.9px] flex flex-row items-start justify-start pt-[15px] px-[39.9px] pb-[18px] box-border">
              <div className="relative leading-[150%] font-medium inline-block min-w-[69px] z-[1] relative leading-[150%] font-medium inline-block min-w-[69px] z-[1]">
                Services
              </div>
            </div>
            <div className="relative leading-[150%] font-medium inline-block min-w-[41px] z-[1] relative leading-[150%] font-medium inline-block min-w-[41px] z-[1]">
              Work
            </div>
          </div>
          <div className="relative leading-[150%] font-medium inline-block min-w-[48px] relative leading-[150%] font-medium inline-block min-w-[48px]">
            About
          </div>
        </nav>
      </nav>
      <button className="cursor-pointer [border:none] py-4 px-6 bg-mediumslateblue-200 rounded-lg flex flex-row items-start justify-start whitespace-nowrap hover:bg-mediumslateblue-100 cursor-pointer [border:none] py-4 px-6 bg-mediumslateblue-200 rounded-lg flex flex-row items-start justify-start whitespace-nowrap hover:bg-mediumslateblue-100">
        <div className="relative text-lg leading-[150%] font-medium font-barlow text-grey-15 text-left inline-block min-w-[87px] relative text-lg leading-[150%] font-medium font-barlow text-grey-15 text-left inline-block min-w-[87px]">
          Contact Us
        </div>
      </button>
    </header>
  );
};

export default Navbar;
