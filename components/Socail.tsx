import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import React from "react";

interface SocialLink {
  icon: JSX.Element;
  path: string;
}

interface SocialProps {
  containerStyles: string;
  iconStyles: string;
}

const socials: SocialLink[] = [
  { icon: <FaGithub />, path: "https://github.com/Tobun3" },
  {
    icon: <FaLinkedin />,
    path: "https://www.linkedin.com/in/techatat-obun-423180240/",
  },
  //{ icon: <FaTwitter />, path: "https://twitter.com/yourhandle" },
  //{ icon: <FaYoutube />, path: "https://youtube.com/yourchannel" },
];

const Social: React.FC<SocialProps> = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((social, index) => (
        <Link href={social.path} key={index} passHref legacyBehavior>
          <a target='_blank' rel='noopener noreferrer'>
            <div className={iconStyles}>{social.icon}</div>
          </a>
        </Link>
      ))}
    </div>
  );
};

export default Social;
