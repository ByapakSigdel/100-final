import { FunctionComponent } from "react";
import FooterMainBlock from "./FooterMainBlock";

export type FooterSection1Type = {
  className?: string;
};

const FooterSection1: FunctionComponent<FooterSection1Type> = ({
  className = "",
}) => {
  return (
    <footer
      className={`self-stretch box-border flex flex-col items-center justify-start py-[50px] px-5 relative max-w-full text-left text-lg text-grey-90 font-barlow border-t-[1px] border-solid border-grey-15 ${className}`}
    >
      <FooterMainBlock />
      <div className="w-[1596px] flex flex-row items-center justify-between max-w-full gap-[20px] mt-[-1px] mq1050:flex-wrap">
        <div className="flex flex-row items-start justify-start gap-[30px] max-w-full mq750:flex-wrap">
          <div className="flex flex-row items-center justify-start pt-0 px-0 pb-4 gap-[10px] border-b-[1px] border-solid border-grey-15">
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0"
              alt=""
              src="/icon-15.svg"
            />
            <div className="relative leading-[150%] whitespace-nowrap">
              hello@100studios.com
            </div>
          </div>
          <div className="flex flex-row items-center justify-start pt-0 px-0 pb-4 gap-[10px] border-b-[1px] border-solid border-grey-15">
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0"
              alt=""
              src="/icon-16.svg"
            />
            <div className="relative leading-[150%] whitespace-nowrap">
              +91 91813 23 2309
            </div>
          </div>
          <div className="flex flex-row items-center justify-start pt-0 px-0 pb-4 gap-[10px] border-b-[1px] border-solid border-grey-15">
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0"
              alt=""
              src="/icon-17.svg"
            />
            <div className="relative leading-[150%]">
              Somewhere in the World
            </div>
          </div>
        </div>
        <div className="relative leading-[150%] text-grey-60">
          © 2023 100 Studios. All rights reserved.
        </div>
      </div>
      <img
        className="w-[524.9px] h-[500px] absolute !m-[0] top-[-378px] left-[-117px] object-cover z-[1]"
        alt=""
        src="/hunderd--text--1@2x.png"
      />
      <img
        className="w-[524.9px] h-[500px] absolute !m-[0] top-[-368px] right-[-103.9px] object-cover z-[1]"
        alt=""
        src="/hunderd--text--1@2x.png"
      />
    </footer>
  );
};

export default FooterSection1;
