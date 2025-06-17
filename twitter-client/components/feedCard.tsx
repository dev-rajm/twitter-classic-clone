import Image from "next/image";
import React from "react";
import { AiOutlineRetweet } from "react-icons/ai";
import { BiHeart, BiMessageRounded, BiUpload } from "react-icons/bi";

export const FeedCard: React.FC = () => {
  return (
    <div className="border border-l-0 border-r-0 border-b-0 border-gray-600 p-4 hover:bg-slate-900 transition-all cursor-pointer">
      <div className="grid grid-cols-12 gap-3">
        <div className="col-span-1">
          <Image
            className="rounded-full"
            src={"https://avatars.githubusercontent.com/u/108714991?v=4"}
            alt="user-image"
            width={50}
            height={50}
          />
        </div>
        <div className="col-span-11">
          <h5>Raj Manna</h5>
          <p>
            Hey @SamsungIndia , really disappointed! My Galaxy S21 FE suddenly
            developed a white line last Sunday and now a green line appeared
            too.
          </p>
          <div className="flex justify-between mt-5 text-xl items-center p-2 w-[90%]">
            <div>
              <BiMessageRounded />
            </div>
            <div>
              <AiOutlineRetweet />
            </div>
            <div>
              <BiHeart />
            </div>
            <div>
              <BiUpload />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
