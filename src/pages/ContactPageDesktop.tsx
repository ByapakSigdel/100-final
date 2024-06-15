import { FunctionComponent } from "react";
import Navbar4 from "../components/Navbar4";
import InputField from "../components/InputField";
import FaqItemContainer from "../components/FaqItemContainer";
import FrameComponent1 from "../components/FrameComponent1";
import ContentRow from "../components/ContentRow";

const ContactPageDesktop: FunctionComponent = () => {
  return (
    <div className="w-full relative bg-grey-10 overflow-hidden flex flex-col items-start justify-start gap-[235px] leading-[normal] tracking-[normal] mq825:gap-[59px] mq1250:gap-[117px]">
      <main className="self-stretch flex flex-col items-end justify-start max-w-full">
        <Navbar4 />
        <section className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[21px] box-border max-w-full text-center text-29xl text-absolute-white font-barlow">
          <div className="w-[1597px] flex flex-col items-start justify-start gap-[71px] max-w-full mq825:gap-[35px] mq450:gap-[18px]">
            <div className="self-stretch flex flex-col items-start justify-start max-w-full shrink-0">
              <div className="self-stretch flex flex-col items-center justify-start py-[120px] px-5 box-border gap-[14px] bg-[url('/public/text-container6@3x.png')] bg-cover bg-no-repeat bg-[top] max-w-full shrink-0">
                <h1 className="m-0 w-[996px] relative text-inherit font-semibold font-inherit inline-block max-w-full mq825:text-19xl mq450:text-10xl">
                  Contact Us
                </h1>
                <div className="w-[996px] relative text-lg tracking-[-0.01em] leading-[24px] text-grey-90 inline-block max-w-full">
                  Get in touch with us today and let us help you with any
                  questions or inquiries you may have.
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-px box-border max-w-full shrink-0 text-left text-3xl text-grey-90">
                <div className="flex-1 box-border flex flex-col items-start justify-start max-w-full border-[1px] border-solid border-grey-15">
                  <div className="self-stretch flex flex-row flex-wrap items-start justify-start py-[50px] px-[401px] gap-[30px] shrink-0 text-xl mq825:gap-[15px] mq825:pl-[100px] mq825:pr-[100px] mq825:box-border mq450:pl-5 mq450:pr-5 mq450:box-border mq1250:pl-[200px] mq1250:pr-[200px] mq1250:box-border">
                    <div className="flex-1 rounded-lg bg-grey-15 flex flex-row items-start justify-start py-[18px] px-6 box-border gap-[14px] min-w-[188px]">
                      <img
                        className="h-[30px] w-[30px] relative overflow-hidden shrink-0 min-h-[30px]"
                        alt=""
                        src="/icon.svg"
                      />
                      <div className="relative leading-[150%] font-medium whitespace-nowrap mq450:text-base mq450:leading-[24px]">
                        hello@100studios.com
                      </div>
                    </div>
                    <button className="cursor-pointer [border:none] py-[18px] px-6 bg-grey-15 rounded-lg flex flex-row items-start justify-start gap-[14px] whitespace-nowrap hover:bg-dimgray-100">
                      <img
                        className="h-[30px] w-[30px] relative overflow-hidden shrink-0 min-h-[30px]"
                        alt=""
                        src="/icon-110.svg"
                      />
                      <div className="relative text-xl leading-[150%] font-medium font-barlow text-grey-90 text-left">
                        +91 91813 23 2309
                      </div>
                    </button>
                    <button className="cursor-pointer [border:none] py-[18px] px-6 bg-grey-15 rounded-lg flex flex-row items-start justify-start gap-[14px] whitespace-nowrap hover:bg-dimgray-100">
                      <img
                        className="h-[30px] w-[30px] relative overflow-hidden shrink-0 min-h-[30px]"
                        alt=""
                        src="/icon-210.svg"
                      />
                      <div className="relative text-xl leading-[150%] font-medium font-barlow text-grey-90 text-left inline-block min-w-[112px]">
                        Get Location
                      </div>
                    </button>
                  </div>
                  <div className="self-stretch box-border flex flex-row items-start justify-center py-0 px-5 max-w-full shrink-0 text-absolute-white border-t-[1px] border-solid border-grey-15">
                    <div className="w-[1060px] box-border flex flex-col items-start justify-start py-20 px-[79px] gap-[40px] max-w-full border-[1px] border-solid border-grey-15 mq825:gap-[20px] mq450:pt-[34px] mq450:pb-[34px] mq450:box-border mq1250:py-[52px] mq1250:px-[39px] mq1250:box-border">
                      <div className="self-stretch flex flex-row items-start justify-start gap-[40px] max-w-full mq450:gap-[20px] mq1250:flex-wrap">
                        <InputField text="Full Name" />
                        <InputField text="Email" />
                      </div>
                      <div className="self-stretch rounded-xl bg-gray-300 box-border flex flex-col items-start justify-start py-10 px-[39px] gap-[40px] max-w-full border-[1px] border-solid border-grey-15 mq450:gap-[20px]">
                        <div className="self-stretch relative leading-[150%] font-medium mq450:text-lg mq450:leading-[26px]">
                          Why are you contacting us?
                        </div>
                        <div className="self-stretch flex flex-col items-start justify-start gap-[24px] max-w-full text-lg text-green-99">
                          <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[20px] max-w-full">
                            <div className="flex-1 flex flex-row items-center justify-start gap-[10px] min-w-[260px] max-w-full mq825:flex-wrap">
                              <input
                                className="m-0 h-7 w-7 rounded box-border border-[1px] border-solid border-grey-20"
                                type="checkbox"
                              />
                              <div className="flex-1 relative leading-[150%] inline-block min-w-[71px] max-w-full">
                                Web Design
                              </div>
                            </div>
                            <div className="flex-1 flex flex-row items-center justify-start gap-[10px] min-w-[260px] max-w-full mq825:flex-wrap">
                              <div className="h-7 w-7 rounded bg-grey-15 box-border flex flex-row items-center justify-start p-1 border-[1px] border-solid border-grey-20">
                                <img
                                  className="h-5 w-5 relative rounded overflow-hidden shrink-0 hidden"
                                  alt=""
                                  src="/icon1.svg"
                                />
                              </div>
                              <div className="flex-1 relative leading-[150%] inline-block min-w-[81px] max-w-full">
                                Collaboration
                              </div>
                            </div>
                          </div>
                          <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[20px] max-w-full">
                            <div className="flex-1 flex flex-row items-center justify-start gap-[10px] min-w-[260px] max-w-full mq825:flex-wrap">
                              <div className="h-7 w-7 rounded bg-grey-15 box-border flex flex-row items-center justify-start p-1 border-[1px] border-solid border-grey-20">
                                <img
                                  className="h-5 w-5 relative rounded overflow-hidden shrink-0 hidden"
                                  alt=""
                                  src="/icon1.svg"
                                />
                              </div>
                              <div className="flex-1 relative leading-[150%] inline-block min-w-[111px] max-w-full">
                                Mobile App Design
                              </div>
                            </div>
                            <div className="flex-1 flex flex-row items-center justify-start gap-[10px] min-w-[260px] max-w-full mq825:flex-wrap">
                              <div className="h-7 w-7 rounded bg-grey-15 box-border flex flex-row items-center justify-start p-1 border-[1px] border-solid border-grey-20">
                                <img
                                  className="h-5 w-5 relative rounded overflow-hidden shrink-0 hidden"
                                  alt=""
                                  src="/icon1.svg"
                                />
                              </div>
                              <div className="flex-1 relative leading-[150%] inline-block min-w-[40px] max-w-full">
                                Others
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="self-stretch rounded-lg bg-gray-300 flex flex-col items-start justify-start pt-6 px-[39px] pb-[23px] gap-[39px] border-[1px] border-solid border-grey-15 mq450:gap-[19px]">
                        <div className="self-stretch flex flex-col items-start justify-start gap-[20px]">
                          <div className="self-stretch relative leading-[150%] font-medium mq450:text-lg mq450:leading-[26px]">
                            Your Message
                          </div>
                          <div className="self-stretch flex flex-col items-start justify-start gap-[6px]">
                            <input
                              className="w-[77px] [border:none] [outline:none] font-barlow text-lg bg-[transparent] h-[27px] relative leading-[150%] text-grey-40 text-left inline-block p-0"
                              placeholder="Type here"
                              type="text"
                            />
                            <div className="self-stretch h-px relative box-border border-t-[1px] border-solid border-grey-20" />
                          </div>
                        </div>
                        <div className="self-stretch h-px relative box-border border-t-[1px] border-solid border-grey-20" />
                      </div>
                      <div className="self-stretch flex flex-row items-start justify-center">
                        <button className="cursor-pointer [border:none] py-[18px] px-11 bg-blue rounded-lg flex flex-row items-start justify-start hover:bg-mediumslateblue-100">
                          <div className="relative text-lg leading-[150%] font-medium font-barlow text-grey-10 text-left inline-block min-w-[57px]">
                            Submit
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch box-border flex flex-row items-start justify-center py-0 px-[341px] gap-[79.5px] max-w-full shrink-0 border-t-[1px] border-solid border-grey-15 mq825:gap-[40px] mq825:pl-[85px] mq825:pr-[85px] mq825:box-border mq450:gap-[20px] mq450:pl-5 mq450:pr-5 mq450:box-border mq1250:pl-[170px] mq1250:pr-[170px] mq1250:box-border mq1575:flex-wrap">
                    <div className="flex flex-col items-start justify-start pt-[50px] px-0 pb-0 box-border max-w-full">
                      <div className="flex flex-row items-start justify-start gap-[14px] mq825:flex-wrap">
                        <div className="flex flex-col items-start justify-start pt-[10.5px] px-0 pb-0">
                          <div className="relative leading-[150%] font-medium mq450:text-lg mq450:leading-[26px]">
                            Operating Days
                          </div>
                        </div>
                        <button className="cursor-pointer [border:none] py-3 px-6 bg-grey-15 rounded-md flex flex-row items-start justify-start whitespace-nowrap hover:bg-dimgray-100">
                          <div className="relative text-xl leading-[150%] font-medium font-barlow text-grey-90 text-left">
                            Sunday to Friday
                          </div>
                        </button>
                      </div>
                    </div>
                    <div className="h-[155px] w-px relative box-border border-r-[1px] border-solid border-grey-15 mq1575:w-full mq1575:h-px" />
                    <div className="w-[402px] flex flex-col items-start justify-start pt-[31px] px-0 pb-0 box-border max-w-full text-lg">
                      <div className="self-stretch rounded-xl flex flex-row items-center justify-start py-3.5 pr-[13px] pl-[23px] gap-[20px] border-[1px] border-solid border-grey-15 mq825:flex-wrap">
                        <div className="relative leading-[150%] font-medium inline-block min-w-[124px]">
                          Stay Connected
                        </div>
                        <div className="flex-1 flex flex-row items-start justify-start gap-[14px] min-w-[143px]">
                          <button className="cursor-pointer py-5 px-[19px] bg-[transparent] flex-1 rounded-lg [background:linear-gradient(180deg,_#242424,_rgba(36,_36,_36,_0))] flex flex-col items-start justify-start border-[1px] border-solid border-darkslategray">
                            <img
                              className="w-6 h-6 relative overflow-hidden shrink-0"
                              alt=""
                              src="/icon-12.svg"
                            />
                          </button>
                          <div className="flex-1 rounded-lg [background:linear-gradient(180deg,_#242424,_rgba(36,_36,_36,_0))] flex flex-col items-start justify-start py-5 px-[19px] border-[1px] border-solid border-darkslategray">
                            <img
                              className="w-6 h-6 relative overflow-hidden shrink-0"
                              alt=""
                              src="/icon-13.svg"
                            />
                          </div>
                          <button className="cursor-pointer py-5 px-[19px] bg-[transparent] flex-1 rounded-lg [background:linear-gradient(180deg,_#242424,_rgba(36,_36,_36,_0))] flex flex-col items-start justify-start border-[1px] border-solid border-darkslategray">
                            <img
                              className="w-6 h-6 relative overflow-hidden shrink-0"
                              alt=""
                              src="/icon-14.svg"
                            />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch box-border flex flex-col items-start justify-start max-w-full shrink-0 z-[1] border-[1px] border-solid border-grey-15">
              <div className="self-stretch flex flex-col items-center justify-start py-[120px] px-5 box-border gap-[10px] bg-[url('/public/text-container2@3x.png')] bg-cover bg-no-repeat bg-[top] max-w-full">
                <h1 className="m-0 w-[896px] relative text-inherit font-semibold font-inherit inline-block max-w-full mq825:text-19xl mq450:text-10xl">
                  Frequently Asked Questions
                </h1>
                <div className="w-[896px] relative text-lg tracking-[-0.01em] leading-[150%] text-grey-90 inline-block max-w-full">
                  Still you have any questions? Contact our Team via
                  hello@squareup.com
                </div>
              </div>
              <div className="self-stretch h-[755px] relative box-border max-w-full border-t-[1px] border-solid border-grey-15 mq825:h-auto mq825:min-h-[755]">
                <div className="absolute top-[80px] left-[0px] w-[798px] h-[475px] max-w-full mq825:h-auto mq825:min-h-[475]">
                  <div className="absolute top-[0px] left-[0px] box-border w-[798px] h-px border-t-[1px] border-solid border-grey-15" />
                  <FaqItemContainer />
                  <div className="absolute top-[224px] left-[0px] w-full flex flex-col items-start justify-start gap-[29.5px] max-w-full">
                    <FrameComponent1
                      number="02"
                      heading="Is 100 Studios a Outsourcing Company?"
                      propPadding="23.5px 0px 0px"
                    />
                    <div className="self-stretch h-px relative box-border border-t-[1px] border-solid border-grey-15" />
                    <FrameComponent1
                      number="03"
                      heading="What does 100 Studios do?"
                      propPadding="23.5px 0px 0px"
                    />
                  </div>
                  <div className="absolute top-[474px] left-[0px] w-[798px] h-px">
                    <div className="absolute top-[0px] left-[0px] box-border w-full h-full border-t-[1px] border-solid border-grey-15" />
                    <div className="absolute top-[0px] left-[0px] box-border w-full h-full z-[1] border-t-[1px] border-solid border-grey-15" />
                  </div>
                </div>
                <div className="absolute top-[0px] left-[798px] box-border w-px h-[755px] z-[2] border-r-[1px] border-solid border-grey-15" />
                <div className="absolute top-[80px] left-[798px] w-[798px] flex flex-col items-start justify-start gap-[29.5px] max-w-full">
                  <div className="self-stretch h-px relative box-border z-[3] border-t-[1px] border-solid border-grey-15" />
                  <FrameComponent1
                    number="04"
                    heading="Do you offer ongoing support and maintenance after the project is completed?"
                    propPadding="7px 0px 0px"
                  />
                  <div className="self-stretch h-px relative box-border z-[3] border-t-[1px] border-solid border-grey-15" />
                  <FrameComponent1
                    number="05"
                    heading="What projects has 100 Studios built?"
                    propPadding="23.5px 0px 0px"
                  />
                  <div className="self-stretch flex flex-col items-start justify-start">
                    <div className="self-stretch h-px relative box-border z-[3] border-t-[1px] border-solid border-grey-15" />
                    <div className="self-stretch h-px relative mt-[-1px]">
                      <div className="absolute top-[0px] left-[0px] box-border w-full h-full z-[4] border-t-[1px] border-solid border-grey-15" />
                      <div className="absolute top-[0px] left-[0px] box-border w-full h-full z-[5] border-t-[1px] border-solid border-grey-15" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <ContentRow />
    </div>
  );
};

export default ContactPageDesktop;
