import { FunctionComponent } from "react";
import FooterSection2 from "./FooterSection2";

export type ContentRowType = {
  className?: string;
};

const ContentRow: FunctionComponent<ContentRowType> = ({ className = "" }) => {
  return (
    <footer
      className={`self-stretch flex flex-row items-start justify-start relative max-w-full ${className}`}
    >
      <img
        className="h-[500px] w-[524.9px] absolute !m-[0] top-[-368px] left-[-55px] object-cover"
        alt=""
        src="/hunderd--text--1@2x.png"
      />
      <img
        className="h-[500px] w-[524.9px] absolute !m-[0] top-[-366px] left-[487px] object-cover"
        loading="lazy"
        alt=""
        src="/hunderd--text--1@2x.png"
      />
      <img
        className="h-[500px] w-[524.9px] absolute !m-[0] top-[-364px] right-[372.1px] object-cover"
        alt=""
        src="/hunderd--text--1@2x.png"
      />
      <img
        className="h-[500px] w-[524.9px] absolute !m-[0] top-[-358px] right-[-165.9px] object-cover"
        alt=""
        src="/hunderd--text--1@2x.png"
      />
      <FooterSection2 />
    </footer>
  );
};

export default ContentRow;
