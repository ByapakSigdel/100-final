import { FunctionComponent } from "react";
import FooterSection2 from "./FooterSection2";

export type FrameComponent6Type = {
  className?: string;
};

const FrameComponent6: FunctionComponent<FrameComponent6Type> = ({
  className = "",
}) => {
  return (
    <footer
      className={`self-stretch flex flex-row items-start justify-start relative max-w-full text-left text-lg text-grey-90 font-barlow ${className}`}
    >
      <img
        className="h-[500px] w-[524.9px] absolute !m-[0] top-[-406px] right-[-111.9px] object-cover z-[3]"
        alt=""
        src="/hunderd--text--1@2x.png"
      />
      <FooterSection2 />
    </footer>
  );
};

export default FrameComponent6;
