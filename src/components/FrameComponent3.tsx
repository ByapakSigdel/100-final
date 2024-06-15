import { FunctionComponent } from "react";
import FrameComponent5 from "./FrameComponent5";

export type FrameComponent3Type = {
  className?: string;
};

const FrameComponent3: FunctionComponent<FrameComponent3Type> = ({
  className = "",
}) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-3 box-border max-w-full text-left text-29xl text-absolute-white font-barlow ${className}`}
    >
      <div className="flex-1 box-border flex flex-col items-start justify-start pt-[120px] px-0 pb-0 relative gap-[50px] max-w-full shrink-0 border-[1px] border-solid border-grey-15 mq1250:pt-[78px] mq1250:box-border mq450:pt-[33px] mq450:box-border mq825:gap-[25px] mq825:pt-[51px] mq825:box-border">
        <div className="w-[1295px] flex flex-row items-start justify-start py-0 px-[50px] box-border max-w-full mq1250:pl-[25px] mq1250:pr-[25px] mq1250:box-border">
          <div className="flex-1 flex flex-col items-start justify-start gap-[14px] max-w-full">
            <h1 className="m-0 self-stretch relative text-inherit font-semibold font-inherit mq450:text-10xl mq825:text-19xl">
              Game Development
            </h1>
            <div className="self-stretch relative text-lg tracking-[-0.01em] leading-[150%] text-grey-90">
              Our engineering team combines technical expertise with a passion
              for innovation to build robust and scalable digital solutions. We
              leverage the latest technologies and best practices to deliver
              high-performance applications tailored to your specific needs.
            </div>
          </div>
        </div>
        <div className="flex flex-row items-start justify-start py-0 px-[50px] box-border max-w-full text-3xl mq450:pl-5 mq450:pr-5 mq450:box-border">
          <div className="rounded-lg bg-grey-15 flex flex-row items-start justify-start py-3 px-3.5 box-border whitespace-nowrap max-w-full">
            <div className="relative">Our engineering services include:</div>
          </div>
        </div>
        <div className="self-stretch box-border flex flex-col items-start justify-start pt-[50px] px-0 pb-0 gap-[50px] max-w-full text-9xl text-grey-60 border-t-[1px] border-solid border-grey-15 mq1250:pt-8 mq1250:box-border mq825:gap-[25px] mq825:pt-[21px] mq825:box-border">
          <div className="self-stretch flex flex-row items-start justify-end max-w-full shrink-0">
            <h3 className="m-0 w-[1545px] relative text-inherit font-medium font-inherit inline-block max-w-full mq450:text-3xl">
              Web Games
            </h3>
          </div>
          <div className="self-stretch box-border flex flex-row items-start justify-start py-0 pr-0 pl-[50px] gap-[50px] max-w-full shrink-0 border-t-[1px] border-solid border-grey-15 border-b-[1px] mq1575:flex-wrap mq1575:pl-5 mq1575:pr-5 mq1575:pb-5 mq1575:box-border mq825:gap-[25px]">
            <FrameComponent5
              icon="/icon-81.svg"
              text="Front-End Development (HTML, CSS, JavaScript)"
              propWidth="697.5px"
              propAlignSelf="stretch"
              propOverflow="hidden"
              propAlignSelf1="stretch"
            />
            <div className="h-[248px] w-0 relative box-border border-r-[1px] border-solid border-grey-15 mq1575:w-full mq1575:h-0" />
            <FrameComponent5
              icon="/icon-9.svg"
              text="Back-End Development (PHP, Python, Ruby)"
              propWidth="697.5px"
              propAlignSelf="stretch"
              propOverflow="hidden"
              propAlignSelf1="stretch"
            />
            <div className="h-[248px] w-0 flex flex-row items-start justify-start">
              <div className="self-stretch w-0 relative box-border border-r-[1px] border-solid border-grey-15" />
              <div className="self-stretch w-0 relative box-border border-r-[1px] border-solid border-grey-15" />
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-end max-w-full shrink-0">
            <h3 className="m-0 w-[1545px] relative text-inherit font-medium font-inherit inline-block max-w-full mq450:text-3xl">
              Mobile Game Development
            </h3>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[49.9px] pl-[50px] gap-[50px] shrink-0 border-t-[1px] border-solid border-grey-15 border-b-[1px] mq1250:pl-[25px] mq1250:pr-[25px] mq1250:box-border mq1575:flex-wrap mq825:gap-[25px]">
            <FrameComponent5
              icon="/icon-10.svg"
              text="Native iOS and Android App Development"
              propWidth="unset"
              propAlignSelf="unset"
              propOverflow="hidden"
              propAlignSelf1="unset"
            />
            <div className="h-[278px] w-0 relative box-border border-r-[1px] border-solid border-grey-15 mq1575:w-full mq1575:h-0" />
            <FrameComponent5
              icon="/icon-111.svg"
              text="Cross-Platform App Development (React Native, Flutter)"
              propWidth="298.8px"
              propAlignSelf="stretch"
              propOverflow="hidden"
              propAlignSelf1="stretch"
            />
            <div className="h-[278px] w-0 relative box-border border-r-[1px] border-solid border-grey-15 mq1575:w-full mq1575:h-0" />
            <FrameComponent5
              icon="/icon-121.svg"
              text="App Prototyping and UI/UX Design Integration"
              propWidth="298.8px"
              propAlignSelf="stretch"
              propOverflow="hidden"
              propAlignSelf1="stretch"
            />
            <div className="h-[278px] w-0 relative box-border border-r-[1px] border-solid border-grey-15 mq1575:w-full mq1575:h-0" />
            <FrameComponent5
              icon="/icon-131.svg"
              text="App Testing, Deployment, and Maintenance"
              propWidth="298.8px"
              propAlignSelf="stretch"
              propOverflow="hidden"
              propAlignSelf1="stretch"
            />
          </div>
          <div className="self-stretch flex flex-row items-start justify-end max-w-full shrink-0">
            <h3 className="m-0 w-[1545px] relative text-inherit font-medium font-inherit inline-block max-w-full mq450:text-3xl">
              Custom Software Development
            </h3>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[49.9px] pl-[50px] gap-[50px] shrink-0 border-t-[1px] border-solid border-grey-15 border-b-[1px] mq1250:pl-[25px] mq1250:pr-[25px] mq1250:box-border mq1575:flex-wrap mq825:gap-[25px]">
            <FrameComponent5
              icon="/icon-141.svg"
              text="Enterprise Software Development"
              propWidth="unset"
              propAlignSelf="unset"
              propOverflow="hidden"
              propAlignSelf1="unset"
            />
            <div className="h-[278px] w-0 relative box-border border-r-[1px] border-solid border-grey-15 mq1575:w-full mq1575:h-0" />
            <FrameComponent5
              icon="/icon-151.svg"
              text="Custom Web Application Development"
              propWidth="298.8px"
              propAlignSelf="stretch"
              propOverflow="hidden"
              propAlignSelf1="stretch"
            />
            <div className="h-[278px] w-0 relative box-border border-r-[1px] border-solid border-grey-15 mq1575:w-full mq1575:h-0" />
            <FrameComponent5
              icon="/icon-161.svg"
              text="Integration with Third-Party APIs and Systems"
              propWidth="298.8px"
              propAlignSelf="stretch"
              propOverflow="hidden"
              propAlignSelf1="stretch"
            />
            <div className="h-[278px] w-0 relative box-border border-r-[1px] border-solid border-grey-15 mq1575:w-full mq1575:h-0" />
            <FrameComponent5
              icon="/icon-171.svg"
              text="Legacy System Modernization and Migration"
              propWidth="298.8px"
              propAlignSelf="stretch"
              propOverflow="hidden"
              propAlignSelf1="stretch"
            />
          </div>
        </div>
        <img
          className="w-[524.9px] h-[500px] absolute !m-[0] top-[-386px] left-[308px] object-cover z-[1]"
          loading="lazy"
          alt=""
          src="/hunderd--text--1@2x.png"
        />
        <img
          className="w-[524.9px] h-[500px] absolute !m-[0] top-[-384px] right-[226.1px] object-cover z-[1]"
          loading="lazy"
          alt=""
          src="/hunderd--text--1@2x.png"
        />
        <img
          className="w-[524.9px] h-[500px] absolute !m-[0] top-[-378px] right-[-311.9px] object-cover z-[1]"
          loading="lazy"
          alt=""
          src="/hunderd--text--1@2x.png"
        />
      </div>
    </div>
  );
};

export default FrameComponent3;
