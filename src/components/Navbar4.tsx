import { FunctionComponent } from "react";

export type Navbar4Type = {
  className?: string;
};

const Navbar4: FunctionComponent<Navbar4Type> = ({ className = "" }) => {
  return (
    <header
      className={`self-stretch box-border flex flex-row items-start justify-center p-5 gap-[409px] top-[0] z-[99] sticky max-w-full border-b-[1px] border-solid border-grey-15 mq825:gap-[102px] mq450:gap-[51px] mq1250:gap-[204px] ${className}`}
    >
      <div className="h-[58px] w-[149px] flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border">
        <img
          className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
          loading="lazy"
          alt=""
          src="/hunderd--1@2x.png"
        />
      </div>
      <div className="w-[1038px] flex flex-row items-start justify-between gap-[20px] max-w-full mq1250:w-[557px]">
        <nav className="m-0 w-[481px] flex flex-row items-start justify-start gap-[30px] max-w-full text-left text-lg text-absolute-white font-barlow mq825:w-[169px] mq1250:hidden">
          <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
            <div className="relative leading-[150%] font-semibold inline-block min-w-[47px]">
              Home
            </div>
          </div>
          <nav className="m-0 flex-1 flex flex-row items-start justify-start gap-[12.1px] text-left text-lg text-grey-90 font-barlow mq825:hidden">
            <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
              <div className="relative leading-[150%] font-medium inline-block min-w-[69px]">
                Services
              </div>
            </div>
            <nav className="m-0 flex-1 flex flex-row items-start justify-start gap-[5.2px] text-left text-lg text-grey-90 font-barlow">
              <div className="flex-1 flex flex-row items-start justify-between pt-px pb-8 pr-[25px] pl-[17.9px] gap-[20px]">
                <div className="relative leading-[150%] font-medium inline-block min-w-[64px] z-[1]">
                  Process
                </div>
                <div className="relative leading-[150%] font-medium inline-block min-w-[41px] z-[1]">
                  Work
                </div>
              </div>
              <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                <div className="relative leading-[150%] font-medium inline-block min-w-[48px]">
                  About
                </div>
              </div>
            </nav>
          </nav>
          <div className="flex flex-col items-start justify-start pt-px px-0 pb-0 text-grey-90">
            <div className="relative leading-[150%] font-medium inline-block min-w-[62px]">
              Careers
            </div>
          </div>
        </nav>
        <button className="cursor-pointer [border:none] py-4 px-6 bg-grey-90 rounded-lg flex flex-row items-start justify-start whitespace-nowrap hover:bg-lightgray">
          <div className="relative text-lg leading-[150%] font-medium font-barlow text-grey-10 text-left inline-block min-w-[87px]">
            Contact Us
          </div>
        </button>
      </div>
    </header>
  );
};

export default Navbar4;
