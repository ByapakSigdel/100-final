import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type FrameComponent5Type = {
  className?: string;
  icon?: string;
  text?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
  propAlignSelf?: CSSProperties["alignSelf"];
  propOverflow?: CSSProperties["overflow"];
  propAlignSelf1?: CSSProperties["alignSelf"];
};

const FrameComponent5: FunctionComponent<FrameComponent5Type> = ({
  className = "",
  icon,
  text,
  propWidth,
  propAlignSelf,
  propOverflow,
  propAlignSelf1,
}) => {
  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const frameDiv1Style: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
    };
  }, [propAlignSelf]);

  const iconStyle: CSSProperties = useMemo(() => {
    return {
      overflow: propOverflow,
    };
  }, [propOverflow]);

  const textStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf1,
    };
  }, [propAlignSelf1]);

  return (
    <div
      className={`w-[299px] flex flex-col items-start justify-start pt-[50px] px-0 pb-0 box-border text-left text-xl text-grey-90 font-barlow ${className}`}
      style={frameDivStyle}
    >
      <div
        className="self-stretch flex flex-col items-start justify-start gap-[30px]"
        style={frameDiv1Style}
      >
        <div className="w-[88px] rounded-xl [background:linear-gradient(130.97deg,_rgba(158,_255,_0,_0.2)_22.41%,_rgba(158,_255,_0,_0)_70.78%)] box-border flex flex-col items-start justify-start py-6 px-[23px] border-[1px] border-solid border-grey-15">
          <img
            className="w-10 h-10 relative overflow-hidden shrink-0"
            loading="lazy"
            alt=""
            src={icon}
            style={iconStyle}
          />
        </div>
        <div
          className="self-stretch relative tracking-[-0.01em] leading-[150%] font-medium mq450:text-base mq450:leading-[24px]"
          style={textStyle}
        >
          {text}
        </div>
      </div>
    </div>
  );
};

export default FrameComponent5;
