import React from "react";
import Link from "next/link";
import CopyRight from "./CopyRight";
import SubscribeForm from "./SubscribeForm";
import { footerItems } from "../../utils/Data/footerItems";
import Image from "next/image";

function Footer() {
  return (
    <div className="bg-gray-800 w-full">
      <div className="grid xl:grid-cols-4 grid-cols-2 px-4 py-5 justify-center items-center">
        <div className="flex flex-col items-center">
          <Image
            src="/images/HamroAim.png"
            alt=""
            width="150px"
            height="100px"
          />
        </div>
        <div className="flex flex-col items-center">
          <ul className="grid sm:grid-cols-2 text-white text-sm font-semibold cursor-default">
            {footerItems.map((footerMenuList, index) => {
              return (
                <Link href={footerMenuList.path} key={index}>
                  <a>
                    <li className="px-5 py-2 border-b-2 border-transparent hover:border-b-2 hover:border-white rounded-md hover:shadow-lg ">
                      {footerMenuList.items}
                    </li>
                  </a>
                </Link>
              );
            })}
          </ul>
        </div>
        <div className="flex flex-col items-center mt-5 xl:mt-0 ">
          <SubscribeForm />
        </div>
        <div className="flex flex-row w-full justify-center items-center space-x-2">
          <CopyRight />
        </div>
      </div>
    </div>
  );
}

export default Footer;