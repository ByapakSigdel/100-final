import { FunctionComponent, useMemo, type CSSProperties } from "react";
import ImageIcon from "./ImageIcon";

export type Card3Type = {
  className?: string;
  headingPlaceholder?: string;
  image?: string;
  heading?: string;
  text?: string;
  paragraph?: string;

  /** Style props */
  propBorderRadius?: CSSProperties["borderRadius"];
  propWidth?: CSSProperties["width"];
  propAlignSelf?: CSSProperties["alignSelf"];
  propWidth1?: CSSProperties["width"];
  propDisplay?: CSSProperties["display"];
};

const Card3: FunctionComponent<Card3Type> = ({
  className = "",
  headingPlaceholder,
  image,
  heading,
  text,
  paragraph,
  propBorderRadius,
  propWidth,
  propAlignSelf,
  propWidth1,
  propDisplay,
}) => {
  const imageIconStyle: CSSProperties = useMemo(() => {
    return {
      borderRadius: propBorderRadius,
    };
  }, [propBorderRadius]);

  const containerStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const headingStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      width: propWidth1,
      display: propDisplay,
    };
  }, [propAlignSelf, propWidth1, propDisplay]);

  return (
    <div
      className={`flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-[100px] box-border gap-[30px] min-w-[519px] max-w-full text-left text-5xl text-grey-90 font-barlow mq450:pb-[42px] mq450:box-border mq750:min-w-full mq1050:pb-[65px] mq1050:box-border ${className}`}
    >
      <div className="self-stretch box-border flex flex-row items-center justify-center py-[30px] px-[50px] max-w-full border-t-[1px] border-solid border-grey-15 border-b-[1px] mq1050:pl-[25px] mq1050:pr-[25px] mq1050:box-border">
        <input
          className="w-full [border:none] [outline:none] font-medium font-barlow text-7xl bg-[transparent] h-[31px] flex-1 relative text-grey-60 text-left inline-block min-w-[250px] max-w-full p-0 mq450:text-2xl"
          placeholder={headingPlaceholder}
          type="text"
        />
      </div>
      <div className="self-stretch flex flex-col items-start justify-start py-0 px-[50px] gap-[30px] mq450:gap-[15px] mq1050:pl-[25px] mq1050:pr-[25px] mq1050:box-border">
        <ImageIcon />
        <div className="self-stretch flex flex-row items-center justify-between gap-[20px] mq450:flex-wrap">
          <div
            className="w-[298.8px] flex flex-col items-start justify-start gap-[10px]"
            style={containerStyle}
          >
            <div
              className="self-stretch relative tracking-[-0.01em] leading-[150%] font-medium mq450:text-lgi mq450:leading-[29px]"
              style={headingStyle}
            >
              {heading}
            </div>
            <button className="cursor-pointer [border:none] py-2.5 px-3.5 bg-grey-15 rounded-lg flex flex-row items-center justify-center hover:bg-dimgray-100">
              <div className="relative text-xl tracking-[-0.01em] leading-[150%] font-barlow text-grey-60 text-left mq450:text-base mq450:leading-[24px]">
                {text}
              </div>
            </button>
          </div>
          <button className="cursor-pointer [border:none] p-2.5 bg-grey-15 rounded-lg flex flex-row items-start justify-start">
            <img
              className="h-[34px] w-[34px] relative overflow-hidden shrink-0"
              alt=""
              src="/icon2.svg"
            />
          </button>
        </div>
        <div className="self-stretch relative text-lg leading-[150%] font-inter text-grey-60">
          {paragraph}
        </div>
      </div>
    </div>
  );
};

export default Card3;
