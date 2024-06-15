import { FunctionComponent } from "react";

export type FooterSection2Type = {
  className?: string;
};

const FooterSection2: FunctionComponent<FooterSection2Type> = ({
  className = "",
}) => {
  return (
    <div
      className={`flex-1 box-border flex flex-col items-center justify-start py-[50px] px-5 max-w-full z-[4] text-left text-lg text-grey-90 font-barlow border-t-[1px] border-solid border-grey-15 ${className}`}
    >
      <div className="w-[1596px] h-[93px] relative max-w-full mq750:h-auto mq750:min-h-[93]">
        <div className="absolute top-[0px] left-[0px] w-full flex flex-row items-center justify-between max-w-full gap-[20px] h-full mq750:flex-wrap">
          <img
            className="h-14 w-[149px] relative object-cover"
            alt=""
            src="/hunderd--1@2x.png"
          />
          <div className="w-[402px] rounded-xl box-border flex flex-row items-center justify-start py-3.5 pr-[13px] pl-[23px] gap-[20px] max-w-full border-[1px] border-solid border-grey-15 mq450:flex-wrap">
            <div className="relative leading-[150%] font-medium inline-block min-w-[124px]">
              Stay Connected
            </div>
            <div className="flex-1 flex flex-row items-start justify-start gap-[14px] min-w-[143px]">
              <button className="cursor-pointer py-5 px-[19px] bg-[transparent] flex-1 rounded-lg [background:linear-gradient(180deg,_#242424,_rgba(36,_36,_36,_0))] flex flex-col items-start justify-start border-[1px] border-solid border-darkslategray">
                <img
                  className="w-6 h-6 relative overflow-hidden shrink-0"
                  alt=""
                  src="/icon-12.svg"
                />
              </button>
              <div className="flex-1 rounded-lg [background:linear-gradient(180deg,_#242424,_rgba(36,_36,_36,_0))] flex flex-col items-start justify-start py-5 px-[19px] border-[1px] border-solid border-darkslategray">
                <img
                  className="w-6 h-6 relative overflow-hidden shrink-0"
                  alt=""
                  src="/icon-13.svg"
                />
              </div>
              <button className="cursor-pointer py-5 px-[19px] bg-[transparent] flex-1 rounded-lg [background:linear-gradient(180deg,_#242424,_rgba(36,_36,_36,_0))] flex flex-col items-start justify-start border-[1px] border-solid border-darkslategray">
                <img
                  className="w-6 h-6 relative overflow-hidden shrink-0"
                  alt=""
                  src="/icon-14.svg"
                />
              </button>
            </div>
          </div>
          <div className="w-[574px] !m-[0] absolute top-[32.5px] left-[calc(50%_-_286.5px)] flex flex-row items-center justify-start gap-[30px] max-w-full mq750:flex-wrap">
            <div className="relative leading-[150%] font-medium inline-block min-w-[47px]">
              Home
            </div>
            <div className="flex-1 relative leading-[150%] font-medium inline-block min-w-[45px]">
              Services
            </div>
            <div className="relative leading-[150%] font-medium inline-block min-w-[41px]">
              Work
            </div>
            <div className="flex-1 relative leading-[150%] font-medium inline-block min-w-[42px]">
              Process
            </div>
            <div className="relative leading-[150%] font-medium inline-block min-w-[48px]">
              About
            </div>
            <div className="flex-1 relative leading-[150%] font-medium inline-block min-w-[42px]">
              Careers
            </div>
            <div className="flex-1 relative leading-[150%] font-medium inline-block min-w-[42px]">
              Contact
            </div>
          </div>
        </div>
        <div className="absolute top-[92px] left-[0px] box-border w-[1596px] h-px border-t-[1px] border-solid border-grey-15" />
      </div>
      <div className="w-[1596px] flex flex-row items-center justify-between max-w-full gap-[20px] mt-[-1px] mq1050:flex-wrap">
        <div className="flex flex-row items-start justify-start gap-[30px] max-w-full mq750:flex-wrap">
          <div className="flex flex-row items-center justify-start pt-0 px-0 pb-4 gap-[10px] border-b-[1px] border-solid border-grey-15">
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0"
              alt=""
              src="/icon-15.svg"
            />
            <div className="relative leading-[150%] whitespace-nowrap">
              hello@100studios.com
            </div>
          </div>
          <div className="flex flex-row items-center justify-start pt-0 px-0 pb-4 gap-[10px] border-b-[1px] border-solid border-grey-15">
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0"
              alt=""
              src="/icon-16.svg"
            />
            <div className="relative leading-[150%] whitespace-nowrap">
              +91 91813 23 2309
            </div>
          </div>
          <div className="flex flex-row items-center justify-start pt-0 px-0 pb-4 gap-[10px] border-b-[1px] border-solid border-grey-15">
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0"
              alt=""
              src="/icon-17.svg"
            />
            <div className="relative leading-[150%]">
              Somewhere in the World
            </div>
          </div>
        </div>
        <div className="relative leading-[150%] text-grey-60">
          © 2023 100 Studios. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default FooterSection2;
