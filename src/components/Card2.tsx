import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type Card2Type = {
  className?: string;
  icon?: string;
  heading?: string;

  /** Style props */
  propMinHeight?: CSSProperties["minHeight"];
  propGap?: CSSProperties["gap"];
  propOverflow?: CSSProperties["overflow"];
};

const Card2: FunctionComponent<Card2Type> = ({
  className = "",
  icon,
  heading,
  propMinHeight,
  propGap,
  propOverflow,
}) => {
  const cardStyle: CSSProperties = useMemo(() => {
    return {
      minHeight: propMinHeight,
      gap: propGap,
    };
  }, [propMinHeight, propGap]);

  const icon1Style: CSSProperties = useMemo(() => {
    return {
      overflow: propOverflow,
    };
  }, [propOverflow]);

  return (
    <div
      className={`w-[532px] shrink-0 flex flex-col items-start justify-between p-[50px] box-border min-h-[601px] ml-[-0.2px] text-left text-11xl text-absolute-white font-barlow mq750:pb-8 mq750:box-border ${className}`}
      style={cardStyle}
    >
      <div className="self-stretch flex flex-col items-start justify-start gap-[40px]">
        <button className="cursor-pointer py-6 px-[23px] bg-[transparent] w-[88px] rounded-3xs [background:linear-gradient(229.29deg,_rgba(158,_255,_0,_0.2)_22.41%,_rgba(158,_255,_0,_0)_68.71%),_linear-gradient(180deg,_#242424,_rgba(36,_36,_36,_0))] box-border flex flex-col items-start justify-start border-[1px] border-solid border-darkslategray">
          <img
            className="w-10 h-10 relative overflow-hidden shrink-0"
            alt=""
            src={icon}
            style={icon1Style}
          />
        </button>
        <div className="self-stretch flex flex-col items-start justify-start gap-[20px]">
          <h2 className="m-0 self-stretch relative text-inherit tracking-[-0.01em] leading-[150%] font-semibold font-inherit mq450:text-lg mq450:leading-[27px] mq1050:text-5xl mq1050:leading-[36px]">
            {heading}
          </h2>
          <div className="self-stretch relative text-lg tracking-[-0.01em] leading-[24px] text-grey-90">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. `}</div>
        </div>
      </div>
      <button className="cursor-pointer [border:none] py-[18px] px-5 bg-grey-15 self-stretch rounded-lg flex flex-row items-center justify-center whitespace-nowrap hover:bg-dimgray-100">
        <div className="relative text-lg tracking-[-0.01em] leading-[24px] font-medium font-barlow text-absolute-white text-left inline-block min-w-[88px]">
          Learn More
        </div>
      </button>
    </div>
  );
};

export default Card2;
