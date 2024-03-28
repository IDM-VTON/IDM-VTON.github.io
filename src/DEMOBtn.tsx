import { MouseEventHandler } from "react";
import DEMOSvg from "./svgs/DEMOSvg";

interface Props {
  placeholder: string;
}

const DEMOBtn = ({ placeholder }: Props) => {
  const handleClickGithub: MouseEventHandler<HTMLButtonElement> = () => {
    // window.open("", "_blank");
    window.open("https://huggingface.co/spaces/yisol/IDM-VTON");
  };

  return (
    <button
      className="rounded-3xl flex items-center px-3 py-1 border border-solid border-gray-500 bg-gray-500 text-white mt-4 cursor-pointer ml-3"
      onClick={handleClickGithub}
    >
      <DEMOSvg />
      <div>{placeholder}</div>
    </button>
  );
};

export default DEMOBtn;
