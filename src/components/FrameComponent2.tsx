import { FunctionComponent } from "react";
import FrameComponent5 from "./FrameComponent5";

export type FrameComponent2Type = {
  className?: string;
};

const FrameComponent2: FunctionComponent<FrameComponent2Type> = ({
  className = "",
}) => {
  return (
    <div
      className={`w-[1595px] flex flex-col items-start justify-start max-w-full text-left text-29xl text-absolute-white font-barlow ${className}`}
    >
      <div className="self-stretch box-border flex flex-col items-start justify-start pt-[120px] px-0 pb-0 relative gap-[50px] max-w-full shrink-0 border-[1px] border-solid border-grey-15 mq1250:pt-[78px] mq1250:box-border mq450:pt-[33px] mq450:box-border mq825:gap-[25px] mq825:pt-[51px] mq825:box-border">
        <div className="w-[1295px] flex flex-row items-start justify-start py-0 px-[50px] box-border max-w-full mq1250:pl-[25px] mq1250:pr-[25px] mq1250:box-border">
          <div className="flex-1 flex flex-col items-start justify-start gap-[14px] max-w-full">
            <h1 className="m-0 self-stretch relative text-inherit font-semibold font-inherit mq450:text-10xl mq825:text-19xl">
              Project Management
            </h1>
            <div className="self-stretch relative text-lg tracking-[-0.01em] leading-[150%] text-grey-90">
              Our experienced project management team ensures that your projects
              are delivered on time, within budget, and according to your
              specifications. We follow industry-standard methodologies and
              employ effective communication and collaboration tools to keep you
              informed throughout the development process.
            </div>
          </div>
        </div>
        <div className="flex flex-row items-start justify-start py-0 px-[50px] box-border max-w-full mq825:pl-[25px] mq825:pr-[25px] mq825:box-border">
          <button className="cursor-pointer [border:none] py-3 px-3.5 bg-grey-15 rounded-lg flex flex-row items-start justify-start box-border whitespace-nowrap max-w-full hover:bg-dimgray-100">
            <div className="relative text-3xl font-barlow text-absolute-white text-left">
              Our project management services include:
            </div>
          </button>
        </div>
        <div className="self-stretch box-border flex flex-col items-start justify-start pt-[50px] px-0 pb-0 gap-[50px] max-w-full text-9xl text-grey-60 border-t-[1px] border-solid border-grey-15 mq1250:pt-8 mq1250:box-border mq825:gap-[25px] mq825:pt-[21px] mq825:box-border">
          <div className="self-stretch flex flex-col items-start justify-start gap-[50px] max-w-full mq825:gap-[25px]">
            <div className="self-stretch flex flex-row items-start justify-end max-w-full shrink-0">
              <h3 className="m-0 w-[1545px] relative text-inherit font-medium font-inherit inline-block max-w-full mq450:text-3xl">
                Project Planning and Scoping
              </h3>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[49.9px] pl-[50px] gap-[50px] shrink-0 border-t-[1px] border-solid border-grey-15 border-b-[1px] mq1250:pl-[25px] mq1250:pr-[25px] mq1250:box-border mq1575:flex-wrap mq825:gap-[25px]">
              <FrameComponent5
                icon="/icon-18.svg"
                text="Requirements Gathering and Analysis"
                propWidth="unset"
                propAlignSelf="unset"
                propOverflow="hidden"
                propAlignSelf1="unset"
              />
              <div className="h-[278px] w-0 relative box-border border-r-[1px] border-solid border-grey-15 mq1575:w-full mq1575:h-0" />
              <FrameComponent5
                icon="/icon-19.svg"
                text="Project Roadmap and Timeline Development"
                propWidth="298.8px"
                propAlignSelf="stretch"
                propOverflow="hidden"
                propAlignSelf1="stretch"
              />
              <div className="h-[278px] w-0 relative box-border border-r-[1px] border-solid border-grey-15 mq1575:w-full mq1575:h-0" />
              <FrameComponent5
                icon="/icon-20.svg"
                text="Resource Allocation and Task Assignment"
                propWidth="298.8px"
                propAlignSelf="stretch"
                propOverflow="hidden"
                propAlignSelf1="stretch"
              />
              <div className="h-[278px] w-0 relative box-border border-r-[1px] border-solid border-grey-15 mq1575:w-full mq1575:h-0" />
              <FrameComponent5
                icon="/icon-19.svg"
                text="Risk Assessment and Mitigation Strategies"
                propWidth="298.8px"
                propAlignSelf="stretch"
                propOverflow="hidden"
                propAlignSelf1="stretch"
              />
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[50px] max-w-full mq825:gap-[25px]">
            <div className="self-stretch flex flex-row items-start justify-end max-w-full shrink-0">
              <h3 className="m-0 w-[1545px] relative text-inherit font-medium font-inherit inline-block max-w-full mq450:text-3xl">
                Agile Development
              </h3>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[49.9px] pl-[50px] gap-[50px] shrink-0 border-t-[1px] border-solid border-grey-15 border-b-[1px] mq1250:pl-[25px] mq1250:pr-[25px] mq1250:box-border mq1575:flex-wrap mq825:gap-[25px]">
              <FrameComponent5
                icon="/icon-22.svg"
                text="Iterative Development and Sprints"
                propWidth="unset"
                propAlignSelf="unset"
                propOverflow="hidden"
                propAlignSelf1="unset"
              />
              <div className="h-[278px] w-0 relative box-border border-r-[1px] border-solid border-grey-15 mq1575:w-full mq1575:h-0" />
              <FrameComponent5
                icon="/icon-23.svg"
                text="Scrum or Kanban Methodology Implementation"
                propWidth="298.8px"
                propAlignSelf="stretch"
                propOverflow="hidden"
                propAlignSelf1="stretch"
              />
              <div className="h-[278px] w-0 relative box-border border-r-[1px] border-solid border-grey-15 mq1575:w-full mq1575:h-0" />
              <FrameComponent5
                icon="/icon-24.svg"
                text="Regular Progress Updates and Demos"
                propWidth="298.8px"
                propAlignSelf="stretch"
                propOverflow="hidden"
                propAlignSelf1="stretch"
              />
              <div className="h-[278px] w-0 relative box-border border-r-[1px] border-solid border-grey-15 mq1575:w-full mq1575:h-0" />
              <FrameComponent5
                icon="/icon-25.svg"
                text="Continuous Improvement and Feedback Incorporation"
                propWidth="298.8px"
                propAlignSelf="stretch"
                propOverflow="hidden"
                propAlignSelf1="stretch"
              />
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[50px] max-w-full mq825:gap-[25px]">
            <div className="self-stretch flex flex-row items-start justify-end max-w-full shrink-0">
              <h3 className="m-0 w-[1545px] relative text-inherit font-medium font-inherit inline-block max-w-full mq450:text-3xl">
                Quality Assurance and Testing
              </h3>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[49.9px] pl-[50px] gap-[50px] shrink-0 border-t-[1px] border-solid border-grey-15 border-b-[1px] mq1250:pl-[25px] mq1250:pr-[25px] mq1250:box-border mq1575:flex-wrap mq825:gap-[25px]">
              <FrameComponent5
                icon="/icon-26.svg"
                text="Test Planning and Execution"
                propWidth="unset"
                propAlignSelf="unset"
                propOverflow="hidden"
                propAlignSelf1="unset"
              />
              <div className="h-[248px] w-0 relative box-border border-r-[1px] border-solid border-grey-15 mq1575:w-full mq1575:h-0" />
              <FrameComponent5
                icon="/icon-27.svg"
                text="Functional and Usability Testing"
                propWidth="unset"
                propAlignSelf="unset"
                propOverflow="unset"
                propAlignSelf1="unset"
              />
              <div className="h-[248px] w-0 relative box-border border-r-[1px] border-solid border-grey-15 mq1575:w-full mq1575:h-0" />
              <FrameComponent5
                icon="/icon-28.svg"
                text="Performance and Security Testing"
                propWidth="unset"
                propAlignSelf="unset"
                propOverflow="unset"
                propAlignSelf1="unset"
              />
              <div className="h-[248px] w-0 relative box-border border-r-[1px] border-solid border-grey-15 mq1575:w-full mq1575:h-0" />
              <FrameComponent5
                icon="/icon-29.svg"
                text="Bug Tracking and Issue Resolution"
                propWidth="unset"
                propAlignSelf="unset"
                propOverflow="unset"
                propAlignSelf1="unset"
              />
            </div>
          </div>
        </div>
        <img
          className="w-[524.9px] h-[500px] absolute !m-[0] top-[-294px] left-[-222px] object-cover z-[1]"
          alt=""
          src="/hunderd--text--1@2x.png"
        />
        <img
          className="w-[524.9px] h-[500px] absolute !m-[0] top-[-292px] left-[320px] object-cover z-[1]"
          alt=""
          src="/hunderd--text--1@2x.png"
        />
        <img
          className="w-[524.9px] h-[500px] absolute !m-[0] top-[-290px] right-[214.1px] object-cover z-[1]"
          alt=""
          src="/hunderd--text--1@2x.png"
        />
        <img
          className="w-[524.9px] h-[500px] absolute !m-[0] top-[-284px] right-[-323.9px] object-cover z-[1]"
          alt=""
          src="/hunderd--text--1@2x.png"
        />
      </div>
      <div className="self-stretch flex flex-col items-center justify-start py-[120px] px-5 box-border gap-[50px] bg-[url('/public/container@3x.png')] bg-cover bg-no-repeat bg-[top] max-w-full shrink-0 text-center text-19xl mq825:gap-[25px] mq825:pt-[78px] mq825:pb-[78px] mq825:box-border">
        <div className="w-[897px] flex flex-row items-start justify-center py-0 pr-px pl-0 box-border max-w-full">
          <img
            className="h-[61px] w-40 relative object-cover"
            alt=""
            src="/hunderd--1-1@2x.png"
          />
        </div>
        <div className="w-[895px] flex flex-col items-start justify-start gap-[14px] max-w-full">
          <h2 className="m-0 self-stretch relative text-inherit font-semibold font-inherit mq450:text-4xl mq825:text-11xl">
            Let us Bring your Ideas to Life in the Digital World.
          </h2>
          <div className="self-stretch relative text-lg tracking-[-0.01em] leading-[150%] text-grey-90">
            No matter which services you choose, we are committed to delivering
            exceptional results that exceed your expectations. Our
            multidisciplinary team works closely together to ensure seamless
            collaboration and a unified vision for your digital product.
          </div>
        </div>
        <div className="w-[897px] flex flex-row items-start justify-center py-0 pr-px pl-0 box-border max-w-full">
          <button className="cursor-pointer [border:none] py-[18px] px-[34px] bg-blue rounded-lg flex flex-row items-start justify-start whitespace-nowrap hover:bg-mediumslateblue-100">
            <div className="relative text-lg leading-[150%] font-medium font-barlow text-grey-10 text-left inline-block min-w-[102px]">
              Start Project
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent2;
