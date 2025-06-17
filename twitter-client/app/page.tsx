import React from "react";
import { BsTwitter, BsBell, BsEnvelope, BsBookmark } from "react-icons/bs";
import { BiHash, BiMoney, BiSolidHomeCircle, BiUser } from "react-icons/bi";

import { FeedCard } from "@/components/feedCard";
import { PiDotsThreeCircle } from "react-icons/pi";

interface TwitterSidebarButton {
  title: string;
  icon: React.ReactNode;
}

const sidebarMenuItems: TwitterSidebarButton[] = [
  {
    title: "Home",
    icon: <BiSolidHomeCircle />,
  },
  {
    title: "Explore",
    icon: <BiHash />,
  },
  {
    title: "Notifications",
    icon: <BsBell />,
  },
  {
    title: "Messages",
    icon: <BsEnvelope />,
  },
  {
    title: "Bookmarks",
    icon: <BsBookmark />,
  },
  {
    title: "Twitter Blue",
    icon: <BiMoney />,
  },
  {
    title: "Profile",
    icon: <BiUser />,
  },
  {
    title: "More",
    icon: <PiDotsThreeCircle />,
  },
];

export default function Home() {
  return (
    <div>
      <div className="grid grid-cols-12 h-screen w-screen px-56">
        <div className="col-span-3 pt-1 ml-3">
          <div className="text-3xl hover:bg-gray-800 p-3 rounded-full h-fit w-fit cursor-pointer transition-all">
            <BsTwitter />
          </div>
          <div className="mt-4 text-xl pr-4">
            <ul>
              {sidebarMenuItems.map((item) => (
                <li
                  key={item.title}
                  className="flex items-center justify-start gap-4 hover:bg-gray-800 px-3 py-2 w-fit rounded-full cursor-pointer mt-1"
                >
                  <span>{item.icon}</span>
                  <span>{item.title}</span>
                </li>
              ))}
            </ul>
            <div className="mt-5">
              <button className="bg-sky-500 font-semibold rounded-full py-2 px-4 w-full">
                Tweet
              </button>
            </div>
          </div>
        </div>
        <div className="col-span-6 border-l border-r border-gray-600 h-screen overflow-y-scroll">
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
        </div>
        <div className="col-span-3"></div>
      </div>
    </div>
  );
}
