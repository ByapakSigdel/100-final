import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type FrameComponent1Type = {
  className?: string;
  number?: string;
  heading?: string;

  /** Style props */
  propPadding?: CSSProperties["padding"];
};

const FrameComponent1: FunctionComponent<FrameComponent1Type> = ({
  className = "",
  number,
  heading,
  propPadding,
}) => {
  const frameDiv2Style: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  return (
    <div
      className={`self-stretch flex flex-row items-start justify-start py-0 px-[50px] box-border max-w-full text-center text-9xl text-absolute-white font-barlow ${className}`}
    >
      <div className="flex-1 flex flex-row flex-wrap items-start justify-start gap-[30px] max-w-full">
        <div className="w-20 rounded-xl [background:linear-gradient(180deg,_#242424,_rgba(36,_36,_36,_0))] box-border flex flex-row items-start justify-start py-5 px-[19px] border-[1px] border-solid border-darkslategray">
          <div className="w-10 relative leading-[150%] font-semibold flex items-center justify-center shrink-0 mq450:text-3xl mq450:leading-[34px]">
            {number}
          </div>
        </div>
        <div
          className="flex-1 flex flex-col items-start justify-start pt-[23.5px] px-0 pb-0 box-border min-w-[341px] max-w-full text-left text-3xl mq750:min-w-full"
          style={frameDiv2Style}
        >
          <div className="self-stretch relative leading-[150%] font-medium mq450:text-lg mq450:leading-[26px]">
            {heading}
          </div>
        </div>
        <div className="flex flex-col items-start justify-start pt-[23px] px-0 pb-0">
          <img
            className="w-[34px] h-[34px] relative overflow-hidden shrink-0"
            alt=""
            src="/icon-8.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default FrameComponent1;
