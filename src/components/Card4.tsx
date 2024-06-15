import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type Card4Type = {
  className?: string;
  number?: string;
  heading?: string;
  paragraph?: string;

  /** Style props */
  propPadding?: CSSProperties["padding"];
  propMinWidth?: CSSProperties["minWidth"];
  propFlex?: CSSProperties["flex"];
};

const Card4: FunctionComponent<Card4Type> = ({
  className = "",
  number,
  heading,
  paragraph,
  propPadding,
  propMinWidth,
  propFlex,
}) => {
  const textContainerStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
      minWidth: propMinWidth,
    };
  }, [propPadding, propMinWidth]);

  const heading1Style: CSSProperties = useMemo(() => {
    return {
      flex: propFlex,
    };
  }, [propFlex]);

  return (
    <div
      className={`flex-1 flex flex-col items-start justify-start py-[100px] px-[50px] box-border gap-[50px] min-w-[518px] max-w-full text-left text-131xl text-lb font-barlow ${className}`}
    >
      <div className="self-stretch flex flex-row items-end justify-start gap-[14px] max-w-full mq750:flex-wrap">
        <div className="h-[105px] w-[165px] relative font-semibold inline-block mq1050:text-41xl mq450:text-18xl">
          {number}
        </div>
        <div
          className="flex-1 box-border flex flex-row items-center justify-start pt-0 pb-[26px] pr-0 pl-2.5 min-w-[337px] max-w-full text-19xl border-b-[1px] border-solid border-grey-15 mq750:min-w-full"
          style={textContainerStyle}
        >
          <h1
            className="m-0 flex-1 relative text-inherit leading-[150%] font-semibold font-inherit inline-block max-w-full mq1050:text-11xl mq1050:leading-[46px] mq450:text-4xl mq450:leading-[34px]"
            style={heading1Style}
          >
            {heading}
          </h1>
        </div>
      </div>
      <div className="self-stretch relative text-lg leading-[150%] font-inter text-grey-60">
        {paragraph}
      </div>
    </div>
  );
};

export default Card4;
