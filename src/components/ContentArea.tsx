import { FunctionComponent } from "react";

export type ContentAreaType = {
  className?: string;
};

const ContentArea: FunctionComponent<ContentAreaType> = ({
  className = "",
}) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[22px] box-border max-w-full text-center text-49xl text-absolute-white font-barlow ${className}`}
    >
      <div className="w-[1598px] flex flex-col items-center justify-start pt-28 px-0 pb-0 box-border bg-[url('/public/hero-section@3x.png')] bg-cover bg-no-repeat bg-[top] max-w-full shrink-0 mq750:pt-[73px] mq750:box-border">
        <div className="self-stretch flex flex-col items-center justify-start gap-[50px] max-w-full mq750:gap-[25px]">
          <div className="self-stretch flex flex-col items-center justify-start gap-[40px] max-w-full mq750:gap-[20px]">
            <div className="self-stretch relative font-semibold mq450:text-22xl mq1050:text-35xl">
              100 STUDIOS
            </div>
            <div className="[backdrop-filter:blur(12px)] rounded-xl bg-gray-200 box-border flex flex-row items-center justify-center py-6 px-[39px] gap-[6px] max-w-full text-left text-3xl text-grey-60 border-[1px] border-solid border-grey-15 mq1050:flex-wrap">
              <div className="relative inline-block min-w-[32px] mq450:text-lg">
                For
              </div>
              <button className="cursor-pointer [border:none] py-3 px-3.5 bg-grey-15 rounded-lg flex flex-row items-center justify-center hover:bg-dimgray-100">
                <div className="relative text-3xl font-barlow text-absolute-white text-left inline-block min-w-[65px] mq450:text-lg">
                  Games
                </div>
              </button>
              <div className="relative inline-block min-w-[6px] mq450:text-lg">
                ,
              </div>
              <button className="cursor-pointer [border:none] py-3 px-3.5 bg-grey-15 rounded-lg flex flex-row items-center justify-center whitespace-nowrap hover:bg-dimgray-100">
                <div className="relative text-3xl font-barlow text-absolute-white text-left inline-block min-w-[126px]">
                  Lorem Ipsum
                </div>
              </button>
              <div className="relative inline-block min-w-[6px] mq450:text-lg">
                ,
              </div>
              <button className="cursor-pointer [border:none] py-3 px-3.5 bg-grey-15 rounded-lg flex flex-row items-center justify-center whitespace-nowrap hover:bg-dimgray-100">
                <div className="relative text-3xl font-barlow text-absolute-white text-left">{`Media & Publishers`}</div>
              </button>
              <div className="relative inline-block min-w-[35px] mq450:text-lg">
                and
              </div>
              <button className="cursor-pointer [border:none] py-3 px-3.5 bg-grey-15 rounded-lg flex flex-row items-center justify-center whitespace-nowrap hover:bg-dimgray-100">
                <div className="relative text-3xl font-barlow text-absolute-white text-left inline-block min-w-[113px]">
                  Social Good
                </div>
              </button>
            </div>
          </div>
          <div className="flex flex-row items-start justify-start gap-[13px]">
            <button className="cursor-pointer py-[18px] px-[27px] bg-gray-200 [backdrop-filter:blur(12px)] rounded-3xs flex flex-row items-center justify-center whitespace-nowrap border-[1px] border-solid border-grey-20 hover:bg-dimgray-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-dimgray-100">
              <div className="relative text-lg font-medium font-barlow text-absolute-white text-left inline-block min-w-[81px]">
                Our Works
              </div>
            </button>
            <button className="cursor-pointer [border:none] py-[18px] px-7 bg-blue rounded-3xs flex flex-row items-center justify-center whitespace-nowrap hover:bg-mediumslateblue-100">
              <div className="relative text-lg font-medium font-barlow text-grey-15 text-left inline-block min-w-[87px]">
                Contact Us
              </div>
            </button>
          </div>
        </div>
        <img
          className="self-stretch relative max-w-full overflow-hidden max-h-full z-[1] mt-[-174px]"
          alt=""
          src="/abstract-design.svg"
        />
      </div>
    </div>
  );
};

export default ContentArea;
