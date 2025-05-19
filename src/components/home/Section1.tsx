"use client";

import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import Column from "@/components/core/Column";
import ConstrainedBox from "@/components/core/constrained-box";
import ResponsiveBox from "@/components/core/ResponsiveBox";
import Row from "@/components/core/Row";
import { FlipWords } from "@/components/common/FlipWords";
import socialLinks from "@/data/socialLinks";
import TalkButton from "./ui/TalkButton";

const imageList = [
  {
    src: "/images/Black Hair And Glasses.jpeg",
    alt: "Jacklyne Professional",
  },
  {
    src: "/images/Work Aesthetic.jpeg",
    alt: "Jacklyne at Work",
  },
];

const HomeSection1 = ({ id }: Readonly<{ id: string }>) => {
  return (
    <ResponsiveBox
      classNames="dark:bg-[var(--bgColor)] bg-[var(--bgColor)] dark:bg-grid-white/[0.1] bg-grid-white/[0.1] min-h-screen items-center justify-center relative overflow-hidden rounded-md"
      id={id}
    >
      <ConstrainedBox classNames="px-4 py-8 pt-16 z-20 items-center justify-center">
        <Column classNames="w-full items-center justify-center">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center"
          >
            <p className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-center text-[var(--textColor)] dark:text-[var(--textColor)]">
              Hi there, I am
            </p>
            <FlipWords
              words={["Jacklyne.", "@jackie."]}
              className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-center text-[var(--primaryColor)] dark:text-[var(--primaryColor)]"
            />
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-sm md:text-base text-[var(--textColorLight)] dark:text-[var(--textColorLight)] mt-4"
          >
            🗂️ Administrative Support | 📊 Executive Support | 🤝 Personal Assistant
          </motion.p>

          {/* Images flying in one by one */}
          <div className="flex flex-col md:flex-row gap-6 mt-8">
            {imageList.map((img, index) => (
              <motion.div
                key={img.src}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 + index * 0.4, duration: 0.8, ease: "easeOut" }}
                className="rounded-xl overflow-hidden shadow-lg max-w-sm"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={500}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </motion.div>
            ))}
          </div>

          {/* Talk Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 0.6 }}
            className="gap-4 mt-12 lg:mt-16 flex flex-col md:flex-row bg-green-500 p-4 rounded-md"
          >
            <TalkButton />
          </motion.div>
        </Column>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.8 }}
          className="mt-12 lg:mt-16 w-full flex flex-col items-center"
        >
          <p className="text-base font-medium">Follow me here</p>
          <Row classNames="mt-2 gap-2">
            {socialLinks.slice(0, 5).map((link, index) => (
              <Link
                key={`social-link-${index}`}
                href={link.url}
                target="_blank"
                className="app__outlined_btn !rounded-full !p-2 lg:!p-3 !aspect-square !border-[var(--textColor)]"
                aria-label={link.name}
              >
                <span className="text-base text-[var(--blackColor)]">
                  {typeof link.icon === "string" ? null : (
                    <FontAwesomeIcon icon={link.icon} />
                  )}
                </span>
              </Link>
            ))}
          </Row>
        </motion.div>
      </ConstrainedBox>
    </ResponsiveBox>
  );
};

export default HomeSection1;
