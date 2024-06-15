import { FunctionComponent } from "react";

export type InputFieldType = {
  className?: string;
  text?: string;
};

const InputField: FunctionComponent<InputFieldType> = ({
  className = "",
  text,
}) => {
  return (
    <div
      className={`flex-1 rounded-lg bg-gray-300 box-border flex flex-col items-start justify-start pt-6 pb-[23px] pr-[29px] pl-[39px] gap-[20px] max-w-full text-left text-3xl text-absolute-white font-barlow border-[1px] border-solid border-grey-15 ${className}`}
    >
      <div className="w-[350px] relative leading-[150%] font-medium inline-block max-w-full mq450:text-lg mq450:leading-[26px]">
        {text}
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[6px] text-lg text-grey-40">
        <div className="relative leading-[150%] inline-block min-w-[77px]">
          Type here
        </div>
        <div className="self-stretch h-px relative box-border border-t-[1px] border-solid border-grey-20" />
      </div>
    </div>
  );
};

export default InputField;
