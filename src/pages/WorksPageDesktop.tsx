import { FunctionComponent } from "react";
import Navbar2 from "../components/Navbar2";
import Card3 from "../components/Card3";
import FooterSection1 from "../components/FooterSection1";

const WorksPageDesktop: FunctionComponent = () => {
  return (
    <div className="w-full relative bg-grey-10 overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-[11px] box-border leading-[normal] tracking-[normal]">
      <Navbar2 />
      <main className="self-stretch flex flex-row items-start justify-center pt-0 px-5 pb-56 box-border max-w-full lg:pb-[95px] lg:box-border mq450:pb-10 mq450:box-border mq1050:pb-[62px] mq1050:box-border">
        <section className="w-[1596px] flex flex-col items-start justify-start gap-[1px] max-w-full text-center text-29xl text-absolute-white font-barlow">
          <div className="self-stretch flex flex-col items-center justify-start py-[120px] px-5 box-border gap-[14px] bg-[url('/public/text-container4@3x.png')] bg-cover bg-no-repeat bg-[top] max-w-full shrink-0 mq450:pt-[78px] mq450:pb-[78px] mq450:box-border">
            <h1 className="m-0 w-[996px] relative text-inherit font-semibold font-inherit inline-block max-w-full mq450:text-10xl mq1050:text-19xl">
              Our Works
            </h1>
            <div className="w-[996px] relative text-xl tracking-[-0.01em] leading-[150%] text-grey-90 inline-block max-w-full mq450:text-base mq450:leading-[24px]">
              Discover a portfolio of visually stunning and strategically
              crafted digital projects that showcase our creativity and
              expertise.
            </div>
          </div>
          <form className="m-0 self-stretch box-border flex flex-col items-start justify-start pt-[120px] px-0 pb-0 relative gap-[50px] max-w-full shrink-0 border-[1px] border-solid border-grey-15 lg:pt-[51px] lg:box-border mq450:pt-[21px] mq450:box-border mq750:gap-[25px] mq1050:pt-[33px] mq1050:box-border">
            <div className="w-[1296px] flex flex-row items-start justify-start py-0 px-[50px] box-border max-w-full lg:pl-[25px] lg:pr-[25px] lg:box-border">
              <div className="flex-1 flex flex-col items-start justify-start gap-[14px] max-w-full">
                <div className="self-stretch relative text-29xl font-semibold font-barlow text-absolute-white text-left mq450:text-10xl mq1050:text-19xl">
                  At 100 Studios
                </div>
                <div className="self-stretch relative text-lg tracking-[-0.01em] leading-[150%] font-barlow text-grey-90 text-left">
                  We have had the privilege of working with a diverse range of
                  projects and delivering exceptional digital products that
                  drive success.
                </div>
              </div>
            </div>
            <div className="flex flex-row items-start justify-start py-0 px-[50px] box-border max-w-full mq750:pl-[25px] mq750:pr-[25px] mq750:box-border">
              <button className="cursor-pointer [border:none] py-3 px-3.5 bg-grey-15 rounded-lg flex flex-row items-start justify-start box-border whitespace-nowrap max-w-full hover:bg-dimgray-100">
                <div className="relative text-3xl font-barlow text-absolute-white text-left">
                  Here are some examples of our notable works:
                </div>
              </button>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start max-w-full">
              <div className="self-stretch flex flex-row flex-wrap items-start justify-start max-w-full [row-gap:20px]">
                <Card3
                  headingPlaceholder="Website Word Game"
                  image="/image@2x.png"
                  heading="Chic Boutique"
                  text="htttps:/www.chicboutique.com"
                  paragraph="We developed a visually stunning and user-friendly e-commerce platform for Chic Boutique, a renowned fashion retailer. The platform featured seamless product browsing, secure payment integration, and personalized recommendations, resulting in increased online sales and customer satisfaction."
                />
                <div className="h-[908px] w-0 relative box-border border-r-[1px] border-solid border-grey-15 lg:w-[100px] lg:h-0 lg:box-border lg:border-t-[1px] lg:border-solid lg:border-grey-15" />
                <Card3
                  headingPlaceholder="Mobile Game"
                  image="/image-1@2x.png"
                  heading="HungryBites"
                  text="htttps:/www.hungrybites.com"
                  paragraph="HungryBites approached us to create a mobile app that streamlined their food delivery service. The app included features like real-time order tracking, easy menu customization, and secure payment options, resulting in improved customer convenience and operational efficiency."
                  propBorderRadius="115px"
                  propWidth="298.8px"
                  propAlignSelf="stretch"
                  propWidth1="unset"
                  propDisplay="unset"
                />
              </div>
              <div className="self-stretch flex flex-row flex-wrap items-start justify-start [row-gap:20px] max-w-full">
                <Card3
                  headingPlaceholder="Portfolio Websites"
                  image="/image@2x.png"
                  heading="EventMasters"
                  text="htttps:/www.eventmasters.com"
                  paragraph="EventMasters required a comprehensive booking and reservation system for their event management services. We designed a user-friendly platform that allowed seamless event registration, ticketing, and attendee management, resulting in streamlined processes and enhanced customer experiences."
                  propBorderRadius="unset"
                  propWidth="302px"
                  propAlignSelf="stretch"
                  propWidth1="unset"
                  propDisplay="unset"
                />
                <div className="h-[908px] w-0 relative box-border border-r-[1px] border-solid border-grey-15 lg:w-[100px] lg:h-0 lg:box-border lg:border-t-[1px] lg:border-solid lg:border-grey-15" />
                <div className="flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-[100px] box-border gap-[30px] min-w-[519px] max-w-full mq450:pb-[42px] mq450:box-border mq750:min-w-full mq1050:pb-[65px] mq1050:box-border">
                  <div className="self-stretch box-border flex flex-row items-center justify-center py-[30px] px-[50px] max-w-full border-t-[1px] border-solid border-grey-15 border-b-[1px] mq1050:pl-[25px] mq1050:pr-[25px] mq1050:box-border">
                    <input
                      className="w-full [border:none] [outline:none] font-medium font-barlow text-7xl bg-[transparent] h-[31px] flex-1 relative text-grey-60 text-left inline-block min-w-[250px] max-w-full p-0 mq450:text-2xl"
                      placeholder="Cross Platform Apps"
                      type="text"
                    />
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start py-0 px-[50px] box-border gap-[30px] max-w-full mq450:gap-[15px] mq1050:pl-[25px] mq1050:pr-[25px] mq1050:box-border">
                    <img
                      className="self-stretch h-[423px] relative rounded-96xl max-w-full overflow-hidden shrink-0 object-cover"
                      alt=""
                      src="/image-1@2x.png"
                    />
                    <div className="self-stretch flex flex-row items-center justify-between max-w-full gap-[20px] mq750:flex-wrap">
                      <div className="flex flex-col items-start justify-start gap-[10px] max-w-full">
                        <div className="w-[298.8px] relative text-5xl tracking-[-0.01em] leading-[150%] font-barlow text-grey-90 text-left inline-block mq450:text-lgi mq450:leading-[29px]">
                          ProTech Solutions
                        </div>
                        <button className="cursor-pointer [border:none] py-2.5 px-3.5 bg-grey-15 rounded-lg flex flex-row items-center justify-center hover:bg-dimgray-100">
                          <div className="relative text-xl tracking-[-0.01em] leading-[150%] font-barlow text-grey-60 text-left mq450:text-base mq450:leading-[24px]">
                            htttps:/www.protechsolutions.com
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
                    <div className="self-stretch relative text-lg leading-[150%] font-inter text-grey-60 text-left">
                      HungryBites approached us to create a mobile app that
                      streamlined their food delivery service. The app included
                      features like real-time order tracking, easy menu
                      customization, and secure payment options, resulting in
                      improved customer convenience and operational efficiency.
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row flex-wrap items-start justify-start [row-gap:20px] max-w-full">
                <Card3
                  headingPlaceholder="Web Portal for Real Estate Listings"
                  image="/image-1@2x.png"
                  heading="Dream Homes Realty"
                  text="htttps:/www.dreamhomesrealty.com"
                  paragraph="Dream Homes Realty wanted an intuitive web portal for showcasing their property listings. We created a visually appealing platform with advanced search filters, virtual tours, and a user-friendly interface, enabling potential buyers to find their dream homes easily."
                  propBorderRadius="115px"
                  propWidth="unset"
                  propAlignSelf="unset"
                  propWidth1="298.8px"
                  propDisplay="inline-block"
                />
                <div className="h-[908px] w-0 relative box-border border-r-[1px] border-solid border-grey-15 lg:w-[100px] lg:h-0 lg:box-border lg:border-t-[1px] lg:border-solid lg:border-grey-15" />
                <Card3
                  headingPlaceholder="Mobile App for Fitness Tracking"
                  image="/image@2x.png"
                  heading="FitLife Tracker"
                  text="htttps:/www.fitlifetracker.com"
                  paragraph="FitLife Tracker approached us to develop a mobile app that tracked fitness activities and provided personalized workout plans. The app included features such as activity tracking, progress monitoring, and social sharing, empowering users to lead healthier lifestyles."
                  propBorderRadius="115px"
                  propWidth="298.8px"
                  propAlignSelf="stretch"
                  propWidth1="unset"
                  propDisplay="unset"
                />
              </div>
            </div>
            <img
              className="w-[524.9px] h-[500px] absolute !m-[0] bottom-[-348px] left-[263px] object-cover z-[1]"
              loading="lazy"
              alt=""
              src="/hunderd--text--1@2x.png"
            />
            <img
              className="w-[524.9px] h-[500px] absolute !m-[0] right-[272.1px] bottom-[-350px] object-cover z-[1]"
              loading="lazy"
              alt=""
              src="/hunderd--text--1@2x.png"
            />
          </form>
        </section>
      </main>
      <FooterSection1 />
    </div>
  );
};

export default WorksPageDesktop;
