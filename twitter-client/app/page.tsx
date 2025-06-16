import React from "react";
import { BsTwitter, BsBell, BsEnvelope, BsBookmark } from "react-icons/bs";
import { BiHash, BiSolidHomeCircle, BiUser } from "react-icons/bi";

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
    title: "Profile",
    icon: <BiUser />,
  },
];

export default function Home() {
  return (
    <div>
      <div className="grid grid-cols-12 h-screen w-screen px-56">
        <div className="col-span-3 pt-8">
          <div className="text-4xl hover:bg-gray-800 p-4 rounded-full h-fit w-fit cursor-pointer transition-all">
            <BsTwitter />
          </div>
          <div className="mt-4 text-2xl font-semibold pr-4">
            <ul>
              {sidebarMenuItems.map((item) => (
                <li
                  key={item.title}
                  className="flex items-center justify-start gap-4 hover:bg-gray-800 px-5 py-2 w-fit rounded-full cursor-pointer mt-2"
                >
                  <span>{item.icon}</span>
                  <span>{item.title}</span>
                </li>
              ))}
            </ul>
            <div className="mt-5 pr-10">
              <button className="bg-sky-500 font-semibold rounded-full p-3 w-full">
                Tweet
              </button>
            </div>
          </div>
        </div>
        <div className="col-span-6 border-r border-l border-gray-400"></div>
        <div className="col-span-3"></div>
      </div>
    </div>
  );
}
