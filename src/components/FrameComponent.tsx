import { FunctionComponent } from "react";
import Card1 from "./Card1";
import Card from "./Card";
import FaqItemContainer from "./FaqItemContainer";
import FrameComponent1 from "./FrameComponent1";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
}) => {
  return (
    <div
      className={`flex flex-row items-start justify-start py-0 pr-0 pl-[9px] box-border max-w-full shrink-0 text-center text-29xl text-absolute-white font-barlow ${className}`}
    >
      <div className="w-[1597px] flex flex-col items-end justify-start max-w-full">
        <div className="self-stretch box-border flex flex-col items-start justify-start max-w-full shrink-0 border-[1px] border-solid border-grey-15">
          <div className="self-stretch flex flex-col items-center justify-start py-[120px] px-5 box-border gap-[14px] bg-[url('/public/text-container1@3x.png')] bg-cover bg-no-repeat bg-[top] max-w-full">
            <h1 className="m-0 w-[997px] relative text-inherit font-semibold font-inherit inline-block max-w-full mq450:text-10xl mq1050:text-19xl">
              Why 100 Studios?
            </h1>
            <div className="w-[997px] relative text-lg tracking-[-0.01em] leading-[24px] text-grey-90 inline-block max-w-full">
              Experience excellence in digital craftsmanship with our team of
              skilled professionals dedicated to delivering exceptional results.
            </div>
          </div>
          <div className="w-[1597px] box-border overflow-x-auto flex flex-col items-start justify-start max-w-full text-left text-7xl border-t-[1px] border-solid border-grey-15">
            <div className="w-[1597px] h-[380px] relative mq750:h-auto mq750:min-h-[380]">
              <Card1
                icon="/icon-3.svg"
                heading="Expertise"
                paragraph="Our team consists of highly skilled professionals who have a deep understanding of the digital landscape. We stay updated with the latest industry trends and best practices to deliver cutting-edge solutions."
              />
              <div className="absolute top-[0px] left-[798.5px] box-border w-0.5 h-[380px] border-r-[1px] border-solid border-grey-15" />
              <Card1
                icon="/icon-4.svg"
                heading="Client-Centric Approach"
                paragraph="We prioritize our clients and their unique needs. We listen to your ideas, challenges, and goals, and tailor our services to meet your specific requirements. Your success is our success."
                propLeft="798.5px"
                propOverflow="hidden"
                propMinWidth="215px"
              />
              <div className="absolute top-[378px] left-[0px] box-border w-[1597px] h-0.5 border-t-[1px] border-solid border-grey-15" />
            </div>
            <div className="w-[1597px] flex flex-row items-start justify-start mt-[-2px]">
              <Card
                icon="/icon-5.svg"
                heading="Results-Driven Solutions"
                paragraph="Our primary focus is on delivering results. We combine creativity and technical expertise to create digital products that drive business growth, enhance user experiences, and provide a competitive advantage."
              />
              <div className="h-[380px] w-0.5 relative box-border ml-[-1px] border-r-[1px] border-solid border-grey-15" />
              <Card
                icon="/icon-6.svg"
                heading="Collaborative Partnership"
                paragraph="We value long-term relationships with our clients. We see ourselves as your digital partner, providing ongoing support, maintenance, and updates to ensure your digital products continue to thrive."
                propMarginLeft="-1px"
                propOverflow="hidden"
                propMargin="unset"
                propMinWidth="225px"
              />
            </div>
          </div>
        </div>
        <div className="self-stretch box-border flex flex-col items-start justify-start relative max-w-full shrink-0 border-[1px] border-solid border-grey-15">
          <div className="self-stretch flex flex-col items-center justify-start py-[120px] px-5 box-border gap-[10px] bg-[url('/public/text-container2@3x.png')] bg-cover bg-no-repeat bg-[top] max-w-full">
            <h1 className="m-0 w-[896px] relative text-inherit font-semibold font-inherit inline-block max-w-full mq450:text-10xl mq1050:text-19xl">
              Frequently Asked Questions
            </h1>
            <div className="w-[896px] relative text-lg tracking-[-0.01em] leading-[150%] text-grey-90 inline-block max-w-full">
              Still you have any questions? Contact our Team via
              hello@squareup.com
            </div>
          </div>
          <div className="self-stretch h-[755px] relative box-border max-w-full text-9xl text-blue border-t-[1px] border-solid border-grey-15 mq750:h-auto mq750:min-h-[755]">
            <div className="absolute top-[80px] left-[0px] w-[798px] h-[475px] max-w-full mq750:h-auto mq750:min-h-[475]">
              <div className="absolute top-[0px] left-[0px] box-border w-[798px] h-px border-t-[1px] border-solid border-grey-15" />
              <FaqItemContainer />
              <div className="absolute top-[224px] left-[0px] w-full flex flex-col items-start justify-start gap-[29.7px] max-w-full text-absolute-white">
                <FrameComponent1
                  number="02"
                  heading="Is 100 Studios a Outsourcing Company?"
                />
                <div className="self-stretch h-px relative box-border border-t-[1px] border-solid border-grey-15" />
                <FrameComponent1
                  number="03"
                  heading="What does 100 Studios do?"
                  propPadding="23.5px 0px 0px"
                />
                <div className="self-stretch h-px relative">
                  <div className="absolute top-[0px] left-[0px] box-border w-full h-full border-t-[1px] border-solid border-grey-15" />
                  <div className="absolute top-[0px] left-[0px] box-border w-full h-full z-[1] border-t-[1px] border-solid border-grey-15" />
                </div>
              </div>
            </div>
            <div className="absolute top-[0px] left-[798px] box-border w-px h-[755px] z-[2] border-r-[1px] border-solid border-grey-15" />
            <div className="absolute top-[80px] left-[798px] w-[798px] flex flex-col items-start justify-start gap-[29.5px] max-w-full">
              <div className="self-stretch h-px relative box-border z-[3] border-t-[1px] border-solid border-grey-15" />
              <FrameComponent1
                number="04"
                heading="Do you offer ongoing support and maintenance after the project is completed?"
                propPadding="7px 0px 0px"
              />
              <div className="self-stretch h-px relative box-border z-[3] border-t-[1px] border-solid border-grey-15" />
              <FrameComponent1
                number="05"
                heading="What projects has 100 Studios built?"
                propPadding="23.5px 0px 0px"
              />
              <div className="self-stretch flex flex-col items-start justify-start">
                <div className="self-stretch h-px relative box-border z-[3] border-t-[1px] border-solid border-grey-15" />
                <div className="self-stretch h-px relative mt-[-1px]">
                  <div className="absolute top-[0px] left-[0px] box-border w-full h-full z-[4] border-t-[1px] border-solid border-grey-15" />
                  <div className="absolute top-[0px] left-[0px] box-border w-full h-full z-[5] border-t-[1px] border-solid border-grey-15" />
                </div>
              </div>
            </div>
          </div>
          <img
            className="w-[524.9px] h-[500px] absolute !m-[0] bottom-[-328px] left-[325px] object-cover z-[1]"
            alt=""
            src="/hunderd--text--1@2x.png"
          />
          <img
            className="w-[524.9px] h-[500px] absolute !m-[0] right-[210.1px] bottom-[-330px] object-cover z-[1]"
            alt=""
            src="/hunderd--text--1@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
