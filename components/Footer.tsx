import React from "react";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";
import { socialMedia } from "@/data";
import Social from "./Socail";

const Footer = () => {
  return (
    <footer className='w-full pb-10 mb-[10px] md:mb-5' id='contact'>
      <div className='flex flex-col items-center'>
        <h1 className='heading lg:max-w-[45vw]'>
          Ready to take <span className='text-purple'>your</span> digital
          presence to the next level?
        </h1>
        <p className='text-white-200 md:mt-10 my-5 text-center'>
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>
        <a href='mailto:techatat.ob@gmail.com'>
          <MagicButton
            title='Contact Me'
            icon={<FaLocationArrow />}
            position='right'
          />
        </a>
      </div>

      <div className='flex mt-16 md:flex-row flex-col justify-between items-center'>
        <p className='md:text-base text-sm md:font-normal font-light mb-4'>
          Copyright © 2024 Techatat
        </p>

        <div className='flex items-center md:gap-3 gap-6 mb-4'>
          <div className='mb-8 xl:mb-0'>
            <Social
              containerStyles='flex gap-6 justify-center items-center'
              iconStyles='w-9 h-9 border border-purple rounded-full flex justify-center items-center text-purple hover:bg-purple hover:text-black hover:transition-all duration-500 '
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
