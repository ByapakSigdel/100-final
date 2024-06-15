import { FunctionComponent } from "react";
import Card2 from "./Card2";

export type OurServicesSectionType = {
  className?: string;
};

const OurServicesSection: FunctionComponent<OurServicesSectionType> = ({
  className = "",
}) => {
  return (
    <div
      className={`self-stretch box-border flex flex-col items-start justify-start relative max-w-full shrink-0 text-center text-29xl text-absolute-white font-barlow border-[1px] border-solid border-grey-15 ${className}`}
    >
      <div className="self-stretch flex flex-col items-center justify-start py-[120px] px-5 box-border gap-[14px] bg-[url('/public/text-container@3x.png')] bg-cover bg-no-repeat bg-[top] max-w-full">
        <h1 className="m-0 w-[996px] relative text-inherit font-semibold font-inherit inline-block max-w-full mq450:text-10xl mq1050:text-19xl">
          Our Services
        </h1>
        <div className="w-[996px] relative text-lg tracking-[-0.01em] leading-[24px] text-grey-90 inline-block max-w-full">
          Transform your brand with our innovative digital solutions that
          captivate and engage your audience.
        </div>
      </div>
      <div className="w-[1596px] box-border overflow-x-auto flex flex-row items-start justify-start max-w-full text-left text-11xl border-t-[1px] border-solid border-grey-15">
        <div className="w-[532px] shrink-0 flex flex-col items-start justify-between p-[50px] box-border min-h-[601px] mq750:pt-8 mq750:pb-8 mq750:box-border">
          <div className="self-stretch flex flex-col items-start justify-start gap-[40px]">
            <div className="w-[88px] rounded-3xs [background:linear-gradient(229.29deg,_rgba(158,_255,_0,_0.2)_22.41%,_rgba(158,_255,_0,_0)_68.71%),_linear-gradient(180deg,_#242424,_rgba(36,_36,_36,_0))] box-border overflow-hidden flex flex-col items-start justify-start py-6 px-[23px] border-[1px] border-solid border-darkslategray">
              <img
                className="w-10 h-10 relative overflow-hidden shrink-0 object-cover"
                loading="lazy"
                alt=""
                src="/icon3@2x.png"
              />
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[20px]">
              <h2 className="m-0 self-stretch relative text-inherit tracking-[-0.01em] leading-[150%] font-semibold font-inherit mq450:text-lg mq450:leading-[27px] mq1050:text-5xl mq1050:leading-[36px]">{`Web Design `}</h2>
              <div className="self-stretch relative text-lg tracking-[-0.01em] leading-[24px] text-grey-90">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. `}</div>
            </div>
          </div>
          <button className="cursor-pointer [border:none] py-[18px] px-5 bg-grey-15 self-stretch rounded-lg flex flex-row items-center justify-center whitespace-nowrap hover:bg-dimgray-100">
            <div className="relative text-lg tracking-[-0.01em] leading-[24px] font-medium font-barlow text-absolute-white text-left inline-block min-w-[88px]">
              Learn More
            </div>
          </button>
        </div>
        <div className="h-[601px] w-0 relative box-border shrink-0 ml-[-0.2px] border-r-[1px] border-solid border-grey-15" />
        <Card2 icon="/icon-1.svg" heading="Game Development " />
        <div className="h-[602px] w-px relative box-border shrink-0 ml-[-0.2px] border-r-[1px] border-solid border-grey-15" />
        <Card2
          icon="/icon-2.svg"
          heading="Project Management"
          propMinHeight="unset"
          propGap="80px"
          propOverflow="unset"
        />
      </div>
      <img
        className="w-[524.9px] h-[500px] absolute !m-[0] top-[-340px] left-[-280px] object-cover z-[2]"
        alt=""
        src="/hunderd--text--1@2x.png"
      />
      <img
        className="w-[524.9px] h-[500px] absolute !m-[0] top-[-338px] left-[262px] object-cover z-[2]"
        loading="lazy"
        alt=""
        src="/hunderd--text--1@2x.png"
      />
      <img
        className="w-[524.9px] h-[500px] absolute !m-[0] top-[-336px] right-[273.1px] object-cover z-[2]"
        loading="lazy"
        alt=""
        src="/hunderd--text--1@2x.png"
      />
      <img
        className="w-[524.9px] h-[500px] absolute !m-[0] top-[-330px] right-[-264.9px] object-cover z-[2]"
        loading="lazy"
        alt=""
        src="/hunderd--text--1@2x.png"
      />
    </div>
  );
};

export default OurServicesSection;
