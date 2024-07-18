import { Space_Mono } from "next/font/google";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./ui/MagicButton";
import { FiDownload } from "react-icons/fi";
import { TypewriterEffectSmooth } from "./ui/Typewriter";
import Social from "./Socail";

const Hero = () => {
  const words = [
    {
      text: "Hi, ",
    },
    {
      text: "I'm ",
    },

    {
      text: "Techatat Obun.",
      className: "text-purple dark:text-purple",
    },
  ];
  return (
    <div className='md:pb-10 pb-2'>
      <div>
        <Spotlight
          className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen'
          fill='white'
        />
        <Spotlight
          className='h-[80vh] w-[50vw] top-10 left-full'
          fill='purple'
        />
        <Spotlight className='left-80 top-28 h-[80vh] w-[50vw]' fill='blue' />
      </div>
      {/**
       *  UI: grid
       *  change bg color to bg-black-100 and reduce grid color from
       *  0.2 to 0.03
       */}
      <div
        className='h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center'
      >
        {/* Radial gradient for the container to give a faded look */}
        <div className='absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]' />
      </div>
      <div className='flex justify-center relative my-20 z-10'>
        <div className='py-5 md:py-20 grid grid-cols-1 md:grid-cols-2'>
          <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center md:items-start justify-center sm:items-center'>
            <h2 className='uppercase tracking-widest text-xs text-center text-blue-100 max-w-80'>
              &#123; Software | Full-Stack &#125; Developer
            </h2>

            <TypewriterEffectSmooth words={words} />

            <p className='md:text-left text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl font-thin'>
              I&apos;m a soon-to-be graduate in Computer Programming with
              hands-on experience in Next.js, Node.js, JavaScript, C++, Java,
              and Python. I love creating efficient and elegant solutions to
              complex problems. Let&apos;s build something amazing together!
            </p>
            <div className='flex flex-col xl:flex-row items-center gap-8'>
              <a
                href='/techatat_resume.pdf'
                download
                className='flex items-center justify-center'
              >
                <MagicButton
                  title='DOWNLOAD CV'
                  icon={<FiDownload />}
                  position='right'
                />
              </a>

              <div className='mb-8 xl:mb-0'>
                <Social
                  containerStyles='flex gap-6 justify-center items-center'
                  iconStyles='w-9 h-9 border border-purple rounded-full flex justify-center items-center text-purple hover:bg-purple hover:text-black hover:transition-all duration-500 lg:mt-[40px]'
                />
              </div>
            </div>
          </div>
          <div>
            <img
              src='/hero3.png'
              alt='hero'
              className='sm:w-3/4 sm:h-3/4 md:w-full md:h-full object-cover object-center mx-auto'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
