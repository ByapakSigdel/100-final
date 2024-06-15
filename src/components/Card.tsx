import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type CardType = {
  className?: string;
  icon?: string;
  heading?: string;
  paragraph?: string;

  /** Style props */
  propMarginLeft?: CSSProperties["marginLeft"];
  propOverflow?: CSSProperties["overflow"];
  propMargin?: CSSProperties["margin"];
  propMinWidth?: CSSProperties["minWidth"];
};

const Card: FunctionComponent<CardType> = ({
  className = "",
  icon,
  heading,
  paragraph,
  propMarginLeft,
  propOverflow,
  propMargin,
  propMinWidth,
}) => {
  const card2Style: CSSProperties = useMemo(() => {
    return {
      marginLeft: propMarginLeft,
    };
  }, [propMarginLeft]);

  const icon3Style: CSSProperties = useMemo(() => {
    return {
      overflow: propOverflow,
    };
  }, [propOverflow]);

  const heading3Style: CSSProperties = useMemo(() => {
    return {
      margin: propMargin,
      minWidth: propMinWidth,
    };
  }, [propMargin, propMinWidth]);

  return (
    <div
      className={`flex-1 flex flex-col items-start justify-start p-20 box-border gap-[40px] max-w-full shrink-0 text-left text-7xl text-absolute-white font-barlow mq450:pt-[22px] mq450:pb-[52px] mq450:box-border ${className}`}
      style={card2Style}
    >
      <div className="self-stretch flex flex-row flex-wrap items-center justify-start gap-[20px] max-w-full">
        <div className="w-[88px] rounded-3xs [background:linear-gradient(229.29deg,_rgba(158,_255,_0,_0.2)_22.41%,_rgba(158,_255,_0,_0)_68.71%),_linear-gradient(180deg,_#242424,_rgba(36,_36,_36,_0))] box-border overflow-hidden shrink-0 flex flex-col items-start justify-start py-6 px-[23px] border-[1px] border-solid border-darkslategray">
          <img
            className="w-10 h-10 relative"
            alt=""
            src={icon}
            style={icon3Style}
          />
        </div>
        <h3
          className="m-0 flex-1 relative text-inherit tracking-[-0.01em] leading-[150%] font-medium font-inherit inline-block min-w-[219px] max-w-full mq450:text-2xl mq450:leading-[31px]"
          style={heading3Style}
        >
          {heading}
        </h3>
      </div>
      <div className="self-stretch relative text-xl tracking-[-0.01em] leading-[150%] text-grey-90 mq450:text-base mq450:leading-[24px]">
        {paragraph}
      </div>
    </div>
  );
};

export default Card;
