import { FunctionComponent } from "react";

export type ImageIconType = {
  className?: string;
};

const ImageIcon: FunctionComponent<ImageIconType> = ({ className = "" }) => {
  return (
    <img
      className={`self-stretch h-[423px] relative max-w-full overflow-hidden shrink-0 object-cover ${className}`}
      loading="lazy"
      alt=""
      src="/image@2x.png"
    />
  );
};

export default ImageIcon;
