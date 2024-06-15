import { FunctionComponent } from "react";
import Navbar from "../components/Navbar";

const Frame: FunctionComponent = () => {
  return (
    <div className="w-full h-[1776px] relative bg-gray-100 overflow-hidden flex flex-row items-start justify-start pt-[194px] px-[185px] pb-[1482px] box-border leading-[normal] tracking-[normal] lg:pl-[92px] lg:pr-[92px] lg:box-border mq450:pl-5 mq450:pr-5 mq450:box-border mq750:pl-[46px] mq750:pr-[46px] mq750:box-border">
      <Navbar />
    </div>
  );
};

export default Frame;
