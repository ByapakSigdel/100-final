import { FunctionComponent } from "react";
import FrameComponent5 from "./FrameComponent5";

export type FrameComponent4Type = {
  className?: string;
};

const FrameComponent4: FunctionComponent<FrameComponent4Type> = ({
  className = "",
}) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center pt-0 px-5 pb-[278px] box-border max-w-full text-center text-29xl text-absolute-white font-barlow mq1250:pb-[118px] mq1250:box-border mq450:pb-[77px] mq450:box-border ${className}`}
    >
      <div className="w-[1596px] flex flex-col items-start justify-start max-w-full">
        <div className="self-stretch flex flex-col items-center justify-start py-[120px] px-5 box-border gap-[14px] bg-[url('/public/text-container3@3x.png')] bg-cover bg-no-repeat bg-[top] max-w-full shrink-0">
          <h1 className="m-0 w-[996px] relative text-inherit font-semibold font-inherit inline-block max-w-full mq450:text-10xl mq825:text-19xl">
            Our Services
          </h1>
          <div className="w-[996px] relative text-xl tracking-[-0.01em] leading-[24px] text-grey-90 inline-block max-w-full mq450:text-base mq450:leading-[19px]">
            Transform your brand with our innovative digital solutions that
            captivate and engage your audience.
          </div>
        </div>
        <div className="self-stretch box-border flex flex-col items-start justify-start pt-[120px] px-0 pb-0 relative gap-[50px] max-w-full shrink-0 text-left border-[1px] border-solid border-grey-15 mq1250:pt-[78px] mq1250:box-border mq825:gap-[25px] mq825:pt-[51px] mq825:box-border">
          <div className="w-[1296px] flex flex-row items-start justify-start py-0 px-[50px] box-border max-w-full mq1250:pl-[25px] mq1250:pr-[25px] mq1250:box-border">
            <div className="flex-1 flex flex-col items-start justify-start gap-[14px] max-w-full">
              <h1 className="m-0 self-stretch relative text-inherit font-semibold font-inherit mq450:text-10xl mq825:text-19xl">
                Web Design
              </h1>
              <div className="self-stretch relative text-lg tracking-[-0.01em] leading-[150%] text-grey-90">{`At 100Studios, our design team is passionate about creating stunning, user-centric designs that captivate your audience and elevate your brand. We believe that great design is not just about aesthetics; it's about creating seamless and intuitive user experiences. `}</div>
            </div>
          </div>
          <div className="flex flex-row items-start justify-start py-0 px-[50px] box-border max-w-full mq450:pl-5 mq450:pr-5 mq450:box-border">
            <button className="cursor-pointer [border:none] py-3 px-3.5 bg-grey-15 rounded-lg flex flex-row items-start justify-start box-border whitespace-nowrap max-w-full hover:bg-dimgray-100">
              <div className="relative text-3xl font-barlow text-absolute-white text-left">
                Our design workprocess include:
              </div>
            </button>
          </div>
          <div className="self-stretch box-border flex flex-col items-start justify-start pt-[50px] px-0 pb-0 gap-[44px] max-w-full text-9xl text-grey-60 border-t-[1px] border-solid border-grey-15 mq450:pt-[21px] mq450:box-border mq825:gap-[22px] mq825:pt-8 mq825:box-border">
            <div className="self-stretch flex flex-col items-start justify-start gap-[50px] max-w-full mq825:gap-[25px]">
              <div className="self-stretch flex flex-row items-start justify-end max-w-full shrink-0">
                <h3 className="m-0 w-[1546px] relative text-inherit font-medium font-inherit inline-block max-w-full mq450:text-3xl">
                  User Experience (UX) Design
                </h3>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start py-0 px-[50px] gap-[50px] shrink-0 text-xl text-grey-90 border-t-[1px] border-solid border-grey-15 border-b-[1px] mq1250:pl-[25px] mq1250:pr-[25px] mq1250:box-border mq1575:flex-wrap mq825:gap-[25px]">
                <FrameComponent5
                  icon="/icon11.svg"
                  text="User Research and Persona Development"
                />
                <div className="h-[278px] w-0 relative box-border border-r-[1px] border-solid border-grey-15 mq1575:w-full mq1575:h-0" />
                <FrameComponent5
                  icon="/icon-11.svg"
                  text="Information Architecture and Wireframing"
                  propWidth="299px"
                  propAlignSelf="stretch"
                  propOverflow="hidden"
                  propAlignSelf1="stretch"
                />
                <div className="h-[278px] w-0 relative box-border border-r-[1px] border-solid border-grey-15 mq1575:w-full mq1575:h-0" />
                <FrameComponent5
                  icon="/icon-21.svg"
                  text="Interactive Prototyping and User Testing"
                  propWidth="299px"
                  propAlignSelf="stretch"
                  propOverflow="hidden"
                  propAlignSelf1="stretch"
                />
                <div className="h-[278px] w-0 relative box-border border-r-[1px] border-solid border-grey-15 mq1575:w-full mq1575:h-0" />
                <FrameComponent5
                  icon="/icon-31.svg"
                  text="UI Design and Visual Branding"
                  propWidth="299px"
                  propAlignSelf="stretch"
                  propOverflow="hidden"
                  propAlignSelf1="stretch"
                />
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[50px] max-w-full mq825:gap-[25px]">
              <div className="self-stretch flex flex-row items-start justify-end max-w-full shrink-0">
                <h3 className="m-0 w-[1546px] relative text-inherit font-medium font-inherit inline-block max-w-full mq450:text-3xl">
                  User Interface (UI) Design
                </h3>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start py-0 px-[50px] gap-[50px] shrink-0 border-t-[1px] border-solid border-grey-15 border-b-[1px] mq1250:pl-[25px] mq1250:pr-[25px] mq1250:box-border mq1575:flex-wrap mq825:gap-[25px]">
                <FrameComponent5
                  icon="/icon-41.svg"
                  text="Intuitive and Visually Appealing Interface Design"
                  propWidth="299px"
                  propAlignSelf="stretch"
                  propOverflow="hidden"
                  propAlignSelf1="stretch"
                />
                <div className="h-[278px] w-0 relative box-border border-r-[1px] border-solid border-grey-15 mq1575:w-full mq1575:h-0" />
                <FrameComponent5
                  icon="/icon-51.svg"
                  text="Custom Iconography and Illustration"
                  propWidth="299px"
                  propAlignSelf="stretch"
                  propOverflow="hidden"
                  propAlignSelf1="stretch"
                />
                <div className="h-[278px] w-0 relative box-border border-r-[1px] border-solid border-grey-15 mq1575:w-full mq1575:h-0" />
                <FrameComponent5
                  icon="/icon-61.svg"
                  text="Typography and Color Palette Selection"
                  propWidth="299px"
                  propAlignSelf="stretch"
                  propOverflow="hidden"
                  propAlignSelf1="stretch"
                />
                <div className="h-[278px] w-0 relative box-border border-r-[1px] border-solid border-grey-15 mq1575:w-full mq1575:h-0" />
                <FrameComponent5
                  icon="/icon-71.svg"
                  text="Responsive Design for Various Devices"
                  propWidth="299px"
                  propAlignSelf="stretch"
                  propOverflow="hidden"
                  propAlignSelf1="stretch"
                />
              </div>
            </div>
          </div>
          <img
            className="w-[524.9px] h-[500px] absolute !m-[0] bottom-[-390px] left-[-222px] object-cover z-[1]"
            loading="lazy"
            alt=""
            src="/hunderd--text--1@2x.png"
          />
        </div>
      </div>
    </section>
  );
};

export default FrameComponent4;
