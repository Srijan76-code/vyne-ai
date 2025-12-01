"use client";
import React from "react";

import { LiaLinkedinIn } from "react-icons/lia";
import { IoLogoInstagram } from "react-icons/io";
import { RiTwitterXLine } from "react-icons/ri";
// import Cta from "../CTA/Cta";

import { motion } from "framer-motion";

import AvailablePill from "./AvailablePill";
import StaggerFadeRise from "./animations/StaggerFadeRise";
import { staggerItemVariants } from "./animations/variants";
import { HoverButton } from "@/components/Buttons/HoverButton";
import Link from "next/link";
const Footer = () => {
  return (
    <StaggerFadeRise>
      <div className="relative mt-[350vh] w-full h-[700px] overflow-hidden">
        {/* Background video */}
        <video
          src="/Footer/Footer.mp4"
          className="absolute inset-0 w-full h-full object-cover brightness-[0.7]"
          autoPlay
          loop
          muted
        ></video>

        {/* Overlay content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 gap-6">
          <motion.div variants={staggerItemVariants}>
            <AvailablePill />
          </motion.div>

          <motion.div variants={staggerItemVariants}>
            <p className="mt-4 max-w-4xl text-neutral-200 text-4xl font-raleway font-medium">
              Curious about what you can{" "}
              <span className="font-instrument-serif italic text-blue-500">
                BUILD?
              </span>{" "}

            </p>
          </motion.div>

          <motion.div variants={staggerItemVariants}>
            {/* <Cta> */}
              <HoverButton
                data-cal-namespace="30min"
                data-cal-link="srijanpatel/30min"
                data-cal-config='{"layout":"month_view"}'
                glowColor="#2667ff"
                backgroundColor="#0d0d0d"
                textColor="#ffffff"
                hoverTextColor="#ffffff"
                className="!px-5 !py-2 text-lg font-light tracking-wider uppercase mt-6"
              >
                Start Building
              </HoverButton>
            {/* </Cta> */}
          </motion.div>

          {/* Social Links */}
          <div className="text-neutral-300 flex flex-row items-center gap-6 mt-3">
            <div className="flex items-center gap-4">
              <Link
                href="https://instagram.com/pixlyne.studios"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="group"
              >
                <IoLogoInstagram className="w-7 h-7 group-hover:text-blue-400 transition-colors duration-300 cursor-pointer" />
              </Link>
              <span className="h-6 w-px bg-white/30" />
            </div>

            <div className="flex items-center gap-4">
              <Link
                href="https://linkedin.com/company/pixlyne-agency"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="group"
              >
                <LiaLinkedinIn className="w-7 h-7 group-hover:text-blue-400 transition-colors duration-300 cursor-pointer" />
              </Link>
              <span className="h-6 w-px bg-white/30" />
            </div>

            <Link
              href="https://x.com/pixlyne_agency"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter / X"
              className="group"
            >
              <RiTwitterXLine className="w-6 h-6 group-hover:text-blue-400 transition-colors duration-300 cursor-pointer" />
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className="absolute bottom-0 left-0 w-full flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0 px-6 sm:px-10 py-4 
        bg-gradient-to-t from-black/70 via-black/40 to-transparent text-[13px] md:text-sm text-neutral-400 tracking-wide"
        >
          <Link
            href="mailto:hello@pixlyne.agency"
            className="hover:text-blue-500 transition-colors duration-300"
          >
            hello@vyne.ai
          </Link>

          <p className="hover:text-blue-500 transition-colors duration-300">
            © 2025 Vyne AI
          </p>
        </div>
      </div>
    </StaggerFadeRise>
  );
};

export default Footer;
