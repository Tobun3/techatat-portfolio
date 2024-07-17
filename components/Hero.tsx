import { Space_Mono } from "next/font/google";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./ui/MagicButton";
import { FiDownload } from "react-icons/fi";
import { TypewriterEffectSmooth } from "./ui/Typewriter";

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
    <div className='pb-20 pt-36'>
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
        <div className='py-20 grid grid-cols-1 md:grid-cols-2'>
          <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
            <h2 className='uppercase tracking-widest text-xs text-center text-blue-100 max-w-80'>
              &#123; Software | Full-Stack &#125; Developer
            </h2>
            {/*<TextGenerateEffect
            className='text-center text-[40px] md:text-5xl lg:text-6xl'
            words='Transforming Concepts into Seamless User Experiences'
          />*/}
            <TypewriterEffectSmooth words={words} />

            <p className='text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl'>
              I&apos;m a soon-to-be graduate in Computer Programming with
              hands-on experience in Next.js, Node.js, JavaScript, C++, Java,
              and Python. I love creating efficient and elegant solutions to
              complex problems. Let&apos;s build something amazing together!
            </p>

            <a href='/techatat_resume.pdf' download>
              <MagicButton
                title='DOWNLOAD CV'
                icon={<FiDownload />}
                position='right'
              />
            </a>
          </div>
          <div>
            <img
              src='/hero3.png'
              alt='hero'
              className='sm:w-[50%] sm:h-[50%] md:w-full md:h-full object-cover object-center mx-auto'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
