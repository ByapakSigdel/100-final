import { FunctionComponent } from "react";
import Navbar1 from "../components/Navbar1";
import FrameComponent4 from "../components/FrameComponent4";
import FrameComponent3 from "../components/FrameComponent3";
import FrameComponent2 from "../components/FrameComponent2";
import FooterSection from "../components/FooterSection";

const ServicesPageDesktop: FunctionComponent = () => {
  return (
    <div className="w-full relative bg-grey-10 overflow-hidden flex flex-col items-end justify-start pt-0 px-0 pb-9 box-border leading-[normal] tracking-[normal]">
      <Navbar1 />
      <FrameComponent4 />
      <section className="w-[1909px] flex flex-row items-start justify-center pt-0 px-5 pb-[83px] box-border max-w-full mq1250:pb-[23px] mq1250:box-border mq825:pb-5 mq825:box-border">
        <div className="w-[1607px] flex flex-col items-start justify-start gap-[200px] max-w-full mq1250:gap-[100px] mq450:gap-[25px] mq825:gap-[50px]">
          <FrameComponent3 />
          <FrameComponent2 />
        </div>
      </section>
      <FooterSection />
    </div>
  );
};

export default ServicesPageDesktop;
