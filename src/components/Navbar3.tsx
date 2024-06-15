import { FunctionComponent } from "react";

export type Navbar3Type = {
  className?: string;
};

const Navbar3: FunctionComponent<Navbar3Type> = ({ className = "" }) => {
  return (
    <header
      className={`self-stretch box-border flex flex-row items-start justify-center py-[20.5px] px-5 gap-[474px] top-[0] z-[99] sticky max-w-full border-b-[1px] border-solid border-grey-15 lg:gap-[237px] mq750:gap-[118px] mq450:gap-[59px] ${className}`}
    >
      <div className="h-[57.5px] w-[149px] flex flex-col items-start justify-start pt-[1.5px] px-0 pb-0 box-border">
        <img
          className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
          loading="lazy"
          alt=""
          src="/hunderd--1@2x.png"
        />
      </div>
      <div className="w-[364px] flex flex-row items-start justify-between py-0 pr-[13px] pl-0 box-border max-w-full gap-[20px] mq750:w-[220.2px]">
        <nav className="m-0 flex flex-col items-start justify-start pt-3.5 px-0 pb-0 mq750:hidden">
          <nav className="m-0 flex flex-row items-start justify-start gap-[27.8px] text-left text-lg text-absolute-white font-barlow mq450:hidden">
            <div className="relative leading-[150%] font-semibold inline-block min-w-[47px] shrink-0 [debug_commit:f6aba90]">
              Home
            </div>
            <div className="flex flex-row items-start justify-start relative text-grey-90">
              <div className="w-[177.7px] !m-[0] absolute right-[-124.8px] bottom-[-18px] flex flex-row items-start justify-end pt-[15px] pb-[18px] pr-[53.8px] pl-[54px] box-border">
                <div className="relative leading-[150%] font-medium inline-block min-w-[41px] z-[1]">
                  Work
                </div>
              </div>
              <div className="relative leading-[150%] font-medium inline-block min-w-[69px] shrink-0 [debug_commit:f6aba90] z-[1]">
                Services
              </div>
            </div>
          </nav>
        </nav>
        <button className="cursor-pointer [border:none] py-3.5 px-7 bg-grey-15 rounded-lg flex flex-row items-start justify-start z-[1] hover:bg-dimgray-100">
          <div className="relative text-lg leading-[150%] font-medium font-barlow text-grey-90 text-left inline-block min-w-[48px]">
            About
          </div>
        </button>
      </div>
      <button className="cursor-pointer [border:none] py-4 px-6 bg-mediumslateblue-200 rounded-lg flex flex-row items-start justify-start whitespace-nowrap hover:bg-mediumslateblue-100">
        <div className="relative text-lg leading-[150%] font-medium font-barlow text-grey-15 text-left inline-block min-w-[87px]">
          Contact Us
        </div>
      </button>
    </header>
  );
};

export default Navbar3;
