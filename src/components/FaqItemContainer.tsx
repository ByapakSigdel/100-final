import { FunctionComponent } from "react";

export type FaqItemContainerType = {
  className?: string;
};

const FaqItemContainer: FunctionComponent<FaqItemContainerType> = ({
  className = "",
}) => {
  return (
    <div
      className={`absolute top-[0px] left-[0px] w-full flex flex-col items-start justify-start max-w-full text-center text-9xl text-blue font-barlow ${className}`}
    >
      <div className="self-stretch flex flex-row flex-wrap items-start justify-start py-[34px] px-[50px] box-border gap-[30px] max-w-full">
        <div className="w-20 rounded-xl [background:linear-gradient(180deg,_#242424,_rgba(36,_36,_36,_0))] box-border flex flex-col items-start justify-start py-5 px-[19px] border-[1px] border-solid border-darkslategray">
          <div className="w-10 relative leading-[150%] font-semibold flex items-center justify-center mq450:text-3xl mq450:leading-[34px]">
            01
          </div>
        </div>
        <div className="flex-1 flex flex-col items-start justify-start pt-6 px-0 pb-0 box-border gap-[20px] min-w-[382px] max-w-full text-left text-3xl mq750:min-w-full">
          <div className="self-stretch flex flex-row items-center justify-center gap-[20px] max-w-full mq750:flex-wrap">
            <div className="flex-1 relative font-medium inline-block min-w-[311px] max-w-full mq450:text-lg">
              What services does 100 Studios provide?
            </div>
            <img
              className="h-[34px] w-[34px] relative overflow-hidden shrink-0"
              alt=""
              src="/icon-7.svg"
            />
          </div>
          <div className="self-stretch relative text-lg tracking-[-0.01em] leading-[24px] text-grey-90">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
        </div>
      </div>
      <div className="self-stretch h-px relative box-border border-t-[1px] border-solid border-grey-15" />
    </div>
  );
};

export default FaqItemContainer;
