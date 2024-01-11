import React from "react";
import {
    RxDiscordLogo,
    RxGithubLogo,
    RxInstagramLogo,
    RxTwitterLogo,
    RxLinkedinLogo,
} from "react-icons/rx";

import { FaYoutube } from "react-icons/fa";
import { InboxIcon } from '@heroicons/react/24/outline';

const Footer = () => {
    return (
        <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px]">
            <div className="flex flex-col items-center justify-center m-auto space-y-6">
                <div className="flex flex-row items-stretch justify-around w-full space-x-4">

                    {/* Social Media Section */}
                    <div className="flex-1 flex flex-col items-center justify-center space-y-3">
                        <h2 className="font-bold text-[18px]">Social Media</h2>
                        <a href="https://github.com/bernymelo3" className="flex flex-row items-center my-[15px] cursor-pointer">
                            <RxGithubLogo />
                            <span className="text-[15px] ml-[6px]">Github</span>
                        </a>
                        <a href="https://www.linkedin.com/in/bernardomelodc/" className="flex flex-row items-center my-[15px] cursor-pointer">
                            <RxLinkedinLogo />
                            <span className="text-[15px] ml-[6px]">Linkedin</span>
                        </a>
                    </div>

                    {/* Contact Me Section */}
                    <div className="flex-1 flex flex-col items-center justify-center space-y-3">
                        <h2 className="font-bold text-[18px]">Contact Me</h2>
                        <a href="mailto:bernardomelodc@gmail.com" className="flex items-center text-[15px] hover:text-gray-300">
                            <InboxIcon className="h-5 w-5 mr-2" />
                            bernardomelodc@gmail.com
                        </a>
                    </div>

                </div>

                {/* Footer Bottom Text */}
                <div className="mt-6 text-[15px] text-center">
                    &copy; Bernardo Melo 2024. All rights reserved
                </div>
            </div>
        </div>
    )
}

export default Footer;
